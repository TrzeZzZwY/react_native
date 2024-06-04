import { FC, useEffect, useState } from "react";
import { Comment } from "../../types/Comment";
import { DeleteComment } from "../../requests/CommentService";
import { CommentForm } from '../common/CommentForm';
import { Pressable, Text, TextInput, View } from "react-native";
import { PostComment, PutComment } from "../../requests/CommentService";

interface IProps {
    comment: Comment
    toggleDelete: (commentId: number) => void,
    handleAdd: (comment: Comment) => void,
    handleUpdate: (comment: Comment) => void
}
export const CommentTile: FC<IProps> = props => {
    const [text, onChangeText] = useState('Useless Text');
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        onChangeText(props.comment.body)
    }, [])
    const handleDeleteToggle = () => {
        DeleteComment(props.comment.id)
            .then(() => props.toggleDelete(props.comment.id))
    }

    const showFormToggle = () => {
        setShowForm(!showForm);
    }

    const handleSubmit = (event: any) => {
        const data: Comment = {
            id: props.comment.id,
            postId: props.comment.postId,
            name: props.comment.name,
            email: props.comment.email,
            body: text
        }
            
        PutComment(data)
        .then(c => {
            props.handleUpdate(c);
        })
    }
    return (
        <View>
            <View style={
                {
                    borderWidth:3,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginHorizontal:20,
                    marginVertical:10

                }
            }>
                <Text>{props.comment.name}</Text>
                <Text>{props.comment.email}</Text>
                <Text>{props.comment.id}</Text>
                <View>
                    <Text>{props.comment.body}</Text>
                </View>
                <Pressable onPress={showFormToggle} style={{
                    backgroundColor:"#fdffab",
                    paddingHorizontal:10,
                    paddingVertical:5,
                    borderWidth:1,
                    borderRadius:10
                }}>
                    <Text style={
                            {
                                textAlign: "center",
                                fontFamily:""
                            }
                        }>Edit</Text>
                </Pressable>
                <Pressable onPress={handleDeleteToggle}style={{
                    backgroundColor:"#ffaaa5",
                    paddingHorizontal:10,
                    paddingVertical:5,
                    borderWidth:1,
                    borderRadius:10
                }}>
                    <Text style={
                            {
                                textAlign: "center",
                                fontFamily:""
                            }
                        }>delete</Text>
                </Pressable>
            </View>
            {showForm &&(
                <View style={
                    {
                        borderWidth:3,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        marginHorizontal:20,
                        marginVertical:10,
                        backgroundColor:"#ffd3b6"
    
                    }}>
                    <Pressable onPress={handleSubmit} style={{
                    backgroundColor:"#a8e6cf",
                    paddingHorizontal:10,
                    paddingVertical:5,
                    borderWidth:1,
                    borderRadius:10
                }}>
                        <Text style={
                            {
                                textAlign: "center",
                                fontFamily:""
                            }
                        }>Submit</Text>
                    </Pressable>
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        onSubmitEditing={handleSubmit}
                        value={text}
                        onChangeText={onChangeText}
                    />
                </View>
            )}
        </View>
    )
} 