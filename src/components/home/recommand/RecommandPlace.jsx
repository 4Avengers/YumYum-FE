import HomeService from "apis/service/HomeService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import CategoryBtns from "./CategoryBtns";
import RecommandCard from "./RecommandCard";

const RecommandPlace = () => {
  const [category, setCategory] = useState("한식");
  const { data: posts } = HomeService.ReadRecommandPlaceList(category);
  const navigate = useNavigate();
  return (
    <div className="mt-[4rem] flex flex-col justify-center overflow-x-hidden">
      <Header
        title="New 인기리뷰"
        subTitle="회원들의 추천 맛집"
        onClick={() => navigate("/newsfeed")}
      />
      <CategoryBtns setCategory={setCategory} categoryValue={category} />
      <ul className="mt-[1.5rem] flex min-h-[67rem] flex-col ">
        {React.Children.toArray(
          posts?.map((post) => <RecommandCard post={post} />)
        )}
      </ul>
    </div>
  );
};

export default RecommandPlace;
