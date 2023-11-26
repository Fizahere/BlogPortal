import { ApiService } from "../utilities/Api.service";

const PostsServicesUrl = {
    getPostsUrl: '/posts'
}

const getAllPosts = () => {
    const response = ApiService.get(PostsServicesUrl.getPostsUrl)
    return response
}

const getPostsById = (postId) => {
    const response = ApiService.get(`${PostsServicesUrl.getPostsUrl}/${postId}`)
    return response
}

const deletePostById = (postId) => {
    const response = ApiService.delete(`${PostsServicesUrl.getPostsUrl}/${postId}`)
    return response
}

const addPost = (payload) => {
    const response = ApiService.post(PostsServicesUrl.getPostsUrl, payload)
    return response
}

const updatePostById = (postId, payload) => {
    const response = ApiService.put(
      `${PostsServicesUrl.getPostsUrl}/${postId}`,
      payload
    );
    return response;
  };

export const PostsServices = {
    getAllPosts,
    getPostsById,
    deletePostById,
    addPost,
    updatePostById,
}