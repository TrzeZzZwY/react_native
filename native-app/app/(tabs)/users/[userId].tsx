import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native"
import { FC, useState, useEffect } from "react";
import { PostTile } from "../../../components/common/PostTile"
import { Post } from "../../../types/Post";
import { GetPostsForUserId } from "../../../requests/PostService";

const UserPage = () => {
    const {userId} = useLocalSearchParams()
    const [posts, setPosts] = useState<Post[] | null>();

    useEffect(()=>{
        GetPostsForUserId(Number(userId))
        .then(posts => setPosts(posts));
    },[]);
    
    return (
        <ScrollView>
            <Text style={{
                fontSize:20,
                margin: 10
            }}>User Page - {userId}</Text>
            <View style={
                {
                    display:"flex",
                    flexDirection:"row",
                    gap:10,
                    margin:10
                }
            }>
                <Pressable onPress={() => router.push({pathname:`/albums`, params:{userId}})} style={{
                    margin:3,
                    padding:5,
                    backgroundColor: "#b6cdbd",
                    borderWidth:2,
                    borderRadius:10
                }}>
                    <Text>Albums</Text>
                </Pressable>
                <Pressable onPress={() => router.push({pathname:`/todos/${userId}`})} style={{
                    margin:3,
                    padding:5,
                    backgroundColor: "#b6cdbd",
                    borderWidth:2,
                    borderRadius:10
                }}>
                    <Text>Todos</Text>
                </Pressable>
            </View>
          
            <View style={
                {
                    display:"flex",
                    flexDirection:"column",
                    gap:10,
                    margin:10
                }
            }>
                {
                 posts?.map(post =>
                    <PostTile post={post} key={post.id} />
                    )   
                }
            </View>
        </ScrollView>
    )
}

export default UserPage;