import UserContainter from "./UserContainter";
import LocationWithRating from "./LocationWithRating";
import IconContainer from "./IconContainer";
import Paragragh from "./Paragragh";
import { useSetRecoilState } from "recoil";
import { commentModalAtom, postConfigModalAtom } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import { useCallback, useState } from "react";
import { defaultImage, handleImgError } from "utils/handleImgError";
import Slider from "react-slick";
import BookMarkBtn from "components/common/bookMark/BookMarkBtn";
import { AnimatePresence } from "framer-motion";

const PostCard = ({ post, isOwner }) => {
  const setShowCommentModal = useSetRecoilState(commentModalAtom);
  const setShowPostConfigModal = useSetRecoilState(postConfigModalAtom);
  const setPostId = useSetRecoilState(postIdAtom);
  const [openBookmarkBtn, setOpenBookmarkBtn] = useState(false);

  // 해당 포스트 id에 해당하는 설정 모달을 가져오는 기능
  const handlePostConfigModal = useCallback(() => {
    setShowPostConfigModal(true);
    setPostId(post?.id);
  }, [post, setShowPostConfigModal, setPostId]);

  // 해당 포스트 id에 해당하는 코멘트 모달을 가져오는 기능
  const handleCommentModal = useCallback(() => {
    setShowCommentModal(true);
    setPostId(post?.id);
  }, [setPostId, setShowCommentModal, post]);

  return (
    <>
      <li className="flex flex-col border-b pt-[2rem] pb-[2rem] first:border-b last:border-none">
        <UserContainter
          post={post}
          handlePostConfigModal={handlePostConfigModal}
          isOwner={isOwner}
        />
        <LocationWithRating post={post} />
        <div className="relative flex w-full overflow-hidden">
          <Slider {...settings} className="slider-image ml-0 w-full pl-0">
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
          <AnimatePresence>
            {openBookmarkBtn && (
              <BookMarkBtn setOpenBookmarkBtn={setOpenBookmarkBtn} />
            )}
          </AnimatePresence>
        </div>

        <IconContainer
          handleCommentModal={handleCommentModal}
          post={post}
          setOpenBookmarkBtn={setOpenBookmarkBtn}
        />
        <p className="Cap3 px-[2rem]">좋아요 {post?.totalLikes}개</p>
        <Paragragh post={post} />
        {!!post?.totalComments && (
          <button
            className="Cap4 mt-[0.8rem] cursor-pointer px-[2rem] text-start text-primary-500"
            onClick={handleCommentModal}
          >
            {`댓글 ${post?.totalComments}개 모두 보기`}
          </button>
        )}
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
