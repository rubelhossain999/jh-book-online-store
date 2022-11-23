import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthInfoContext';

const PrivateRoute = ({ children }) => {
    const { user, useloader } = useContext(AuthContext);
    const location = useLocation();

    if(useloader){
        return <div className="text-center w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;