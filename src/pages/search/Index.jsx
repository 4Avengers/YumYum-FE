import Layout from "components/layout/Layout";
import { useState } from "react";
import SearchPlaceList from "./placeList/SearchPlaceList";
import SearchForm from "./SearchForm";

import SearchStatus from "./SearchStatus";
import SearchTagList from "./tagList/SearchTagList";
import SearchUserList from "./userList/SearchUserList";

// type TSTATUS = "user" | "hashtag" | "restaurant"

/** 검색  */
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("user");

  return (
    <Layout hasHeader={false} hasPadding={false}>
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
    </Layout>
  );
};

export default Search;
