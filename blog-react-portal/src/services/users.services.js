import { ApiService } from "../utilities/Api.service";

const userServicesUrl = {
  getUserUrl:"/users",
  login: "/login",
  register:"/register"
};

const login = (data) => {
  const response = ApiService.post(userServicesUrl.login, data);
  return response;
};

const getUsers = ()=>{
  const response = ApiService.get(userServicesUrl.getUserUrl)
  return response
}

// const addUser=(data)=>{
//   const response = ApiService.post(userServicesUrl.register,data)
//   return response
// }

export const UserServices = {
    login,
    getUsers,
    // addUser,
}