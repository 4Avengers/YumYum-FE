import { motion } from "framer-motion";
import { BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { bgAni, listModalAni } from "shared/motionStyle";
import MyListCard from "./MyListCard";

const MyListModal = ({ setModal, myList, setMyList }) => {
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

        <label className="flex flex-col space-y-[1rem] px-[2rem]">
          <span className="Cap1">새 리스트</span>
          <div className="flex items-center space-x-[2rem]">
            <input
              type="text"
              className="Cap4 flex-1 rounded-[1rem] border border-primary-400 bg-[#F7F6F6] p-[1rem] outline-none focus:border-primary-500"
              placeholder="추가하실 리스트명을 입력해주세요."
            />
            <button className="flex-center h-[3rem] w-[3rem] rounded-full bg-primary-700 transition-colors hover:bg-primary-500">
              <BiPlus size="2rem" className="text-white" strokeWidth="1.2" />
            </button>
          </div>
          <input />
        </label>
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
