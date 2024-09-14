import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErrorPage from './assets/ErrorPage/ErrorPage.jsx';
import Home from './Home/Home.jsx';
import PopularDetails from './assets/Component/Popular/PopularDetails.jsx';
import Login from './assets/Component/Login/Login.jsx';
import Register from './assets/Component/Register/Register.jsx';
import AuthProvider from './Privider/AuthProvider.jsx';
import AllContestPage from './assets/Component/AllContestPage/AllContestPage.jsx';
import Dashboard from './assets/Dashboard/Dashboard/Dashboard.jsx';
import Cart from './assets/Dashboard/Cart/Cart.jsx';
import WinnerContest from './assets/Component/WinnerContest/WinnerContest.jsx';
import AddContest from './assets/Dashboard/AddContest/AddContest.jsx';

import ManageUser from './assets/Dashboard/ManageUser/ManageUser.jsx';
import PrivateRoute from './Root/PrivateRoute.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllContestDetails from './assets/Component/AllContestPage/AllContestDetails.jsx';
import Payment from './assets/Dashboard/Payment/Payment.jsx';
import ParticipatedContest from './assets/Dashboard/ParticipatedContest/ParticipatedContest.jsx';
import CreateContest from './assets/Dashboard/CreateContext/CreateContest.jsx';
import ContestSubmite from './assets/Dashboard/ContestSubmit/ContestSubmite.jsx';
import Edit from './assets/Dashboard/Edit/Edit.jsx';
import WinningContest from './assets/Dashboard/WinningContest/WinningContest.jsx';
import Profile from './assets/Dashboard/Profile.jsx';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
      ,
      {
        path:"/blogs/:id",
        element:<PopularDetails></PopularDetails>,
        loader:() => fetch('/popularMovies.json')
      }
      ,
      {
        path:"/login",
        element:<Login></Login>
      }
      ,
      {
        path:"/register",
        element:<Register></Register>
      }
      ,
      {
        path:"/allContest",
        element:<AllContestPage></AllContestPage>
      }
      ,
      {
        path:"/contest/:id",
        element:<PrivateRoute><AllContestDetails></AllContestDetails></PrivateRoute>,
        loader:() => fetch('/allContest.json')
      }
      ,
      {
        path:"/WinnerContest",
        element:<WinnerContest></WinnerContest>,
        loader:()=>fetch('http://localhost:5000/winning')
      }
      ,
      {
        path:"/payment",
        element:<Payment></Payment>
      }
      
      // {
      //   path:"/winners",
      //   element:<Winner></Winner>,
      //   loader:()=>fetch('http://localhost:5000/winning')
      // }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      }
      ,
      {
        path:'addContest',
        element:<AddContest></AddContest>
      }
      ,
      {
        path:'CreateContest',
        element:<CreateContest></CreateContest>,
        loader:() =>fetch('http://localhost:5000/contest')
      }
      ,
      
        {
          path:'profile',
          element:<Profile></Profile>
        }
      
      ,
      {
        path:'contestSubmit',
        element:<ContestSubmite></ContestSubmite>,
        loader:() =>fetch('http://localhost:5000/submited')
      }
     ,
      {
        path:"participatedContest",
        element:<ParticipatedContest></ParticipatedContest>
      }
      ,
      {
        path:'edit/:_id',
        element:<Edit></Edit>
      }
      ,
      {
        path:"winningContest",
        element:<WinningContest></WinningContest>,
        loader:()=>fetch('http://localhost:5000/winning')
      }
      ,
      //admin route
      {
        path:'manageUser',
        element:<ManageUser></ManageUser>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
  </React.StrictMode>,
)
