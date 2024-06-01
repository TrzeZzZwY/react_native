import { FC, useEffect, useState } from 'react';
import { Todo } from "../../types/Todo"
import { PatchCompleteTodo } from "../../requests/TodoService"

interface IProps {
    todo: Todo,
    toggleTodo: (todoId:number,isCompleted:boolean) => void
}

export const TodoTile: FC<IProps> = props => {

    const [text, setText] = useState("Complete");
    const handleTodoToggle = () => {
        let complited: Todo = {
            id: props.todo.id,
            userId: props.todo.userId,
            title: props.todo.title,
            complited: !props.todo.complited
        }
        PatchCompleteTodo(complited)
        .then((todo) =>{ 
            props.toggleTodo(todo.id, todo.complited);
            if(text == "Complete") setText("Uncomplete");
            else setText("Complete");
        })
    }
    
    return (
        <>
            <div className={`${props.todo.complited ? "bg-cyan-400" : "bg-red-400"} flex justify-center items-center h-28 w-48 border-2 rounded-md border-black`}>
                <p className='p-2 text-xs'>{props.todo.title}</p>
                <button className='p-2 bg-yellow-200 mr-3 border border-black rounded text-sm' onClick={handleTodoToggle}>{text}</button>
            </div>
        </>
    )
} 
