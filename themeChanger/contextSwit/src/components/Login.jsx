import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    // this {setUser} is from UserContextProvider.jsx file and to set the value we use setUser function

    const handleSubmit = (e) => {
        e.preventDefault()
        // preventDefault is done bcz by default when the form is submitted, this value goes somewhere by post method, but we don't want that to happen
        setUser({username, password})
        // with the help of this, we can send data like username and password to other component
    }
  return (
    <div>
        <h2 className='text-white'>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  className='m-2'/>
        {" "}
        <br />
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <br />
        <button onClick={handleSubmit}> <h1 className='text-white'>Submit</h1> </button>
    </div>
  )
}

export default Login