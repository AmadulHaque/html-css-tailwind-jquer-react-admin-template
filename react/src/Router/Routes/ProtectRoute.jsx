import React from 'react';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LazyLoader from '../../helper/LazyLoader.jsx';

const ProtectRoute = ({ route, children }) => {
    const { role, userInfo } = useSelector((state) => state.user);

    if (role) {
        if (userInfo) {
            if (route.role) {
                if (userInfo.role === route.role) {
                    return <Suspense fallback={<LazyLoader/>}>{children}</Suspense>;
                } else {
                    return <Navigate to="/404" replace />;
                }
            } else {
                return <Navigate to="/404" replace />;
            }
        }
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectRoute;