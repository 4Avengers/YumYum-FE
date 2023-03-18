import CollectionService from "apis/service/CollectionService";
import React from "react";
import CollectionCard from "./CollectionCard";

const CollectionList = ({ profileId }) => {
  const { data: collections, isLoading } =
    CollectionService.ReadCollectionList(profileId);
  console.log(collections);
  return (
    <ul className="flex flex-col space-y-[2rem] pb-[5rem]">
      {React.Children.toArray(
        collections?.map((collection) => (
          <CollectionCard collection={collection} isLoading={isLoading} />
        ))
      )}
    </ul>
  );
};

export default CollectionList;
