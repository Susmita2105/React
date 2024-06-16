import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {

  return (
    <div className="bg-slate-500 min-h-screen p-4 px-20 text-center text-white">
      <h1>Todo using redux toolkit!</h1>

        <AddTodo/>
        <Todos/>  
    </div>
  )
}

export default App
