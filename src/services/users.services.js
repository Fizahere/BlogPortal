import { ApiService } from "../utilities/Api.service";

const userServicesUrl = {
  users: "/users",
  login: "/login",
  register: "/register"
};

const login = (data) => {
  const response = ApiService.post(userServicesUrl.login, data);
  return response;
};

const getAllUsers = () => {
  const response = ApiService.get(userServicesUrl.users)
  return response
}

const deleteUserById = (userId) => {
  const response = ApiService.delete(`${userServicesUrl.users}/${userId}`);
  return response;
};

// const addUser=(data)=>{
//   const response = ApiService.post(userServicesUrl.register,data)
//   return response
// }

export const UserServices = {
  login,
  getAllUsers,
  deleteUserById,
  // addUser,
}