//import RestaurantService from "apis/service/RestaurantService";

import RestaurantPostCard from "./RestaurantPostCard";

const RestaurantPostlist = ({ placeId }) => {
  //const posts = RestaurantService.ReadRestaurantPosts(placeId);
  return (
    <div className="flex flex-col ">
      <h3 className="px-[2rem] text-[1.8rem] font-semibold">관련 포스트</h3>
      <ul className="inner-height flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide">
        {[1, 2, 3, 4]?.map((item) => (
          <RestaurantPostCard key={item} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPostlist;
