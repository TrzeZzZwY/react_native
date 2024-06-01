import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    text?: string,
    to: string
}

export const LinkButton: FC<IProps> = props => {
    return <Link to={props.to} className='border border-2  border-black rounded min-w-[96px] h-12 bg-blue-300 p-1' >{props.text}</Link>
} 