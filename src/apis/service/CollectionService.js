import instance from "apis/instance";
import { useQuery, useQueryClient } from "react-query";

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
