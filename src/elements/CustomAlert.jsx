import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CustomAlert = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar
      closeOnClick
      rtl={false}
      limit={1}
      style={{ fontSize: "1.5rem" }}
    />
  );
};

export default CustomAlert;
