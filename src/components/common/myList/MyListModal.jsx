import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { bgAni, listModalAni } from "shared/motionStyle";
import MyListCard from "./MyListCard";
import MyListForm from "./MyListForm";

const MyListModal = ({ setModal, myList, setMyList }) => {
  // const { data } = ListService.ReadMyList(); // 나의 리스트 목록 불러오기

  const handleAddList = (value) => {
    if (myList.includes(value)) {
      setMyList((prev) => prev.filter((item) => item !== value));
    } else {
      setMyList((prev) => [...prev, value]);
    }
  };

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
        className="absolute bottom-0  flex h-[80vh] w-full flex-col rounded-[1rem] bg-white"
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
        <div className="flex flex-col ">
          <span className="Cap1 px-[2rem]">리스트</span>
          <ul className="flex flex-col">
            {data?.map((item) => (
              <MyListCard
                key={item.id}
                myListData={item}
                isInclude={myList?.includes(item.id)}
                setMyList={handleAddList}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyListModal;

const data = [
  { id: 1, name: "인생 맛집 다시 가고 싶은 곳" },
  { id: 2, name: "제주도 카페 & 맛집" },
  { id: 3, name: "분위기 좋은 레스토랑" },
  { id: 4, name: "제주도 맛집" },
  { id: 5, name: "도쿄도쿄" },
];
