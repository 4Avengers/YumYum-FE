import axios from "axios";

const SignUp = async (payload) => {
  const response = await axios.post("url", payload);
  return response;
};

const SignIn = async (payload) => {
  const response = await axios.post("url", payload);
  return response;
};

const userApis = { SignIn, SignUp };
export default userApis;
