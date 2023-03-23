import ProfileService from "apis/service/ProfileService";
import { useMemo } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import ProfileMarker from "./ProfileMarker";

const ProfileMap = ({ setOpenModal, setRestaurantId, profileId }) => {
  const { data: posts } = ProfileService.ReadProfileMapPosts({ profileId });
  const { data: profile } = ProfileService.ReadProfile(profileId);

  const postList = useMemo(() => {
    if (!posts && !profile) return [];
    return posts?.map((post) => ({
      ...post,
      user: { profile_image: profile?.profile_image },
    }));
  }, [posts, profile]);
  if (!posts) return null;

  return (
    <Map
      center={{
        lat: Number(posts[0]?.restaurant?.y),
        lng: Number(posts[0]?.restaurant?.x),
      }}
      className="w-full flex-1"
      level={10}
    >
      {postList?.map((post) => {
        return (
          <CustomOverlayMap
            key={post?.id}
            position={{
              lat: Number(post?.restaurant?.y),
              lng: Number(post?.restaurant?.x),
            }}
          >
            <ProfileMarker post={post} />
          </CustomOverlayMap>
        );
      })}
    </Map>
  );
};

export default ProfileMap;

// (
//   <Map center={{ lat, lng }} className="w-full flex-1" level={10}>
//     {/* {posts?.map((post) => {
//       return (
//         <CustomOverlayMap
//           key={post?.id}
//           position={{
//             lat: Number(post?.restaurant?.y),
//             lng: Number(post?.restaurant?.x),
//           }}
//         >
//           <CollectionMarker
//             post={post}
//             setOpenModal={setOpenModal}
//             setRestaurantId={setRestaurantId}
//           />
//         </CustomOverlayMap>
//       );
//     })} */}
//   </Map>
// );
