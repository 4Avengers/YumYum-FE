import ListService from "apis/service/ListService";
import Button from "elements/Button";
import { motion } from "framer-motion";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { bgAni, listModalAni } from "shared/motionStyle";
import MyListCard from "./MyListCard";
import MyListForm from "./MyListForm";

const MyListModal = ({ setModal, myList, setMyList }) => {
  const { data } = ListService.ReadMyList(); // 나의 리스트 목록 불러오기

  return (
    <motion.div
      className=" absolute top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.3)]"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={setModal}
    >
      <motion.div
        className="absolute bottom-0  flex h-[80vh] w-full flex-col rounded-[1rem] bg-white pb-[2rem]"
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-[2rem]">
          <h2 className="H1 ">나의 리스트에 추가</h2>
          <IoMdClose
            size="2.5rem"
            className="cursor-pointer text-primary-600 hover:text-primary-500"
            onClick={setModal}
          />
        </div>

        <MyListForm />
        <div className="flex flex-1 flex-col ">
          <span className="Cap1 px-[2rem]">리스트</span>
          <ul className="flex flex-col">
            {React.Children.toArray(
              data?.map((item) => (
                <MyListCard
                  myListData={item}
                  isInclude={myList?.includes(item.id)}
                  setMyList={setMyList}
                />
              ))
            )}
          </ul>
        </div>
        <div className="px-[2rem] pb-[2rem]">
          <Button
            className="hover:bg-[rgba(0,0,0,0.7)]"
            onClick={() => setModal(false)}
          >
            완료하기
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyListModal;
