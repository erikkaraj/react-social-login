import { defaultLocalStorageToken } from "./defaultLocalStorageItems";
import { isServer } from "./isServer";

const accessTokenKey = defaultLocalStorageToken;

const getToken = () => {
  try {
    if (!isServer) {
      return localStorage.getItem(accessTokenKey) || "";
    }
  } catch (e) {
    console.log(e);
  }
};

const setToken = (token) => {
  localStorage.setItem(accessTokenKey, token);
};

export { getToken, setToken };
