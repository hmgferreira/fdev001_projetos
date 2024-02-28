import React from 'react';

const AuthContext = React.createContext({
    isLogged: false,
    user: null
});

export default AuthContext;