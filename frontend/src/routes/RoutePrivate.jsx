import React, { useContext } from 'react';
import AuthContext from "../contexts/auth";
import { Navigate } from 'react-router-dom';

function RoutePrivate(props) {

    // AUTENTICACAO
    const { isLogged } = useContext(AuthContext);
        
    if(props.item.isPrivate && isLogged === false) {
        return <Navigate to="/login" />;
    }

    return props.children;
}

export default RoutePrivate;