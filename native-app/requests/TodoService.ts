import { axiosInstance as axios } from "./AxiosInstance";
import { Todo } from "../types/Todo"

export const GetTodosForUserId = async (userId: number) => {
    return axios.get<Todo[]>(`todos?userId=${userId}`)
    .then(respose => respose.data);
}

export const PatchCompleteTodo = async (Todo: Todo) => {
    return axios.patch<Todo>(`todos/${Todo.id}`, Todo)
    .then(respose => respose.data);
}
