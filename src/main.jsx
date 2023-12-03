import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import Home from './home/Home.jsx';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Blog from './Blog/Blog.jsx';
import Shop from './Shop/Shop.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import SingleBlog from './Blog/SingleBlog.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/blog/:id",
        element:<SingleBlog/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },{
        path:"shop/:id",
        element:<SingleProduct/>
      },
      {
        path:"cart-page",
        element:<PrivateRoute><CartPage/></PrivateRoute>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/sign-up",
    element:<SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
