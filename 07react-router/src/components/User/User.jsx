import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // get userId from params
    const {userId} = useParams()
  return (
    <div className='text-center text-white bg-gray-700 text-3xl p-4'>User: {userId}</div>
  )
}

export default User