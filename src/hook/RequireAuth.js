import React from 'react'
import useAuth from './useAuth'
import { Navigate } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';

function RequireAuth() {
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/login" replace={true} />;
    } else {
        return <DetailPage/>
    }
}

export default RequireAuth