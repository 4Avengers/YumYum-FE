import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, post }) => {
  const queryKey = useRecoilValue(postQueryKeyAtom);
  return (
    <ul className="h-[calc(100vh-18.7rem)] overflow-y-auto  px-[2rem] scrollbar-hide">
      {comments?.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          postId={post?.id + ""}
          queryKey={queryKey}
          isOwner={false}
        />
      ))}
    </ul>
  );
};

export default CommentList;
