import { AuthUtilsConstant } from "./util.constant.jsx";

const saveToken = (token) => {
  localStorage.setItem(AuthUtilsConstant.USER_TOKEN, token)
}

const removeToken = () => {
  localStorage.removeItem(AuthUtilsConstant.USER_TOKEN)
}

export const AuthUtils = {
  saveToken,
  removeToken,
}