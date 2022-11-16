import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import AddService from '../pages/AddService/AddService';
import Home from '../pages/Home/Home';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';
import MyReview from '../pages/MyReveiew/MyReview';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: async () => {
                    return fetch(`http://localhost:5000/services`);
                  },
                element:<Services></Services>
            },
            {
                path: '/services/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`);
                  },
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path: '/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreview',
                element:<MyReview></MyReview>
            },

        ]
    },
    {
        path:'/signin',
        element:<SignIn></SignIn>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    }

])


export default router;