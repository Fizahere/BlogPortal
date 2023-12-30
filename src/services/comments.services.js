import { ApiService } from "../utilities/Api.service";

const commentsServicesUrl = {
    getcommentsUrl: "/comments"
}

const getComments = () => {
    const response = ApiService.get(commentsServicesUrl.getcommentsUrl)
    return response
}

const deleteComment = (comment_Id) => {
    const response = ApiService.delete(`${commentsServicesUrl.getcommentsUrl}/${comment_Id}`)
    return response
}

export const CommentServices = {
    getComments,
    deleteComment,
}