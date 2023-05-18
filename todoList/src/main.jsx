import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link, Navigate, } from "react-router-dom";
import Login from './pages/Login.jsx';
import Todos from './pages/Todos.jsx';

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/todos"} />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/todos",
    element: <Todos />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rootRouter}>
    <App />
  </RouterProvider>

)
