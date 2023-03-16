import instance from "apis/instance";
import { useQuery } from "react-query";

const ReadCollectionList = (profileId) => {
  return useQuery(
    ["userCollections", profileId],
    async () => {
      const response = await instance.get(`my-list/collections/${profileId}`);
      return response.data;
    },
    {
      enabled: !!profileId,
    }
  );
};

const CollectionService = { ReadCollectionList };
export default CollectionService;
