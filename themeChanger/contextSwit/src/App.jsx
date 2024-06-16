import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <div className='min-h-screen bg-slate-600  text-center p-32'>
       <h1 className='text-white'>Hello from the Chai World!</h1> 
       <Login />
       <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
