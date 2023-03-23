import instance from "apis/instance";
import { useMutation, useQuery, useQueryClient } from "react-query";

/** 나의 맛집리스트 타이틀만 불러오기 */
const ReadMyList = () => {
  return useQuery(
    ["myList"],
    async () => {
      const response = await instance.get("/my-list/collections/name");
      return response.data;
    },
    {
      staleTime: Infinity,
    }
  );
};

/** 나의 맛집리스트 카테고리 추가하기*/
const AddMyList = (profileId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post("/my-list/collections", payload);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myList"]);
        if (profileId)
          queryClient.invalidateQueries(["collections", profileId]);
      },
    }
  );
};

/** 나의 맛집리스트 단일 조회 (수정 모달) */
const ReadMyListItem = async (collectionId) => {
  const response = await instance.get(
    `my-list/collections/update/${collectionId}`
  );
  return response.data;
};

/** 나의 맛집리스트  수정 */
const EditMyList = ({ collectionId, profileId }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.put(
        `my-list/collections/${collectionId}`,
        payload
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myList"]);
        queryClient.invalidateQueries(["collections", collectionId, "posts"]);
        if (profileId)
          queryClient.invalidateQueries(["collections", profileId]);
      },
    }
  );
};

/** 나의 맛집리스트 삭제 */
const RemoveMyList = ({ collectionId, profileId }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const response = await instance.delete(
        `my-list/collections/${collectionId}`
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myList"]);
        if (profileId)
          queryClient.invalidateQueries(["collections", profileId]);
      },
    }
  );
};

/** 유저의 컬렉션 리스트 조회 */
const ReadCollectionList = (profileId) => {
  return useQuery(
    ["collections", profileId],
    async () => {
      const response = await instance.get(`my-list/collections/${profileId}`);
      return response.data;
    },
    {
      enabled: !!profileId,
    }
  );
};

/** 해당 컬렉션의 이름 내용 이미지 그리고 프로필의 닉네임 추출*/
const ReadCollectionDetail = ({ profileId, collectionId }) => {
  const queryClient = useQueryClient();
  if (!profileId || !collectionId)
    return { nickname: "", image: "", description: "", name: "" };
  const collections = queryClient.getQueryData(["collections", profileId]);
  const { nickname, profile_image: image } = queryClient.getQueryData([
    "profile",
    profileId,
  ]);
  const targetCollection = collections?.find(
    (item) => item.id === +collectionId
  );
  if (!targetCollection || !nickname)
    return { nickname: "", image: "", description: "", name: "" };
  const { name, description } = targetCollection;
  return { name, description, image, nickname };
};

/** 해당 컬렉션의 post 목록 조회 */ //
const ReadCollectionPosts = ({ collectionId }) => {
  return useQuery(["collections", collectionId, "posts"], async () => {
    const response = await instance.get(
      `my-list/collections/detail/${collectionId}`
    );
    return response.data;
  });
};

/** 해당 컬렉션의 restautant 관련 글 목록 조회?*/
const ReadColectionRestaurantPosts = ({ collectionId, restaurantId }) => {
  return useQuery(
    ["collections", collectionId, "restaurant", restaurantId],
    async () => {
      const response = await instance.get(
        `my-list/collections/detail/posts/${collectionId}/${restaurantId}`
      );
      return response.data;
    },
    {
      enabled: !!restaurantId,
    }
  );
};

const ListService = {
  ReadCollectionList,
  ReadMyList,
  AddMyList,
  EditMyList,
  ReadMyListItem,
  RemoveMyList,
  ReadCollectionDetail,
  ReadCollectionPosts,
  ReadColectionRestaurantPosts,
};
export default ListService;
