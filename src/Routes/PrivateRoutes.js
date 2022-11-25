import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/SecondHand/Loader/Loader';
import { AuthContextAPI } from '../ContextAPI/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, useloader } = useContext(AuthContextAPI);
    const location = useLocation();

    if(useloader){
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;