import instance from "apis/instance";
import { useInfiniteQuery } from "react-query";

/** 검색 */
const SearchList = async ({ keyword, status, signal }) => {
  const response = await instance.get(
    `search/${status}?keyword=${keyword}&page=1`,
    {
      signal,
    }
  );
  return response.data;
};

/** 해쉬태그에 해당하는 포스트 목록 조회 */
const SearchTagPosts = ({ tagName }) => {
  console.log("태그", tagName);
  return useInfiniteQuery(
    ["tagList", "posts", tagName],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(
        `search/post?hashtag=${tagName}&page=${pageParam}`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.length < 8 ? undefined : allPages.length + 1;
        return nextPage;
      },
    }
  );
};

const SearchService = {
  SearchList,
  SearchTagPosts,
};
export default SearchService;
