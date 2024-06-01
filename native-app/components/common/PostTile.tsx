import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from "../../types/Post"

interface IProps {
    post: Post
}

export const PostTile: FC<IProps> = props => {
    return (
        <Link to={`Post\\${props.post.id}`}>
            <div className='flex flex-col gap-5 border border-2 border-black rounded w-1/2 p-4 bg-white'>
                <p className='text-xl'>{props.post.title}</p>
                <p className='text-lg'>{props.post.body}</p>
            </div>
        </Link>
    )
} 