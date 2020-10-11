import React, { useEffect, useContext } from 'react';

import { AuthContext } from '../contexts/stores/authStore';

const IsAuth = (props) => {
  const {
    state: authState,
    dispatch: authDispatch,
  } = useContext(AuthContext);

  const authToken = localStorage.getItem('AUTH_TOKEN');

  useEffect(() => {
    if (authToken) {
      authDispatch({
        type: 'AUTO_AUTHENTICATION',
        authToken: localStorage.getItem('AUTH_TOKEN'),
        authRedirectTo: '/user/detail?mode=edit',
      });
    }
  }, [authToken]);

  return <>{props.children}</>;
};

export default IsAuth;
