import SearchService from "apis/service/SeachService";
import { tagModal } from "atoms/modalAtom";
import { tagNameAtom } from "atoms/searchAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import PostCard from "components/common/post/postCard/PostCard";

import React, { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";

const TagModal = ({ user }) => {
  const tagName = useRecoilValue(tagNameAtom);
  const setOpenTagModal = useSetRecoilState(tagModal);

  const { data: posts } = SearchService.SearchTagPosts({ tagName });

  const postList = useMemo(() => {
    if (!posts) return [];
    return posts?.pages?.flat();
  }, [posts]);

  console.log(postList);
  return (
    <ModalLayout hasHeader={false} hasPadding={false} variants={modalLayoutAni}>
      <ModalHeader
        title={`# ${tagName}`}
        hasBack
        onClick={() => setOpenTagModal(false)}
      />
      <p className="Cap4 absolute w-full border-b bg-white pl-[6.2rem] pb-[1.3rem]">
        {posts && posts[0]?.restaurant?.address_name}
      </p>
      <div className="flex flex-1 flex-col pt-[3rem]">
        <ul className=" flex flex-col pb-[7rem]">
          {postList?.map((post) => (
            <PostCard post={post} isOwner={post?.user?.id === user?.id} />
          ))}
        </ul>
      </div>
    </ModalLayout>
  );
};

export default TagModal;
