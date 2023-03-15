import instance from "apis/instance";

/** 검색 */
const SearchList = async ({ keyword, status, signal }) => {
  const response = await instance.get(`search/${status}?keyword=${keyword}`, {
    signal,
  });
  return response.data;
};

const SearchService = {
  SearchList,
};
export default SearchService;
