import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
import { updateTodo } from '../features/todo/todoSlice'
import edit from '../assets/edit-button.png'
import update from '../assets/check-box.png'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [editId,setEditId] = useState(null)
    const [newTodo,setNewTodo] = useState({text:''})

    const handleEditClick = (todo) => {
      setEditId(todo.id); // Set the ID of the todo being edited
      setNewTodo({ text: todo.text }); // Set the current text of the todo being edited
    };
  
    const handleUpdateClick = () => {
      dispatch(updateTodo({ id: editId, newTodoData: newTodo })); // Dispatch the updateTodo action with the new text
      setEditId(null); // Exit edit mode by resetting the editId
    };

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                className="border p-1 mr-2 w-full text-black"
                value={newTodo.text}
                onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className='flex space-x-2'>
            {editId === todo.id ? (
                <button
                  onClick={handleUpdateClick}
                  className="bg-green-500 hover:bg-green-700 border-0 py-1 px-4 focus:outline-none rounded text-md text-white"
                >
                <img 
                  src={update} 
                  alt="updateIcon" 
                  className="w-10 h-5 filter invert bold"
                />
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo)}
                  className="bg-blue-500 hover:bg-blue-700 border-0 py-1 px-4 focus:outline-none rounded text-md text-white"
                >
                  <img 
                  src={edit} 
                  alt="editIcon" 
                  className="w-5 h-5 filter invert"
                  />
                </button>
              )}
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
              //  inside onClick, we always give reference to function and not () because if we write f(), then it will be called then and there but we want to call it only when this button is clicked and when we want to pass any parameter, then we use this callback syntax
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-700 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>


          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos