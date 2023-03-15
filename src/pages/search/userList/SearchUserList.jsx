import useSearch from "hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { handleProfileError } from "utils/handleImgError";

const SearchUserList = ({ keyword, status }) => {
  const { data: userList } = useSearch({ status, keyword });
  const navigate = useNavigate();

  return (
    <ul className="pt-[1rem]">
      {userList?.map((user) => (
        <li
          key={user?.id}
          className="flex cursor-pointer items-center  space-x-[1rem] py-[1rem] px-[4rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          onClick={() => navigate(`/profile/${user?.id}`)}
        >
          <img
            className="h-[3.5rem] w-[3.5rem] rounded-full bg-primary-300 object-cover"
            src={user?.profile_image}
            alt="avatar"
            onError={(e) => handleProfileError(e, user?.id)}
          />
          <div />
          <span className="Cap2">{user?.nickname}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchUserList;
