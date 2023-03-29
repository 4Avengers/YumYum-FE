import instance from "apis/instance";
import { useMutation, useQuery, useQueryClient } from "react-query";

/** 북마크 컬렉션 전체보기 */
const ReadBookmarkList = () => {
  return useQuery(
    ["bookmarkList"],
    async () => {
      const response = await instance.get("bookmarks/collections");
      return response.data;
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
};

/** 북마크 컬렉션 상세보기 */
const ReadBookmarkCollectionPosts = (collectionId) => {
  return useQuery(["bookmark", "collections", collectionId], async () => {
    const response = await instance.get(
      `bookmarks/collections/detail/${collectionId}`
    );
    return response.data;
  });
};

/** 북마크 컬렉션 생성 */
const AddBookmark = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.post("bookmarks/collections", payload);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["bookmarkList"]),
    }
  );
};

/** 북마크 컬렉션 수정 */
const UpdateBookmark = (collectionId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.put(
        `bookmarks/collections/${collectionId}`,
        payload
      );
      return response.data;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["bookmarkList"]),
    }
  );
};

/** 북마크 컬렉션 삭제 */
const RemoveBookmark = (collectionId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const response = await instance.delete(
        `bookmarks/collections/${collectionId}`
      );
      return response.data;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["bookmarkList"]),
    }
  );
};

/** 북마크 모든 게시물 추가 */
const AddAllCollectionPost = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.post(
        `bookmarks/collections/post/${postId}`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookmarkList"]);
        queryKey && queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

/** 북마크 모든 게시물 삭제  */
const RemoveAllCollectionPost = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.delete(
        `bookmarks/collections/post/${postId}`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookmarkList"]);
        queryKey && queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

/** 북마크 해당 컬렉션에 추가  */
const AddCollectionPost = ({ collectionId, queryKey }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.post(
        `bookmarks/collections/${collectionId}/post/${postId}`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookmarkList"]);
        queryKey && queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

/** 북마크 해당 컬렉션 삭제  */
const RemoveCollectionPost = ({ collectionId, queryKey }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postId) => {
      const response = await instance.delete(
        `bookmarks/collections/${collectionId}/post/${postId}`
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookmarkList"]);
        queryKey && queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

const BookmarkService = {
  ReadBookmarkList,
  ReadBookmarkCollectionPosts,
  AddBookmark,
  UpdateBookmark,
  RemoveBookmark,
  AddAllCollectionPost,
  RemoveAllCollectionPost,
  AddCollectionPost,
  RemoveCollectionPost,
};

export default BookmarkService;
