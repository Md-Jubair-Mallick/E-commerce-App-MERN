import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  const { loggedInUser } = useSelector((state) => state.user)
  return (
    <div className='w-4/6 mx-auto my-10'>
       
      <div className='my-4 py-4'><img className='w-40 h-40 rounded-full' alt={loggedInUser.imageUrl[0]} src={loggedInUser.imageUrl[1]}></img>{/*console.log(loggedInUser.imageUlr)*/}</div>
      <div>{loggedInUser.userName}</div>
      <div>{loggedInUser.email}</div>
      <div><Link to={'/'}>Home</Link></div>
    </div>
  )
}
