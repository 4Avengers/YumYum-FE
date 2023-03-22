import PostService from "apis/service/PostService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import PostCard from "components/common/post/postCard/PostCard";
import useGeolocation from "hooks/useGeoLocation";
import useQueryKey from "hooks/useQueryKey";
import useUser from "hooks/useUser";

const NewsFeedArround = () => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();
  const { data: postList } = PostService.ReadNewsFeedsAround({
    x: longitude + "",
    y: latitude + "",
  });
  const [user] = useUser();
  useQueryKey(["newsFeeds", "around"], postQueryKeyAtom);

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

export default NewsFeedArround;
