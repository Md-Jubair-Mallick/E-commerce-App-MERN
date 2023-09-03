import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Protected({ children }) {
    const { loggedInUser } = useSelector((state) => state.user)
      if(!loggedInUser){
        return <Navigate to='/login' replace={true} ></Navigate>
      } else{
        return children
      }
}
