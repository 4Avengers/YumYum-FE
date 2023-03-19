import instance from "apis/instance";
import { useQuery, useQueryClient } from "react-query";

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
  const collections = queryClient.getQueryData(["collections", profileId]);
  const { nickname } = queryClient.getQueryData(["profile", profileId]);
  const targetCollection = collections?.find(
    (item) => item.id === +collectionId
  );
  if (!targetCollection || !nickname) return null;
  const { name, description, image } = targetCollection;
  return { name, description, image, nickname };
};

const CollectionService = { ReadCollectionList, ReadCollectionDetail };
export default CollectionService;
