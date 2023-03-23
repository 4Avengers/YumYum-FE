import ListService from "apis/service/ListService";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import PostCard from "components/common/post/postCard/PostCard";

import React from "react";
import { useParams } from "react-router-dom";
import { modalLayoutAni } from "shared/motionStyle";
import CollectionHeader from "./CollectionHeader";

const CollectionModal = ({ onClick, restaurantId, userId }) => {
  const { collectionId } = useParams();
  const { data: posts } = ListService.ReadColectionRestaurantPosts({
    collectionId,
    restaurantId,
  });

  // collectionId와 restaurantId로 데이터 조회
  return (
    <ModalLayout hasHeader={false} hasPadding={false} variants={modalLayoutAni}>
      <CollectionHeader
        hasBack
        onClick={onClick}
        title={posts && posts[0]?.restaurant?.place_name}
        category={posts && posts[0]?.restaurant?.category_name?.split(">")[1]}
      />
      <p className="Cap4 absolute w-full border-b bg-white pl-[6.2rem] pb-[1.3rem]">
        {posts && posts[0]?.restaurant?.address_name}
      </p>
      <div className="flex flex-1 flex-col pt-[3rem]">
        <ul className=" flex flex-col pb-[7rem]">
          {posts?.map((post) => (
            <PostCard post={post} isOwner={post?.user?.id === userId} />
          ))}
        </ul>
      </div>
    </ModalLayout>
  );
};

export default CollectionModal;
