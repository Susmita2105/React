import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams()
    console.log(userid)
  return (
    <div className='bg-slate-500 text-center text-3xl text-white p-3'>
      User: {userid}
    </div>
  )
}

export default User
