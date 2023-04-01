import instance from "apis/instance";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";

/** 포스트에 해당하는 댓글들 불러오기 */
const ReadComments = (postId) => {
  return useInfiniteQuery(
    ["comments", postId],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(
        `posts/${postId}/comments?page=${pageParam}`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage?.length < 13 ? undefined : allPages.length + 1;
        return nextPage;
      },
      enabled: !!postId,
      suspense: true,
    }
  );
};

/** 포스트에 댓글 추가 */
const AddComment = ({ postId, queryKey }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post(`posts/${postId}/comments`, payload);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
        queryKey && queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

/** 댓글 수정 */
const EditComment = (postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.put(
        `posts/${postId}/comments/${payload.commentId}`,
        { content: payload.content }
      );
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["comments", +postId]),
    }
  );
};

/** 댓글 삭제 */
const RemoveComment = ({ postId, queryKey }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (commentId) => {
      const response = await instance.delete(
        `posts/${postId}/comments/${commentId}`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", +postId]);
        queryKey && queryClient.invalidateQueries(queryKey);
      },
    }
  );
};
/** 댓글 좋아요 */
const AddCommentLike = (postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (commentId) => {
      const response = await instance.post(
        `posts/${postId}/comments/${commentId}/like`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", +postId]);
      },
    }
  );
};

/** 댓글 좋아요 삭제 */
const RemoveCommentLike = (postId) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (commentId) => {
      const response = await instance.delete(
        `posts/${postId}/comments/${commentId}/like`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", +postId]);
      },
    }
  );
};

const CommentService = {
  ReadComments,
  AddComment,
  EditComment,
  RemoveComment,
  AddCommentLike,
  RemoveCommentLike,
};
export default CommentService;
