import ProfileService from "apis/service/ProfileService";
import cls from "utils/cls";
import { handleImgError } from "utils/handleImgError";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { strToBool } from "utils/isLike";
import FollowService from "apis/service/FollowService";
import { useNavigate } from "react-router-dom";

const ProfileContainer = ({
  profileId,
  isOwner,
  setIsFollowing,
  setOpenFollowingModal,
  setOpenEditModal,
}) => {
  const { data: profile } = ProfileService.ReadProfile(profileId);
  const { mutate: toggleFollow } = FollowService.ToggleFollow(profileId);
  const navigate = useNavigate();

  // 팔로우 토글 버튼

  // 팔로잉 모달
  const handleOpenFollowing = (e) => {
    setOpenFollowingModal(e);
    setIsFollowing(true);
  };

  // 팔로워 모달
  const handleOpenFollower = (e) => {
    setOpenFollowingModal(e);
    setIsFollowing(false);
  };

  return (
    <div className="mt-[2rem] flex flex-col space-y-[1.8rem] px-[2rem]">
      <div className="flex space-x-[4rem]">
        <img
          className="h-[6rem] w-[6rem] rounded-full bg-primary-300 object-cover ring-1 ring-primary-400 ring-offset-2"
          src={profile?.profile_image}
          alt="avatar"
          onError={handleImgError}
        />
        <div className="flex flex-1 flex-col ">
          <div className="flex justify-between">
            <span className="Cap3">{profile?.nickname}</span>
            {isOwner ? (
              <button
                className="Cap5 rounded-[0.8rem] border border-primary-300  p-[0.7rem_1.3rem] text-primary-600 hover:font-semibold"
                onClick={setOpenEditModal}
              >
                프로필 편집
              </button>
            ) : (
              <button
                className={cls(
                  "Cap4 rounded-[0.8rem]  p-[0.7rem_1.3rem] ",
                  strToBool(profile?.follow_relationship)
                    ? "bg-primary-200  text-primary-600"
                    : "bg-primary-600  text-white transition-colors hover:bg-primary-500"
                )}
                onClick={toggleFollow}
              >
                {strToBool(profile?.follow_relationship) ? "팔로잉" : "팔로우"}
              </button>
            )}
          </div>
          {profile?.introduce ? (
            <p className="Cap6 text-primary-700">{profile?.introduce}</p>
          ) : (
            <p className="Cap6 text-primary-500">소개글 작성해주세요.</p>
          )}
        </div>
      </div>
      <button
        className="Cap3 rounded-[1rem] bg-primary-600 py-[0.9rem] text-white  transition-colors hover:bg-[rgba(0,0,0,0.7)]"
        onClick={() => navigate(`collections`)}
      >
        맛집 컬렉션 보기
      </button>
      <div className="flex space-x-[0.5rem]">
        <div
          className={cls(
            "Cap6 grid flex-1 gap-[0.5rem]",
            isOwner ? "grid-cols-2" : "grid-cols-3"
          )}
        >
          <button
            className=" rounded-[0.5rem] border p-[0.4rem] hover:font-semibold"
            onClick={handleOpenFollowing}
          >
            팔로잉
          </button>
          <button
            className="rounded-[0.5rem] border hover:font-semibold"
            onClick={handleOpenFollower}
          >
            팔로워
          </button>
          {!isOwner && <button className="border ">메시지</button>}
        </div>
        <button className="flex-center w-[3rem] rounded-[0.5rem] border">
          <MdOutlineKeyboardArrowDown
            size="1.8rem"
            className="text-primary-500"
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileContainer;
