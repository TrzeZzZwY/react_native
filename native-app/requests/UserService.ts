import { axiosInstance as axios } from "./AxiosInstance" 
import { User } from "../types/User"

export const GetAllUsers = async ():Promise<User[]> =>{
    return axios.get<User[]>("/users")
    .then((response) => response.data);
}