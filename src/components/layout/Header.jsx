import { hasToken } from "apis/token";
import { useMemo } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import cls from "utils/cls";
import { motion } from "framer-motion";
import HEADER_TYPE from "./headerType";

const Header = ({
  hasBack,
  title,
  headerType,
  className = "",
  isTransparent = false,
}) => {
  const navigate = useNavigate();

  const isLogin = useMemo(() => hasToken(), []);

  return (
    <motion.header
      className={cls(
        className,
        "screen-width fixed top-0 flex h-[5rem] w-screen items-center justify-between   px-[2rem] transition-colors",
        !isTransparent && "bg-white"
      )}
    >
      <div className="flex items-center space-x-[1rem]">
        {hasBack && (
          <span className="cursor-pointer" onClick={() => navigate(-1)}>
            <BiChevronLeft
              size="3rem"
              className="#444444 hover:text-primary-500"
              strokeWidth="0.1"
            />
          </span>
        )}

        <h3 className="text-[2rem] font-semibold">{title}</h3>
      </div>
      {isLogin ? (
        <nav>{headerType ? HEADER_TYPE[headerType] : null}</nav>
      ) : (
        <CiLogin
          size="3rem"
          strokeWidth={0.8}
          className="cursor-pointer text-primary-600 hover:text-primary-500"
          onClick={() => window.location.replace("/start/login")}
        />
      )}
    </motion.header>
  );
};

export default Header;
