import { tagModal } from "atoms/modalAtom";
import { tagNameAtom } from "atoms/searchAtom";
import { useSetRecoilState } from "recoil";

const TagCard = ({ tag }) => {
  const setOpenTagModal = useSetRecoilState(tagModal);
  const setTagName = useSetRecoilState(tagNameAtom);

  const handleOpenModal = () => {
    setTagName(tag?.name);
    setOpenTagModal(true);
  };
  return (
    <li
      className=" flex cursor-pointer items-center   py-[1rem] px-[4rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
      onClick={handleOpenModal}
    >
      <div className="flex-center h-[4rem] w-[4rem] rounded-full">
        <span className="Cap2">#</span>
      </div>
      <div />
      <span className="Cap2">{tag?.name}</span>
    </li>
  );
};

export default TagCard;
