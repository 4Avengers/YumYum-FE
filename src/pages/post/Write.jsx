import PostService from "apis/service/PostService";
import { uesrAtom } from "atoms/userAtom";
import Button from "components/common/Button";
import MyListModal from "components/common/myList/MyListModal";
import Layout from "components/layout/Layout";
import AcessModal from "components/post/write/accessRange/AcessModal";
import HashTagList from "components/post/write/HashTagList";
import ImageList from "components/post/write/ImageList";
import PlaceCard from "components/post/write/PlaceCard";
import Rating from "components/post/write/Rating";
import SearchBtn from "components/post/write/search/SearchBtn";
import SearchModal from "components/post/write/search/SearchModal";
import Textarea from "components/post/write/Textarea";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

import cls from "utils/cls";

const PostWrite = () => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false); // 검색 모달
  const [isAccessLevel, setIsAccessLevel] = useState(false); // 공개범위 모달
  const [isMyList, setIsMyList] = useState(false); // 나의 리스트 모달
  const [place, setPlace] = useState(null); // 장소 저장
  const [imgList, setImgList] = useState([]); // 이미지 저장
  const [myList, setMyList] = useState([]); // 나의 리스트 데이터
  const loginUser = useRecoilValue(uesrAtom);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: { rating: 1, visibility: "public" },
  });

  // 검색 모달
  const handleToggleSearch = (e) => {
    e.preventDefault();
    setIsSearch((prev) => !prev);
  };

  // 공개범위 모달
  const handleToggleAccessLevel = (e) => {
    e.preventDefault();
    setIsAccessLevel((prev) => !prev);
  };

  // 나의 리스트 모달
  const handleToggleMyList = (e) => {
    e.preventDefault();
    setIsMyList((prev) => !prev);
  };

  // 포스팅 추가 + 이미지 로직 수정 필요
  const onValid = async (data) => {
    if (!imgList[0]) {
      return toast.error("이미지를 첨부해주세요.");
    }
    if (!place) {
      return toast.error("장소를 지정해주세요.");
    }
    const payload = {
      ...data,
      myListId: myList,
      restaurant: place,
      rating: +data.rating,
      image: [url],
    };
    try {
      await PostService.AddPost(payload);
      navigate(`/profile/${loginUser.id}`);
    } catch (e) {
      console.log(e);
      toast.error("글 작성에 실패하였습니다.");
    }
  };

  return (
    <Layout title="맛집 포스팅">
      <form
        className="flex flex-1 flex-col space-y-[2.5rem] px-[2rem]"
        onSubmit={handleSubmit(onValid)}
      >
        {place && place?.id ? (
          <PlaceCard place={place} onClick={handleToggleSearch} />
        ) : (
          <SearchBtn onClick={handleToggleSearch} />
        )}

        <div className="relative flex flex-1  flex-col space-y-[2.5rem] pt-[1rem]">
          <div className="flex items-center space-x-[3rem]">
            <span className={cls(style.title)}>평점</span>
            <Rating
              value={watch("rating")}
              register={{ ...register("rating", { required: true }) }}
            />
          </div>
          <Textarea
            register={{ ...register("content", { required: true }) }}
            style={style}
          />

          <ImageList setValue={setImgList} style={style} />
          <HashTagList setValue={setValue} style={style} />

          <div
            className={cls(style.verticalContainer)}
            onClick={handleToggleAccessLevel}
          >
            <span className={cls(style.title)}>공개범위</span>
            <button
              className={cls(
                style.border,
                "Cap2 text-start text-primary-400",
                "bg-[#F7F6F6]"
              )}
            >
              {watch("visibility") === "public" ? "전체 공개" : "팔로워 공개"}
            </button>
          </div>
          <div className={cls(style.verticalContainer, "pb-[8rem]")}>
            <span className={cls(style.title)}>나의 리스트에 추가</span>
            <button
              className={cls(
                style.border,
                "Cap2 text-start text-primary-400",
                "bg-[#F7F6F6]"
              )}
              onClick={handleToggleMyList}
            >
              나의 맛집 리스트에 추가해주세요.
            </button>
          </div>
          <Button
            disabled={!isValid || !imgList[0]}
            className="absolute bottom-0"
          >
            작성하기
          </Button>
        </div>
      </form>
      <AnimatePresence>
        {isSearch && (
          <SearchModal setModal={handleToggleSearch} setPlace={setPlace} />
        )}
        {isAccessLevel && (
          <AcessModal
            setModal={handleToggleAccessLevel}
            setValue={setValue}
            value={watch("visibility")}
          />
        )}
        {isMyList && (
          <MyListModal
            setModal={handleToggleMyList}
            myList={myList}
            setMyList={setMyList}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PostWrite;

const style = {
  verticalContainer: "flex flex-col space-y-[0.8rem]",
  title: "Cap1",
  border: "rounded-[1rem] border p-[1rem]",
};

const url =
  "https://media.istockphoto.com/id/1147544807/ko/%EB%B2%A1%ED%84%B0/%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EA%B7%B8%EB%9E%98%ED%94%BD.jpg?s=612x612&w=0&k=20&c=d0Ddt3qdtkhxPvpInjBRzLWFjODlfSh3IkKAB6YZwC8=";
