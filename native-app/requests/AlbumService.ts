import { axiosInstance as axios } from "./AxiosInstance";
import { Album } from "../types/Album"
import { Photo } from "../types/Photo"

export const GetAlbumsForUserId = async (userId: number) =>{
    return axios.get<Album[]>(`albums?userId=${userId}`)
    .then(respose => respose.data);
}

export const GetPhotosForAlbumId = async (albumId: number) =>{
    return axios.get<Photo[]>(`photos?albumId=${albumId}`)
    .then(response => response.data);
}