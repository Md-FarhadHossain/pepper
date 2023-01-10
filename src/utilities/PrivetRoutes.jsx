import { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'


const PrivetRoutes = ({children}) => {
    const { user,loading} = useContext(UserContext)
    const location = useLocation()




    if(loading) {
        return <>
            <div className='h-screen flex items-center justify-center'>
                <h1 className="text-3xl text-center w-full">Loading ........</h1>
            </div>
        </>
    }
    if(user){
        return children
    }

  return <Navigate to='/login' state={{from: location}} replace />
}

export default PrivetRoutes