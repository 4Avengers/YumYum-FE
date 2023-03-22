import instance from "apis/instance";
import { useQuery } from "react-query";

/** 요즘 뜨는 맛집 리스트 */
const ReadHotPlaceList = () => {
  return useQuery(["hotPlaceList"], async () => {
    const response = await instance.get("my-list/collections/main/hot");
    return response.data;
  });
};

/** 내 주변 맛집리스트 */
const ReadAroundPlaceList = ({ x, y }) => {
  console.log({ x, y });
  return useQuery(
    ["aroundPlaceList"],
    async () => {
      const response = await instance.get("restaurant/main/near-restaurant", {
        x,
        y,
      });
      return response.data;
    },
    {
      enabled: !!x && !!y,
    }
  );
};

/** 회원들의 추천 맛집리스트 */
const ReadRecommandPlaceList = (category) => {
  return useQuery(
    ["recommandPlaceList"],
    async () => {
      const response = await instance.get(
        `posts/main/trending?category=${category}`
      );
      return response.data;
    },
    {
      enabled: !!category,
    }
  );
};

const HomeService = {
  ReadHotPlaceList,
  ReadAroundPlaceList,
  ReadRecommandPlaceList,
};
export default HomeService;
