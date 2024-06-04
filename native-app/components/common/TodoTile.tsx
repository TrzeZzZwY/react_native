import { FC, useEffect, useState } from 'react';
import { Todo } from "../../types/Todo"
import { PatchCompleteTodo } from "../../requests/TodoService"
import { Pressable, View, Text, StyleProp, ViewStyle } from 'react-native';

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

    const style: StyleProp<ViewStyle> = {
        backgroundColor: getColor(props.todo),
        display: "flex",
        height:100,
        width:"70%",
        padding:6,
        borderWidth: 2,
        borderRadius:10
    }

    function getColor(todo: Todo){
        return todo.complited ? "#a8e6cf":"#ffaaa5"
    }
    
    return (
        <Pressable onPress={handleTodoToggle} style= {style}>
            <Text>{props.todo.title}</Text>
            <Text>{"click to " + text}</Text>
        </Pressable>
    )
} 


