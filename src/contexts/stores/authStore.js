import React, { useReducer } from 'react';

import { authReducer } from '../reducers/authReducer';

export const AuthContext = React.createContext();

const AuthStore = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    status: 'INIT_AUTHENTICATION',
    authToken: null,
    loading: false,
    authRedirectTo: null,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStore;
