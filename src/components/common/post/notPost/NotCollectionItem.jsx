import React from "react";

import { MdPostAdd } from "react-icons/md";
const NotCollectionItem = () => {
  return (
    <div className="flex-center flex-1 flex-col space-y-[1rem] py-[2rem]">
      <MdPostAdd size="5rem" className=" text-primary-400" />
      <h3 className="text-[1.8rem] font-semibold text-primary-400">
        저장된 게시글이 없습니다
      </h3>
    </div>
  );
};

export default NotCollectionItem;
