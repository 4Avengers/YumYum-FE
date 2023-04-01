import instance from "apis/instance";
import { useQuery } from "react-query";

/** 요즘 뜨는 맛집 리스트 */
const ReadHotPlaceList = () => {
  return useQuery(
    ["hotPlaceList"],
    async () => {
      const response = await instance.get("my-list/collections/main/hot");
      return response.data;
    },
    {
      suspense: true,
    }
  );
};

/** 내 주변 맛집리스트 */
const ReadAroundPlaceList = ({ x, y }) => {
  return useQuery(
    ["aroundPlaceList", x + y],
    async () => {
      const response = await instance.get(
        `restaurant/main/near-restaurant?x=${x}&y=${y}`
      );
      return response.data;
    },
    {
      enabled: !!x,
      suspense: true,
      select: (data) => {
        return data?.map((item) => {
          const {
            restaurant_id,
            restaurant_address_name,
            restaurant_kakao_place_id,
            restaurant_place_name,
            restaurant_road_address_name,
            restaurant_x,
            restaurant_y,
            restaurant_category_group_name,
            restaurant_category_name,
          } = item;

          const payload = {
            id: restaurant_id,
            address_name: restaurant_address_name,
            kakao_place_id: restaurant_kakao_place_id,
            place_name: restaurant_place_name,
            road_address_name: restaurant_road_address_name,
            x: +restaurant_x,
            y: +restaurant_y,
            category_group_name: restaurant_category_group_name,
            category_name: restaurant_category_name,
          };

          const newData = { ...item, ...payload };
          delete newData.restaurant_id;
          delete newData.restaurant_address_name;
          delete newData.restaurant_kakao_place_id;
          delete newData.restaurant_place_name;
          delete newData.restaurant_road_address_name;
          delete newData.restaurant_x;
          delete newData.restaurant_y;
          delete newData.restaurant_category_group_name;
          delete newData.restaurant_category_name;
          return newData;
        });
      },
    }
  );
};

/** 회원들의 추천 맛집리스트 */
const ReadRecommandPlaceList = (category) => {
  return useQuery(
    ["recommandPlaceList", category],
    async () => {
      const response = await instance.get(
        `posts/main/trending?category=${category}`
      );
      return response.data;
    },
    {
      enabled: !!category,
      staleTime: 60000,
      suspense: true,
    }
  );
};

const HomeService = {
  ReadHotPlaceList,
  ReadAroundPlaceList,
  ReadRecommandPlaceList,
};
export default HomeService;
