import { axiosInstance as axios } from "./AxiosInstance";
import { Post } from "../types/Post"

export const GetPostsForUserId = async (userId: number) =>{
    return axios.get<Post[]>(`posts?userId=${userId}`)
    .then(respose => respose.data);
}
