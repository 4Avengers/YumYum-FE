import PostService from "apis/service/PostService";
import { markerModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import { motion } from "framer-motion";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bgAni, listModalAni } from "shared/motionStyle";
import PostCard from "../list/PostCard";

const MarkerModal = ({ lat, lng }) => {
  const postId = useRecoilValue(postIdAtom);
  const { data: post } = PostService.ReadPostDetail(postId + "");
  const setMarkerModal = useSetRecoilState(markerModal);

  const closeMarkerModal = (e) => {
    setMarkerModal(false);
  };

  return (
    <motion.div
      className=" absolute top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.3)]"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={closeMarkerModal}
    >
      <motion.div
        className="absolute bottom-0  flex w-full flex-col rounded-[1rem] bg-white p-[2rem] pb-[3rem]"
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <PostCard post={post} lat={lat} lng={lng} isMarker />
      </motion.div>
    </motion.div>
  );
};

export default MarkerModal;
