import UserContainter from "../postCard/UserContainter";
import LocationWithRating from "../postCard/LocationWithRating";
import IconContainer from "../postCard/IconContainer";
import Paragragh from "../postCard/Paragragh";

import { defaultImage, handleImgError } from "utils/handleImgError";

const PostCard = ({ post, isOwner = false }) => {
  return (
    <>
      <li className="flex flex-col border-b pt-[2rem] pb-[2rem] first:border-b last:border-none">
        <UserContainter
          post={post}
          handlePostConfigModal={() => {}}
          isOwner={isOwner}
        />
        <LocationWithRating post={post} />
        <img
          src={post?.images[0]?.file_url || defaultImage}
          alt="product"
          className=" w-full object-cover"
          onError={handleImgError}
        />
        <IconContainer handleCommentModal={() => {}} post={post} />
        <p className="Cap3 px-[2rem]">좋아요 {post?.totalLikes}개</p>
        <Paragragh post={post} />
      </li>
    </>
  );
};

export default PostCard;
