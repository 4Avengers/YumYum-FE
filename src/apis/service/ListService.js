import instance from "apis/instance";
import { useQuery } from "react-query";

/** 해당 유저의 맛집리스트 목록 불러오기*/
const ReadCollectionList = (userId) => {
  return useQuery(["collectionList", userId], async () => {
    const response = await instance.get(`/my-list/collections`);
    return response.data;
  });
};

/** 나의 맛집리스트 타이틀만 불러오기 */
const ReadMyList = (userId) => {
  return useQuery(["myList"], async () => {
    const response = await instance.get("/myList");
    return response.data;
  });
};

const ListService = { ReadCollectionList, ReadMyList };
export default ListService;
