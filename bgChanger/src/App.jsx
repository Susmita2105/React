import { useState } from "react"

function App() {

  const [color, setColor] = useState("Grey")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <button onClick={() => setColor("Red")} 
            className="outline-none px-4 py-1 mx-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>

            <button onClick={() => setColor("Yellow")} 
            className="outline-none px-4 py-1 mx-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Yellow"}}>Yellow</button>

            <button onClick={() => setColor("Green")} 
            className="outline-none px-4 py-1 mx-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Green"}}>Green</button>

            <button onClick={() => setColor("Blue")} 
            className="outline-none px-4 py-1 mx-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Blue"}}>Blue</button>
        </div>
  
      </div>

    </>
  )
}

export default App
