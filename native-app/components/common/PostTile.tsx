import { FC } from 'react';
import { Post } from "../../types/Post"
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';

interface IProps {
    post: Post
}

export const PostTile: FC<IProps> = props => {
    return (
        <Pressable onPress={() => router.push({pathname:`/posts/${props.post.id}`})}>
            <View
            style={
                {
                    display:"flex",
                    flexDirection:"column",
                    gap:5,
                    borderWidth:3,
                    borderRadius:20,
                    padding:4
                }
            }>
                <Text>{props.post.title}</Text>
                <Text>{props.post.body}</Text>
            </View>
        </Pressable>
    )
} 