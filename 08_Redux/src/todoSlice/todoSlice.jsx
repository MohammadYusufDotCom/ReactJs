import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos :[{
        id: 1,
        text :"Demo todo by Mohammad Yusuf",
        completed : false 
    }],
   todoEditable:false,
   valueInEditTodo:{
    id:0,
    text:"",
   }
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            // console.log(action.payload.newtext+"  "+action.payload.id);
             state.todos = state.todos.map((todo)=>(todo.id == action.payload.id?{...todo,text:action.payload.newtext}:todo))
             state.valueInEditTodo.id = 0;
             state.valueInEditTodo.text ="";
        },
        toggleTodo:(state,action)=>{
            state.todoEditable = !state.todoEditable;
        },
        valuesInEditTodoHandle:(state,action)=>{
            state.valueInEditTodo.id = action.payload.id;
            state.valueInEditTodo.text = action.payload.text;
        }
    }
})
export const {addTodo,removeTodo,updateTodo,toggleTodo,valuesInEditTodoHandle} =  todoSlice.actions
export default todoSlice.reducer