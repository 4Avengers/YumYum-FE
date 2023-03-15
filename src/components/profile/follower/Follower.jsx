import PostService from "apis/service/FllowService";
import PostCard from "components/common/post/postCard/PostCard";
import React from "react";

// 팔로워 리스트 
const ProfileFollower = () => {
  const { data: followList } = FollowService.ReadFollowers();
  
  return (
    <ul className="flex flex-col">
    {/* {followerList?.map((follower) => (
      <Fllower key={post.id} post={post} />
    ))} */}
  </ul>
      
    )  
 };

export default ProfileFollower;
 