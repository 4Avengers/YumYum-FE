import { BsMap, BsList } from "react-icons/bs";
import cls from "utils/cls";

const CollectionBtns = ({ isList, setIsList }) => {
  return (
    <div className=" flex items-center space-x-[0.5rem] px-[2rem] ">
      <button
        disabled={isList}
        className={cls(
          "flex-center h-[3.5rem] w-[3.5rem] rounded-[0.5rem]",
          isList && "bg-[rgba(0,0,0,0.05)]"
        )}
        onClick={() => setIsList((prev) => !prev)}
      >
        <BsList
          size="2.5rem"
          className={cls(isList ? "#444444" : "text-primary-500")}
          strokeWidth="0.3"
        />
      </button>
      <button
        disabled={!isList}
        className={cls(
          "flex-center h-[3.5rem] w-[3.5rem] rounded-[0.5rem]",
          !isList && "bg-[rgba(0,0,0,0.05)]"
        )}
        onClick={() => setIsList((prev) => !prev)}
      >
        <BsMap
          size="2.1rem"
          className={cls(!isList ? "#444444" : "text-primary-500")}
          strokeWidth="0.4"
        />
      </button>
    </div>
  );
};

export default CollectionBtns;
