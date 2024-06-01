import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from "../../types/Photo"

interface IProps {
    photo: Photo
}

export const PhotoTile: FC<IProps> = props => {
    return (
        <>
            <div className='p-7 m-4 flex flex-col justify-items-center items-center text-xl gap-5'>
                <img src={props.photo.thumbnailUrl} alt="photo" />
                <p className='text-sm w-[150px]'>{props.photo.title}</p>
            </div>
        </>
    )
} 