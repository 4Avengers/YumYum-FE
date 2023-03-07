import tw from "tailwind-styled-components";
import { BiHomeAlt2, BiReceipt, BiMapAlt, BiUser } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <nav className="screen-width  fixed bottom-0 w-screen  border-t">
        <ul className="grid h-[6rem]  grid-cols-5">
          <Icon onClick={() => navigate("/")}>
            <BiHomeAlt2 size="2.5rem" color="#444444" strokeWidth="0.1" />
          </Icon>
          <Icon onClick={() => navigate("/newsfeed")}>
            <BiReceipt size="2.5rem" color="#444444" strokeWidth="0.1" />
          </Icon>
          <Icon onClick={() => navigate("/post/write")}>
            <CiSquarePlus size="2.6rem" color="#444444" strokeWidth="0.8" />
          </Icon>
          <Icon onClick={() => navigate("/quest")}>
            <BiMapAlt size="2.5rem" color="#444444" strokeWidth="0.1" />
          </Icon>
          <Icon onClick={() => navigate("/profile/1")}>
            <BiUser size="2.5rem" color="#444444" strokeWidth="0.1" />
          </Icon>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

const Icon = tw.li`
  flex-center
`;
