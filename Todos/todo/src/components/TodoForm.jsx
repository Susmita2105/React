import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        // this add() is called, when form is submitted
        e.preventDefault()

        if(!todo) return

        // addTodo({todo:todo, completed:false})
        // this "todo:todo" can be written as todo
        // we are not sending todo because in the function addTodo, we have spreaded our object, hence we are sending spreaded values itself and id is being generated there itself
        addTodo({todo, completed:false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                // this adding value is called wiring
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


