import { axiosInstance as axios } from "./AxiosInstance";
import { Comment } from "../types/Comment"

export const GetCommentsForPostId = async (postId: number) =>{
    return axios.get<Comment[]>(`comments?postId=${postId}`)
    .then(respose => respose.data);
}

export const DeleteComment = async (commentId: number) =>{
    return axios.delete<Comment>(`comments\\${commentId}`)
    .then(response => response.data);
}

export const PostComment = async (comment: Comment) => {
    const post = {
        postId: comment.postId,
        name: comment.name,
        body: comment.body,
        email: comment.email
    }
    return axios.post<Comment>(`comments`,post)
    .then(response => response.data);
}

export const PutComment = async (comment: Comment) => {
    return axios.put<Comment>(`comments/${comment.id}`,comment)
    .then(response => response.data);
}