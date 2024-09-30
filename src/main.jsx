import { createRoot } from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import './index.css'

// import page
import Login from './Layout/Auth/Login'
import Register from './Layout/Auth/register'
import HalamanAwal from './Layout/Auth/HalamanAwal'
import Home from './Layout/Auth/Home'
import Preview from './Layout/Auth/Preview'
import Genre from './Layout/Auth/Genre';
import Series from './Layout/Auth/Series'
import PilihGenre from './Layout/Auth/pilihGenre';
import Action from './Layout/Auth/Action';


// define router path
const router = createBrowserRouter ([
  {
    path: "/",
    element:<HalamanAwal/>,
  },
  {
    path: "/login",
    element:<Login/>,
  }, 
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/home",
    element:<Home/>,
  },
  {
    path: "/videos/preview/:original_title",
    element:<Preview/>,
  },
  {
    path: "/genre",
    element:<Genre/>,
  },
  {
    path: "/series",
    element:<Series/>,
  },
  {
    path: "/genre/pilihgenre",
    element:<PilihGenre/>,
  },
  {
    path: "/genre/action",
    element:<Action/>,
  }
])


// render object router
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)