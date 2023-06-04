import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home/Home.jsx';
import Login from './components/pages/Login/Login.jsx';
import Register from './components/pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='px-5 mt-3'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
