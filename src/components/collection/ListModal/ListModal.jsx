import ListService from "apis/service/ListService";
import { motion } from "framer-motion";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useParams } from "react-router-dom";
import { bgAni, listModalAni } from "shared/motionStyle";
import ListCard from "./ListCard";
import ListForm from "./ListForm";

const ListModal = ({ setModal, openEditModal }) => {
  const { data: myList } = ListService.ReadMyList(); // 나의 리스트 목록 불러오기
  const { profileId } = useParams();
  return (
    <motion.div
      className=" absolute top-0 z-[999] h-full w-full bg-[rgba(0,0,0,0.3)]"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={setModal}
    >
      <motion.div
        className="absolute bottom-0  flex h-[80vh] w-full flex-col rounded-[1rem] bg-white"
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-[2rem]">
          <h2 className="H1 ">나의 리스트 편집</h2>
          <IoMdClose
            size="2.5rem"
            className="cursor-pointer text-primary-600 hover:text-primary-500"
            onClick={() => setModal(false)}
          />
        </div>

        <ListForm profileId={profileId} />
        <div className="flex flex-col ">
          <span className="Cap1 px-[2rem]">리스트</span>
          <ul className="flex flex-col">
            {myList?.map((item) => (
              <ListCard
                key={item.id}
                myListData={item}
                openEditModal={openEditModal}
                profileId={profileId}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ListModal;
