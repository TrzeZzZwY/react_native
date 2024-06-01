import { FC, useEffect, useState } from "react";
import { Comment } from "../../types/Comment";
import { DeleteComment } from "../../requests/CommentService";
import { CommentForm } from '../common/CommentForm';

interface IProps {
    comment: Comment
    toggleDelete: (commentId: number) => void,
    handleAdd: (comment: Comment) => void,
    handleUpdate: (comment: Comment) => void
}
export const CommentTile: FC<IProps> = props => {
    const [showForm, setShowForm] = useState(false);

    const handleDeleteToggle = () => {
        DeleteComment(props.comment.id)
            .then(() => props.toggleDelete(props.comment.id))
    }

    const showFormToggle = () => {
        setShowForm(!showForm);
    }
    return (
        <div className="flex flex-row gap-8">
            <div className='flex flex-row gap-8  border border-2 border-black rounded p-3 min-w-[900px] max-w-[900px] justify-between bg-white'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2'>
                        <span className='text-sm font-bold italic'>{props.comment.name}</span>
                        <span className='text-xs italic'>({props.comment.email})</span>
                        <span className='text-xs italic'>({props.comment.id})</span>
                    </div>
                    <div>
                        {props.comment.body}
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <button onClick={showFormToggle} className='border border-2  border-black rounded min-w-[96px] h-12 bg-blue-300'>Edit</button>
                    <button onClick={handleDeleteToggle} className='border border-2  border-black rounded min-w-[96px] h-12 bg-red-300'>Delete</button>
                </div>
            </div>
            {showForm && (
                <CommentForm comment={props.comment} handleAdd={props.handleAdd} handleUpdate={props.handleUpdate} />
            )}
        </div>
    )
} 