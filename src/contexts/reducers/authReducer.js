import jwtDecode from 'jwt-decode';

import { updatedObject } from '../utility';

const decodeJwtToken = (authToken) => {
  const { userId, name } = jwtDecode(authToken);

  return { userId, name };
};

export const authReducer = (state, action) => {
  const startAuthentication = (state, action) => {
    return updatedObject(state, {
      status: action.type,
      loading: true,
    });
  };

  const succeedAuthentication = (state, action) => {
    const { userId, name } = decodeJwtToken(
      action.authToken
    );
    localStorage.setItem('AUTH_TOKEN', action.authToken);
    return updatedObject(state, {
      status: action.type,
      authToken: action.authToken,
      userId: userId,
      name: name,
      loading: false,
      authRedirectTo: action.authRedirectTo,
    });
  };

  const failAuthentication = (state, action) => {
    return updatedObject(state, {
      status: action.type,
      loading: false,
    });
  };

  const logout = (state, action) => {
    localStorage.removeItem('AUTH_TOKEN');
    return updatedObject(state, {
      status: action.type,
      authToken: null,
      userId: null,
      name: null,
      loading: false,
      authRedirectTo: null,
    });
  };

  const autoAuthentication = (state, action) => {
    const authToken = action.authToken;
    const { userId, name } = decodeJwtToken(authToken);
    return updatedObject(state, {
      status: action.type,
      authToken: authToken,
      userId: userId,
      name: name,
      authRedirectTo: action.authRedirectTo,
    });
  };

  switch (action.type) {
    case 'START_AUTHENTICATION':
      return startAuthentication(state, action);
    case 'SUCCEED_AUTHENTICATION':
      return succeedAuthentication(state, action);
    case 'FAIL_AUTHENTICATION':
      return failAuthentication(state, action);
    case 'LOGOUT':
      return logout(state, action);
    case 'AUTO_AUTHENTICATION':
      return autoAuthentication(state, action);
    default:
  }
};
