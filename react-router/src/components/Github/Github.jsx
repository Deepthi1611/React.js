import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/deepthi1611')
    //     .then((res) => res.json())
    //     .then((data)=> setData(data))
    // },[])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-500 p-4 text-3xl text-white'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    let response = await fetch('https://api.github.com/users/deepthi1611')
    return response.json()
}