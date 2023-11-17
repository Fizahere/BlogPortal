import { ApiService } from "../utilities/Api.service";

const userServicesUrl = {
  login: "/login",
  register:"/register"
};

const login = (data) => {
  const response = ApiService.post(userServicesUrl.login, data);
  return response;
};

// const addUser=(data)=>{
//   const response = ApiService.post(userServicesUrl.register,data)
//   return response
// }

export const UserServices = {
    login,
    // addUser,
}