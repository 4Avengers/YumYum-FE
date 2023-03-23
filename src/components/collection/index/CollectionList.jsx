import ListService from "apis/service/ListService";
import React from "react";
import CollectionCard from "./CollectionCard";

const CollectionList = ({ profileId }) => {
  const { data: collections, isLoading } =
    ListService.ReadCollectionList(profileId);

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
