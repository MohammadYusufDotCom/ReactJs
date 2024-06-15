import React from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const {addTodo} = useTodo()
    const [newTodo, setNewTodo] = React.useState('')

    const submitTodo=(e)=>{
        e.preventDefault()
        addTodo({title:newTodo,completed:false})
    }
    return (
        <form 
        onSubmit={(e)=>submitTodo(e)}
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;