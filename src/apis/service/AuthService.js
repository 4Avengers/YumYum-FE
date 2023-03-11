import axios from "axios";

const SignUp = async (payload) => {
  const response = await axios.post("signup", payload);
  return response;
};

const SignIn = async (payload) => {
  const response = await axios.post("login", payload);
  return response;
};

const AuthService = { SignIn, SignUp };

export default AuthService;
