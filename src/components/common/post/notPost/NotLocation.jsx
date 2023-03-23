import { FaMapMarkerAlt } from "react-icons/fa";

const NotLocation = ({ text }) => {
  return (
    <div className="flex-center flex-1 flex-col space-y-[2rem] py-[2rem]">
      <FaMapMarkerAlt size="5rem" className=" text-primary-400" />
      <h3 className="text-[1.8rem] font-semibold text-primary-400">{text}</h3>
    </div>
  );
};

export default NotLocation;
