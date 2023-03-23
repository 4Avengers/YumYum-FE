import UserContainter from "../postCard/UserContainter";
import LocationWithRating from "../postCard/LocationWithRating";
import IconContainer from "../postCard/IconContainer";
import Paragragh from "../postCard/Paragragh";

import { defaultImage, handleImgError } from "utils/handleImgError";
import Slider from "react-slick";

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
        <Slider {...settings} className="slider-image ml-0 pl-0">
          {post?.images?.map((item, idx) => (
            <img
              key={idx}
              src={item?.file_url || defaultImage}
              alt="product"
              className=" h-[35vh] w-full object-cover"
              onError={handleImgError}
            />
          ))}
        </Slider>
        <IconContainer handleCommentModal={() => {}} post={post} />
        <p className="Cap3 px-[2rem]">좋아요 {post?.totalLikes}개</p>
        <Paragragh post={post} />
      </li>
    </>
  );
};

export default PostCard;

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  dotsClass: "dots_custom",
};
