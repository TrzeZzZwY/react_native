
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native"
import { FC, useState, useEffect } from "react";
import { GetCommentsForPostId } from "../../../requests/CommentService";
import { CommentTile } from "../../../components/common/CommentTile";
import { Comment } from "../../../types/Comment";
import { PostComment} from "../../../requests/CommentService";

const PostPage = () => {
    const {postId} = useLocalSearchParams()
    
    const [comments, setComments] = useState<Comment[] | null>();

    const [myCommnetId, setMyCommnetId] = useState<number>();

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [body, setBody] = useState<string>();
    
    useEffect(() => {
        GetCommentsForPostId(Number(postId))
            .then(comments => {
                setComments(comments);
                setMyCommnetId(comments.length);
            }
            );
    }, [])

    const handleDelete = (commentId: number) => {
        setComments((prevState) => {
            return prevState?.filter(comment => {
                console.log(comment.id + " " + commentId);
                return comment.id != commentId
            }
            )
        })
    }

    const handleUpdate = (comment: Comment) => {
        setComments((prevState) => {
            return prevState?.map(c => {
                if (c.id == comment.id) {
                    c = comment;
                }
                return c;
            })
        })
    }

    const handleAdd = (event: any) => {
        event.preventDefault();
        
        if( !name|| !body || !email) return;
        const data: Comment = {
            id: myCommnetId ? myCommnetId + 1 : 0,
            postId: Number(postId),
            name: name!,
            email: email!,
            body: body!
        }
        setMyCommnetId(data.id);
        
        PostComment(data)
        .then(comment => {
            comment.id = data.id
            setComments((prevState) => {
                return prevState ? [...prevState, comment] : []
            })
        });
       
        setBody("")
        setName("")
        setEmail("")
    }

    return (
        <ScrollView>
            <View style={{
                display: "flex",
                flexDirection:"column"
            }}>
                <View style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder="name"
                        style={
                            {
                                borderWidth:2,
                                padding:6,
                                margin:2,
                                borderRadius:6,
                                width:120
                            }
                        }
                    />
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="email"
                        style={
                            {
                                borderWidth:2,
                                padding:6,
                                margin:2,
                                borderRadius:6,
                                width:120
                            }
                        }
                    />
                    <TextInput
                        value={body}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={setBody}
                        placeholder="your comment"
                        style={
                            {
                                borderWidth:2,
                                padding:6,
                                margin:2,
                                borderRadius:6,
                                width:120
                            }
                        }
                    />
                    <Pressable onPress={handleAdd} style={{
                        backgroundColor:"#a8e6cf",
                        paddingHorizontal:20,
                        paddingVertical:5,
                        borderWidth:1,
                        borderRadius:10,
                    }}>
                        <Text style={
                            {
                                textAlign: "center",
                                fontFamily:""
                            }
                        }>Add</Text>
                    </Pressable>
                </View>
            {comments?.slice().reverse().map(comment =>
                <CommentTile comment={comment} toggleDelete={handleDelete} key={comment.id} handleAdd={handleAdd} handleUpdate={handleUpdate} />
            )}
            </View>
        </ScrollView>
    )
}

export default PostPage;