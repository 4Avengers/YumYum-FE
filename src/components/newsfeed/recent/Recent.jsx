import PostService from "apis/service/PostService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import PostCard from "components/common/post/postCard/PostCard";
import useQueryKey from "hooks/useQueryKey";
import useUser from "hooks/useUser";

// newsfeed 최신글
const NewsFeedRecent = () => {
  const { data: postList } = PostService.ReadNewsFeeds();
  const user = useUser();
  useQueryKey(["newsFeeds", "current"], postQueryKeyAtom);
  return (
    <>
      <ul className="flex flex-col">
        {postList?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isOwner={post?.user?.id === user?.id}
          />
        ))}
      </ul>
    </>
  );
};

export default NewsFeedRecent;
