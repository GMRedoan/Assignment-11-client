import React, { use } from 'react';
import { AuthContext } from '../Authentication/AuthContex';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Shared/Loading';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
        if (loading) {
        return <Loading></Loading>
    }

            if(user){
                return children
            }
    return  <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;