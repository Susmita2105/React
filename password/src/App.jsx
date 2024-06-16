import { useCallback, useEffect, useState, useRef} from 'react'

function App() {
  // define all variables that needs to be changed in UI
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);  
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState("");

   //useRef hook, this is used to show that the password is copied in UI
   const passwordRef = useRef(null)

  // useCallback function is used for memoization/keeping the value in cache
  const passwordGenerator = useCallback(() =>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+[]{};:'<>,./?"

    for(let i=1; i<=length; i++){
      let x= Math.floor(Math.random()*str.length );
      console.log(x)
      console.log(str[x])
      pass+= str[x];
    }
    console.log(pass)
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])
  // [] variables inside these square brackets are dependencies, any changes in these variables, this function needs to be called

  const copyPasswordToClipboard = useCallback(() => {
    // for selecting
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    // for copying
    window.navigator.clipboard.writeText(password)  
  }, [password])

  // for calling the function
  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
   <>
   <div className="bg-slate-600 min-h-screen py-20" >
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-cyan-600 text-white px-3 py-0.5 shrink-0'
            >copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
                />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                      setNumberAllowed((prev) => !prev);
                  }}
              />
             <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev);
                  }}
              />
             <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
    </div>
   </>
  )
}

export default App
