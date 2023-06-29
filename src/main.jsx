import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About.jsx'
import Contack from './pages/Contack.jsx'



const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        // path: '/',
        // element: <App/>,
      },
      {
        path: '/',
        element:<Contack/>,
      },
      {
        path: '/about',
        element:<About/>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* untuk merender semua router yang telah kita setup */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
