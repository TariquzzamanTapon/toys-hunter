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
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Error from './components/pages/Error/Error.jsx';
import AllToys from './components/pages/AllToys/AllToys.jsx';
import Toy from './components/pages/Toy/Toy.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AddToy from './components/pages/AddToy/AddToy.jsx';
import MyToys from './components/pages/MyToys/MyToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><Toy></Toy></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path : '/addtoy',
        element : <AddToy></AddToy>
      },
      {
        path : '/mytoys',
        element : <MyToys></MyToys>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className=' mt-3 md:w-11/12 mx-auto'>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </div>
  </AuthProvider>
)
