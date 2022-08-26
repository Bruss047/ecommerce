import React from 'react';
import PropTypes from 'prop-types';

import { Navigate} from 'react-router-dom';


export const PrivateRoute = ({ isAuthenticated,
    redirectPath = '/login',
    children,
    }) => {
        
    if (!isAuthenticated) {
        return <Navigate to= {redirectPath} replace />;
    }
    return children;
};


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}