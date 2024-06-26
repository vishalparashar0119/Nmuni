import React from 'react'
import { Navigate } from 'react-router'
import { UserAuth } from '../context/AuthContext'

const Protected = ({children}) => {
    const {user} = UserAuth();

    if (!user) {
        return <Navigate to = '/'/>
    }
  return children;
};

export default Protected;