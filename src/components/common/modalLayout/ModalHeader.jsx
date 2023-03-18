import { BiChevronLeft } from "react-icons/bi";

const ModalHeader = ({ hasBack, title, onClick, ref }) => {
  return (
    <header className="screen-width fixed top-0 flex h-[5rem] w-screen items-center justify-between  bg-white px-[2rem]">
      <div className="flex items-center space-x-[1rem]">
        {hasBack && (
          <span
            className="cursor-pointer hover:text-primary-500 "
            onClick={onClick}
          >
            <BiChevronLeft size="3rem" className="#444444" strokeWidth="0.1" />
          </span>
        )}

        <h3 className="text-[2rem] font-semibold">{title}</h3>
      </div>
    </header>
  );
};

export default ModalHeader;
