import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([]);
    // // useEffect will be called whenever the page is loaded
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Susmita2105')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()
    // when data is loaded using loader, no lag is seen in ui

  return (
    <div className='bg-slate-500 text-center text-2xl text-white p-3'>
      Github Id: {data.login}
      <br />
      Github followers: {data.followers}
      <div className='flex justify-center items-center'>
        <img src={data.avatar_url} alt="github profile pic" width={100}/>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/Susmita2105')
    return res.json()
}
