import { FC, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Comment } from "../../types/Comment";
import { PostComment, PutComment } from "../../requests/CommentService";

interface IProps {
    comment?: Comment,
    handleAdd: (comment: Comment) => void,
    handleUpdate: (comment: Comment) => void
}
export const CommentForm: FC<IProps> = props => {

    const { postId } = useParams<{ postId: string }>();

    const [id, setId] = useState<number | null>();

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [body, setBody] = useState<string>();

    useEffect(() => {
        if (props.comment) {
            setId(props.comment.id);
            setName(props.comment.name);
            setEmail(props.comment.email);
            setBody(props.comment.body);
        }
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const target = event.target;

        const data: Comment = {
            id: target.id.value,
            postId: target.postId.value,
            name: target.name.value,
            email: target.email.value,
            body: target.body.value
        }
        if (id) {
            PutComment(data)
                .then(c => {
                    props.handleUpdate(c);
                });
        } else {
            PostComment(data)
                .then(c => props.handleAdd(c));
        }
    }

    return (
        <div className="border border-2 border-black rounded p-3 w-fit bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[400px]">
                <input type="number" defaultValue={id ? id : ""} id="id" hidden />
                <input type="number" defaultValue={postId} id="postId" hidden />

                <label htmlFor="name" className="flex flex-row gap-2 p-1" >
                    <span>Name:</span>
                    <input type="text" defaultValue={name} id="name" className="bg-gray-300 rounded pl-1" />
                </label>
                <label htmlFor="email" className="flex flex-row gap-2 p-1" >
                    <span>Email:</span>
                    <input type="email" defaultValue={email} id="email" className="bg-gray-300 rounded pl-1" />
                </label>
                <label htmlFor="body" className="flex flex-row gap-2 p-1">
                    <span>Body:</span>
                    <textarea defaultValue={body} id="body" cols={35} rows={4} className="bg-gray-300 rounded pl-1 resize-none"/>
                </label>

                <input type="submit" value="Submit" className="border border-3 border-black bg-yellow-200" />
            </form>
        </div>
    )
} 