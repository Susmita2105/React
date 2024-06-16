import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState= {
    todos: [{id:1, text:"hello world"}]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            const { id, newTodoData } = action.payload;
            // new updated input data will come from action.payload
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                Object.keys(newTodoData).forEach((key) => {
                    todo[key] = newTodoData[key];
                });
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer