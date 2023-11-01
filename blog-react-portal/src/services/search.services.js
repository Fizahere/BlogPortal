import { ApiService } from "../utilities/Api.service";

const searchServiceUrl={
    getSearchUrl:'/search',
}
const searchPost=(data)=>{
    const response=ApiService.post(searchServiceUrl.getSearchUrl,data)
    return response
}

export const SearchServices={
    searchPost,
}