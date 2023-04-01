import instance from "apis/instance";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { useNavigate } from "react-router-dom";

/** 포스트 작성 */
const AddPost = (profileId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post("posts", payload);
      return response;
    },
    {
      onSuccess: () =>
        queryClient.invalidateQueries(["profile", "posts", profileId]),
      onError: (e) => console.log(e),
    }
  );
};

/** 포스트 조회 (포스트 수정용)*/
const ReadPost = async (postId) => {
  const response = await instance.get(`posts/${postId}`);
  return response.data;
};

/** 포스트 단일 조회 */
const ReadPostDetail = (postId) => {
  return useQuery(
    ["post", postId],
    async () => {
      const response = await instance.get(`posts/${postId}`);
      return response.data;
    },
    {
      enabled: !!postId,
      select: (data) => {
        const hashtags = data?.hashtags?.map((item) => item.name);
        return { ...data, hashtags };
      },
    }
  );
};

/** 포스트 수정 */
const EditPost = ({ postId, profileId }) => {
  const naviagate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.patch(`posts/${postId}`, payload);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile", "posts", profileId]);
        naviagate(-1);
      },
    }
  );
};
/** 포스트 삭제 */
const RemovePost = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.delete(`posts/${postId}`);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

/** 뉴스피드 최신 포스트 목록 조회 */
const ReadNewsFeeds = () => {
  return useInfiniteQuery(
    ["newsFeeds", "current"],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(`posts?page=${pageParam}`);
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.length < 8 ? undefined : allPages.length + 1;
        return nextPage;
      },
      suspense: true,
    }
  );
};

/** 뉴스피드 내 주변 피드 목록 조회 */
const ReadNewsFeedsAround = ({ x, y }) => {
  return useInfiniteQuery(
    ["newsFeeds", "around"],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(
        `posts/feed/aroundMe?page=${pageParam}&x=${x}&y=${y}`,
        {
          getNextPageParam: (lastPage, allPages) => {
            const nextPage =
              lastPage?.length < 8 ? undefined : allPages.length + 1;
            return nextPage;
          },
          enabled: !!x,
          suspense: true,
        }
      );
      return response.data;
    },
    {
      enabled: !!x && !!y,
    }
  );
};

/** 포스트 좋아요 (성공하면 refetch해야함)*/ // optimistic update 예정
const AddPostLike = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.post(`posts/${postId}/like`);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    }
  );
};

/** 포스트 좋아요 취소 (성공하면 refetch해야함)*/ // optimistic update 예정
const RemovePostLike = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.delete(`posts/${postId}/like`);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    }
  );
};

const PostService = {
  AddPost,
  ReadPost,
  ReadPostDetail,
  ReadNewsFeeds,
  AddPostLike,
  RemovePostLike,
  EditPost,
  RemovePost,
  ReadNewsFeedsAround,
};
export default PostService;
