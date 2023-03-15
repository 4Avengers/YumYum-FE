import PostService from "apis/service/PostService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import PostCard from "components/common/post/postCard/PostCard";
import useQueryKey from "hooks/useQueryKey";

// newsfeed 최신글
const NewsFeedRecent = () => {
  const { data: postList } = PostService.ReadNewsFeeds();
  useQueryKey(["newsFeeds", "current"], postQueryKeyAtom);

  console.log(postList);
  return (
    <>
      <ul className="flex flex-col">
        {postList?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default NewsFeedRecent;
