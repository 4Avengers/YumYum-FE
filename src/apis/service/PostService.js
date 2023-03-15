import instance from "apis/instance";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

/** 포스트 작성 */
const AddPost = async (payload) => {
  const response = await instance.post("posts", payload);
  return response.data;
};

/** 포스트 조회 */
const ReadPost = async (postId) => {
  const response = await instance.get(`posts/${postId}`);
  return response.data;
};

/** 포스트 수정 */
const EditPost = (postId) => {
  const naviagate = useNavigate();
  return useMutation(
    async (payload) => {
      const response = await instance.patch(`posts/${postId}`, payload);
      return response;
    },
    {
      onSuccess: () => naviagate(-1),
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
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    }
  );
};

/** 뉴스피드 최신 포스트 목록 조회 */
const ReadNewsFeeds = () => {
  return useQuery(["newsFeeds", "current"], async () => {
    const response = await instance.get("posts");
    return response.data;
  });
};

/** 포스트 좋아요 (성공하면 refetch해야함)*/
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

/** 포스트 좋아요 취소 (성공하면 refetch해야함)*/
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
  ReadNewsFeeds,
  AddPostLike,
  RemovePostLike,
  EditPost,
  RemovePost,
};
export default PostService;
