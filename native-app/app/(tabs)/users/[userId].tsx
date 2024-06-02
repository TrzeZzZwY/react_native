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
    const {userId} = useLocalSearchParams()

    return (
        <View>
            <Text>User Page - {userId}</Text>
            <Pressable onPress={() => router.push({pathname:`/albums`, params:{userId}})}>
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