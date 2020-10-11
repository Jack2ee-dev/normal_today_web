import { updatedObject } from '../utility';

export const authReducer = (state, action) => {
  const startAuthentication = (state, action) => {
    return updatedObject(state, {
      status: action.type,
      loading: true,
    });
  };

  const succeedAuthentication = (state, action) => {
    return updatedObject(state, {
      status: action.type,
      authToken: action.authToken,
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
    return updatedObject(state, {
      status: 'LOGGED_OUT',
      authToken: null,
      loading: false,
      authRedirectTo: null,
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
    default:
  }
};
