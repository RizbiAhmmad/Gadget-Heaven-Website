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
import ListedGadgets from './Components/ListedGadgets/ListedGadgets';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToCartItems from './Components/ListedGadgets/AddToCartItems';
import AddToWishList from './Components/ListedGadgets/AddToWishList';
import Statistics from './Pages/Statistics';
import GadgetComparison from './Pages/GadgetComparison';

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
        path: 'listedGadgets',
        element:<ListedGadgets></ListedGadgets>,
        loader: ()=> fetch('/ProductData.json'),
        
        children:[
          
          {
            path: 'cart',
            element: <AddToCartItems></AddToCartItems>,
          },
        
        
          {
            path: 'wishlist',
            element: <AddToWishList></AddToWishList>,
          },
        ],

      },

      {
      path: 'statics',
      element: <Statistics></Statistics>
      
      
    },
    {
      path: '/compare',
      element: <GadgetComparison></GadgetComparison>
    }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer  position="top-center" autoClose={3000} />
  </StrictMode>,
)
