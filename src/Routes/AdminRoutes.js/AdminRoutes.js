import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../Components/SecondHand/Loader/Loader';
import { AuthContextAPI } from '../ContextAPI/AuthContext';

const AdminRouts = ({ children }) => {
    const { user, useloader } = useContext(AuthContextAPI);
    const [isAdmin] = useAdmin(user?.email);
    const location = useLocation();

    if (useloader) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRouts;