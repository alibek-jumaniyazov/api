import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <RouterProvider>
      <App />
    </RouterProvider>
  </createBrowserRouter>

)
