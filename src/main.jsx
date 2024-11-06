import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Components/MainRoot/MainRoot';
import ErrorPages from './Pages/ErrorPages';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import GadgetDetails from './Pages/GadgetDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
      path: '/',
      element: <Home></Home>
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('/ProductData.json')
      },
      {
      path: 'dashboard',
      element: <Dashboard></Dashboard>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
