import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loader,user} = useContext(AuthContext);
    const location = useLocation();
    if (loader) {

        return <progress className="progress w-56"></progress>
    }
    if(!user){
        return <Navigate to={'/signin'} state={{from:location}} replace></Navigate>
       }
    return children;
};

export default PrivateRoute;