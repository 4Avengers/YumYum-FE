import axios from "axios";
import { getAccessToken } from "./cookie";

const baseURL = process.env.REACT_APP_SERVER_URL;

const myToken = getAccessToken();

export const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${myToken}`,
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

export const postApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${myToken}`,
    "Content-Type": "multipart/form-data",
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

export default instance;
