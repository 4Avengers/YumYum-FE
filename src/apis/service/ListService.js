import instance from "apis/instance";
import { useMutation, useQuery, useQueryClient } from "react-query";

/** 해당 유저의 맛집리스트 목록 불러오기*/
const ReadCollectionList = (userId) => {
  return useQuery(["collectionList", userId], async () => {
    const response = await instance.get(`/my-list/collections`);
    return response.data;
  });
};

/** 나의 맛집리스트 타이틀만 불러오기 */
const ReadMyList = () => {
  return useQuery(
    ["myList"],
    async () => {
      const response = await instance.get("/my-list");
      return response.data;
    },
    {
      staleTime: Infinity,
    }
  );
};

/** 나의 맛집리스트 카테고리 추가하기*/
const AddMyList = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post("/my-list/collections", payload);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["myList"]),
    }
  );
};

const ListService = { ReadCollectionList, ReadMyList, AddMyList };
export default ListService;
