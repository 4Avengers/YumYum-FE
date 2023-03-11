import Button from "components/common/Button";
import Layout from "components/layout/Layout";
import React from "react";
import { BiSearch, BiPlus } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import cls from "utils/cls";

const PostWrite = () => {
  return (
    <Layout title="맛집 포스팅">
      <form className="flex flex-1 flex-col space-y-[2.5rem] px-[2rem]">
        <button
          className={cls("flex items-center space-x-[1rem]", style.border)}
        >
          <BiSearch size="2rem" className="text-primary-500" />
          <span className="Cap2 text-primary-400">검색</span>
        </button>
        <div className="relative flex flex-1  flex-col space-y-[2.5rem] pt-[1rem]">
          <div className="flex items-center space-x-[3rem]">
            <span className={cls(style.title)}>평점</span>
            <ul className="flex space-x-[1rem]">
              {React.Children.toArray(
                [1, 2, 3, 4, 5].map((item) => (
                  <li>
                    {true ? <FaStar size="2rem" /> : <CiStar size="2rem" />}
                  </li>
                ))
              )}
            </ul>
          </div>
          <label className={cls(style.verticalContainer)}>
            <span className={cls(style.title)}>리뷰</span>
            <textarea
              className={cls(
                style.border,
                "Cap2 h-[10vh] overflow-scroll outline-none scrollbar-hide placeholder:text-primary-400 focus:border-primary-500 focus:ring-transparent"
              )}
              placeholder="리뷰을 입력해주세요."
            />
          </label>
          <div className={cls(style.verticalContainer)}>
            <span className={cls(style.title)}>사진</span>
            <div className="flex space-x-[0.7rem]">
              {React.Children.toArray(
                [1, 2, 3].map((item) => (
                  <label
                    className={cls(
                      style.border,
                      "flex-center group h-[8rem] w-[8rem] cursor-pointer hover:border-primary-500"
                    )}
                  >
                    <input type="file" className="hidden" />
                    <BiPlus
                      size="2.5rem"
                      strokeWidth="1"
                      className="text-primary-400 group-hover:text-primary-500"
                    />
                  </label>
                ))
              )}
            </div>
          </div>
          <label className={cls(style.verticalContainer)}>
            <span className={cls(style.title)}>해시태그</span>
            <input
              placeholder="해시태그를 작성하고 Enter를 눌러주세요"
              className={cls(
                style.border,
                "Cap2 outline-none placeholder:text-primary-400 focus:border-primary-500 focus:ring-transparent"
              )}
            />
          </label>
          <div className={cls(style.verticalContainer)}>
            <span className={cls(style.title)}>공개범위</span>
            <button
              className={cls(style.border, "Cap2 text-start text-primary-400")}
            >
              전체공개
            </button>
          </div>
          <div className={cls(style.verticalContainer, "pb-[8rem]")}>
            <span className={cls(style.title)}>나의 리스트에 추가</span>
            <button
              className={cls(style.border, "Cap2 text-start text-primary-400")}
            >
              기본
            </button>
          </div>
          <Button disabled={false} className="absolute bottom-0">
            작성하기
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default PostWrite;

const style = {
  verticalContainer: "flex flex-col space-y-[0.8rem]",
  title: "Cap1",
  border: "rounded-[1rem] border p-[1rem]",
};
