import ProfileService from "apis/service/ProfileService";
import React from "react";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const { id } = useParams();
  const { data: posts } = ProfileService.ReadProfilePosts(id);
  console.log(posts);
  return <ul></ul>;
};

export default UserPosts;
