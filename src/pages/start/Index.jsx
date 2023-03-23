import { Outlet } from "react-router-dom";

const Start = () => {
  return (
    <div className="screen-width relative mx-auto h-screen w-screen bg-white px-[4rem] shadow-xl nm:ml-[47rem] nm:mr-0">
      <Outlet />
    </div>
  );
};

export default Start;
