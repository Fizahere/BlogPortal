import { AuthUtilsConstant } from "../utilities/util.constant";


const getUserToken = () => {
    const token = localStorage.getItem(AuthUtilsConstant.USER_TOKEN);
    return token
}
const isUserisLoggedIn = () => {
    const token = getUserToken()
    if (!token) {
        // console.log(false)
        return false;
    }
    // console.log(true)
    return true;
};

export const AuthServices = {
    isUserisLoggedIn,
    getUserToken,
}