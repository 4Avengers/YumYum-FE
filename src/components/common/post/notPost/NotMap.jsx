import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const NotMap = () => {
  return (
    <div className="flex-center flex-1 flex-col space-y-[3rem]">
      <FaMapMarkerAlt size="7rem" className=" text-primary-400" />
      <h3 className="text-[2.5rem] font-semibold text-primary-400">
        등록된 위치 정보가 없습니다.
      </h3>
    </div>
  );
};

export default NotMap;
