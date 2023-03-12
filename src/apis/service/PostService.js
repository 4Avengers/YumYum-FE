import instance from "apis/instance";
import { useMutation, useQuery } from "react-query";

/** 포스트 작성 */
const AddPost = async (payload) => {
  const response = await instance.post("posts", {
    ...payload,
    restaurantId: 1,
  });
  return response.data;
};

/** 포스트 수정 */
const EditPost = (postId) => {
  return useMutation(async (payload) => {
    const response = await instance.put(`posts/${postId}`);
    return response;
  });
};
/** 포스트 삭제 */
const RemovePost = (postId) => {
  return useMutation(async (payload) => {
    const response = await instance.delete(`posts/${postId}`);
    return;
  });
};

/** 뉴스피드 최신 포스트 목록 조회 */
const ReadNewsFeeds = () => {
  return useQuery(["newsFeeds", "current"], async () => {
    const response = await instance.get("posts");
    return response.data;
  });
};

/** 포스트 좋아요 (성공하면 refetch해야함)*/
const AddPostLike = () => {
  return useMutation(async (postId) => {
    const response = await instance.post(`posts/${postId}`);
    return response;
  });
};

/** 포스트 좋아요 취소 (성공하면 refetch해야함)*/
const RemovePostLike = () => {
  return useMutation(async (postId) => {
    const response = await instance.delete(`posts/${postId}`);
    return response;
  });
};

const PostService = {
  AddPost,
  ReadNewsFeeds,
  AddPostLike,
  RemovePostLike,
  EditPost,
  RemovePost,
};
export default PostService;
