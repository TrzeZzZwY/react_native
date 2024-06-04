import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleProp, ViewStyle } from "react-native"
import { FC, useState, useEffect } from "react";
import { Todo } from "../../../types/Todo";
import { GetTodosForUserId } from "../../../requests/TodoService";
import { TodoTile } from "../../../components/common/TodoTile";

const TodosPage = () => {
    const {userId} = useLocalSearchParams()
    const [todos, setTodos] = useState<Todo[] | null>();

    useEffect(()=>{
        GetTodosForUserId(Number(userId))
        .then(todos => setTodos(todos));

        console.log(userId)
        console.dir(todos);
    },[]);

    const ToggleTodo = (todoId: number, isCompleted: boolean) =>{
        setTodos((prevState) => 
        {     
            return prevState?.map((todo) => {
                if(todo.id == todoId){
                    todo.complited = isCompleted;
                }
                return todo;
            })
        }
        )
    }

    return (
        <ScrollView  contentContainerStyle={
            {
                display:"flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center"
            }
           }>
            {todos?.map(todo =>
                    <TodoTile todo={todo} toggleTodo={ToggleTodo} key={todo.id} />
                    )}  
        </ScrollView>
    )
}

export default TodosPage;