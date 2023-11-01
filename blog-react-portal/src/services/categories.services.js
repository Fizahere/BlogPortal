import { ApiService } from "../utilities/Api.service";

const CategoriesServiceUrls = {
    getCategoryUrl: '/categories',
}

const getCategories = () => {
    const response = ApiService.get(CategoriesServiceUrls.getCategoryUrl)
    return response
}

const getCategoriesById = (categoryId) => {
    const response = ApiService.get(`${CategoriesServiceUrls.getCategoryUrl}/${categoryId}`)
    return response
}

const deleteCategoryById = (categoryId) => {
    const response = ApiService.delete(`${CategoriesServiceUrls.getCategoryUrl}/${categoryId}`)
    return response
}

const addCategory=(payload)=>{
    const response=ApiService.post(CategoriesServiceUrls.getCategoryUrl,payload)
    return response
}

export const CategoriesServices = {
    getCategories,
    getCategoriesById,
    deleteCategoryById,
    addCategory,
}