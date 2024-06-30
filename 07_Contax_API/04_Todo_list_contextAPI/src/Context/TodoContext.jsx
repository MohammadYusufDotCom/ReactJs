import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id:1,
            title:"Learn React",
            completed:false,

        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    completeTodo:(id)=>{}
    
});


export const useTodo = ()=>{
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider