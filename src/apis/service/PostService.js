import instance from "apis/instance";
import { useQuery } from "react-query";

/** 포스트 작성 */
const AddPost = async (payload) => {
  const response = await instance.post("posts", payload);
  return response.data;
};

/** 뉴스피드 최신 포스트 목록 조회 */
const ReadNewsFeeds = () => {
  return useQuery(["newsFeeds", "current"], async () => {
    const response = await instance.get("posts");
    return response.data;
  });
};

const PostService = { AddPost };
export default PostService;

// const data = {
//   address_name: "경기 남양주시 평내동 246-21",
//   category_group_code: "FD6",
//   category_group_name: "음식점",
//   category_name: "음식점 > 패스트푸드 > 맥도날드",
//   distance: "2488",
//   id: "21567808",
//   phone: "070-7017-6508",
//   place_name: "맥도날드 평내DT점",
//   place_url: "http://place.map.kakao.com/21567808",
//   road_address_name: "경기 남양주시 경춘로 1273",
//   x: "127.234876440517",
//   y: "37.6480255687826",
// };
