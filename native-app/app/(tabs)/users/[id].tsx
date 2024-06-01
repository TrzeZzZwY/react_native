import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable } from "react-native"
import { FC, useState, useEffect } from "react";
import { GetAlbumsForUserId } from "../../../requests/AlbumService";
import { GetTodosForUserId } from "../../../requests/TodoService";
import { GetPostsForUserId } from "../../../requests/PostService";
import { Album } from "../../../types/Album";
import { Todo } from "../../../types/Todo";
import { Post } from "../../../types/Post";

const UserPage = () => {
    const {id} = useLocalSearchParams()
    const [albums, setAlbums] = useState<Album[] | null>();
    const [todos, setTodos] = useState<Todo[] | null>();
    const [posts, setPosts] = useState<Post[] | null>();

    useEffect(()=>{
        GetAlbumsForUserId(Number(id))
        .then(albums => setAlbums(albums));

        GetTodosForUserId(Number(id))
        .then(todos => setTodos(todos));

        GetPostsForUserId(Number(id))
        .then(posts => setPosts(posts));
    },[]);

    const ToggleTodo = (todoId: number, isCompleted: boolean) =>{
        setTodos((prevState) => 
        {     
            return prevState?.map((todo) => {
                if(todo.id == todoId){
                    todo.complited = isCompleted;
                }
                return todo;
            })
        }
        )
    }

    return (
        <View>
            <Text>User Page - {id}</Text>
            <Pressable onPress={() => router.back()}>
                <Text>Albums</Text>
            </Pressable>
            <Pressable onPress={() => router.back()}>
                <Text>Todos</Text>
            </Pressable>
            <Pressable onPress={() => router.back()}>
                <Text>Posts</Text>
            </Pressable>
        </View>
    )
}

export default UserPage;