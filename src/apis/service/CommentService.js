import instance from "apis/instance";
import { useMutation, useQuery, useQueryClient } from "react-query";

/** 포스트에 해당하는 댓글들 불러오기 */
const ReadComments = (postId) => {
  return useQuery(["comments", postId], async () => {
    const response = await instance.get(`posts/${postId}/comments`);
    return response.data;
  });
};

/** 포스트에 댓글 달기 */
const AddComment = (postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post(`posts/${postId}/comments`, payload);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["comments", postId]),
    }
  );
};

/** 댓글 수정 */
const EditComment = (postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post(`posts/${postId}/comments`, payload);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["comments", postId]),
    }
  );
};

/** 댓글 삭제 */

/** 댓글 좋아요 */

/** 댓글 */

const CommentService = { ReadComments, AddComment, EditComment };
export default CommentService;
