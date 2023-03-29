import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomHelmet from "elements/CustomHelmet";
import CollectionCard from "components/bookmark/index/CollectionCard";
import Layout from "components/layout/Layout";
import useRecoilModal from "hooks/useRecoilModal";
import { bookmarkConfigModal } from "atoms/modalAtom";
import BookmarkConfigModal from "components/bookmark/configModal/BookmarkConfigModal";
import BookmarkService from "apis/service/BookmarkService";
import React from "react";

const Bookmark = () => {
  const [openBookmarkConfigModal] = useRecoilModal(bookmarkConfigModal);
  const { data: collections } = BookmarkService.ReadBookmarkList();
  return (
    <Layout hasPadding={false} headerType={"BELL"} hasBack title="북마크">
      <CustomHelmet title="북마크" />
      <div className=" grid flex-1 auto-rows-min grid-cols-2  gap-[2rem] px-[2rem] pt-[2rem] pb-[8rem]">
        {React.Children.toArray(
          collections?.map((collection) => (
            <CollectionCard key={collection?.id} collection={collection} />
          ))
        )}
      </div>
      <Outlet />
      <AnimatePresence>
        {openBookmarkConfigModal && <BookmarkConfigModal />}
      </AnimatePresence>
    </Layout>
  );
};

export default Bookmark;
