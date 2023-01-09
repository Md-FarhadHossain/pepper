import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './Index'
import Main from './Main'

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Index />,
            children: [
                {
                    path: '/',
                    element: <Main />
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Route