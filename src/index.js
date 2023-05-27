import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import App from './App'
import Home from './routes/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
)