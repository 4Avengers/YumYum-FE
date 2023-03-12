import PostService from "apis/service/PostService";
import PostCard from "components/common/post/postCard/PostCard";

// newsfeed 최신글
const NewsFeedRecent = () => {
  const { data: postList } = PostService.ReadNewsFeeds();

  return (
    <ul className="flex flex-col">
      {postList?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default NewsFeedRecent;
