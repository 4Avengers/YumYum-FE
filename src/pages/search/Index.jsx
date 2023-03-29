import Layout from "components/layout/Layout";
import { useState } from "react";
import SearchPlaceList from "../../components/search/placeList/SearchPlaceList";
import SearchForm from "../../components/search/SearchForm";

import SearchStatus from "components/search/SearchStatus";
import SearchTagList from "components/search/tagList/SearchTagList";
import SearchUserList from "components/search/userList/SearchUserList";
import CustomHelmet from "elements/CustomHelmet";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import { questPostModal, restaurantModal } from "atoms/modalAtom";
import RestaurantModal from "components/common/restaurant/RestaurantModal";
import useUser from "hooks/useUser";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";

// type TSTATUS = "user" | "hashtag" | "restaurant"

/** 검색  */
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("user");
  const [user] = useUser();
  const [openRestaurantModal] = useRecoilModal(restaurantModal);
  const [openPostDetailModal] = useRecoilModal(questPostModal);

  return (
    <Layout hasHeader={false} hasPadding={false} isScroll={false}>
      <CustomHelmet title="검색" />
      <SearchForm setKeyword={setKeyword} />
      <SearchStatus status={status} setStatus={setStatus} />
      {status === "user" && (
        <SearchUserList keyword={keyword} status={status} />
      )}
      {status === "hashtag" && (
        <SearchTagList keyword={keyword} status={status} />
      )}
      {status === "restaurant" && (
        <SearchPlaceList keyword={keyword} status={status} />
      )}
      <AnimatePresence>
        {openRestaurantModal && <RestaurantModal />}
        {openPostDetailModal && <PostDetailModal user={user} />}
      </AnimatePresence>
    </Layout>
  );
};

export default Search;
