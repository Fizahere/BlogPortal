import {create} from 'apisauce'

const apiSauceInstance = create({
    baseURL: process.env.REACT_APP_API_URL,
})

const get = (url, queryParams = {}, config) => {
    const response = apiSauceInstance.get(url, queryParams, config)
    return response
}
const post = (url, data) => {
    const response = apiSauceInstance.post(url, data);
    return response;
  };
  
const put = (url, data, config) => {
    const response = apiSauceInstance.put(url, data, config)
    return response
}
const patch = (url, data, config) => {
    const response = apiSauceInstance.patch(url, data, config)
    return response
}
const deleteRequest = (url, queryParams, config) => {
    const response = apiSauceInstance.delete(url, queryParams, config)
    return response
}

export const ApiService = {
    get,
    post,
    put,
    patch,
    delete:deleteRequest
}