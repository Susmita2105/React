import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    // this {user} comes from UserContextProvider.jsx file and this value of user is set in login file using setUser function, so here we are using that value of user
    if (!user) return <div className='text-white'>please login</div>

    return <div className='text-white'>Welcome {user.username} !</div>
}

export default Profile