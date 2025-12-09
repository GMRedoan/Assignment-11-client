import React, { use } from 'react';
import { AuthContext } from '../Authentication/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user} = use(AuthContext)
    const location = useLocation()
            if(user){
                return children
            }
    return  <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;