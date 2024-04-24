import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Signup from './components/Signup.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />
  },

  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
