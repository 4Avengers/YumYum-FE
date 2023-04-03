import { BiHomeAlt2, BiReceipt, BiUser } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsFilePost, BsCardList, BsFillPlusSquareFill } from "react-icons/bs";
import { useMatch, useNavigate } from "react-router-dom";
import { FaMap, FaRegMap, FaUser, FaFolderOpen, FaRegComments, FaComments } from "react-icons/fa";
import styled from "@emotion/styled";
import useUser from "hooks/useUser";

const FooterAdmin = () => {
  const navigate = useNavigate();
 
  const adminMatch = useMatch("/admin");
  const reportPostMatch = useMatch("/admin/reportpost");
  const reportCommentMatch = useMatch("/admin/reportcomment");
  const reportAccountMatch = useMatch("/admin/reportaccount");
  const [user] = useUser();
  
  return (
    <footer className="bg-white">
      <nav className="screen-width  fixed bottom-0 w-screen  border-t bg-primary-100">
        <ul className="grid h-[6rem]  grid-cols-4 bg-primary-100">
          <Icon onClick={() => navigate("/admin")} className="cursor-pointer">
            {adminMatch ? (
              <FaFolderOpen size="2.5rem" color="#444444" strokeWidth="0.1" />
            ) : (
              <AiOutlineFolderOpen size="2.5rem" color="#616161" strokeWidth="0.1" />
            )}
          </Icon>
          <Icon
            onClick={() => navigate("/admin/reportpost")}
            className="cursor-pointer"
          >
            <BsCardList
              size="2.5rem"
              color={reportPostMatch ? "#444444" : "#616161"}
              strokeWidth={reportPostMatch ? "0.8" : "0.1"}
            />
          </Icon>
          <Icon
            onClick={() => navigate("/admin/reportcomment")}
            className="cursor-pointer"
          >
            {reportCommentMatch ? (
              <FaComments size="2.2rem" color="#444444" />
            ) : (
              <FaRegComments size="2.6rem" color="#616161" strokeWidth="0.8" />
            )}
          </Icon>
          <Icon onClick={() => navigate("/admin/reportaccount")} className="cursor-pointer">
            {reportAccountMatch ? (
              <FaUser size="2.5rem" color="#444444" />
            ) : (
              <BiUser size="2.5rem" color="#616161" strokeWidth="0.1" />
            )}
          </Icon>
 
        </ul>
      </nav>
    </footer>
  );
};

export default FooterAdmin;

const Icon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
