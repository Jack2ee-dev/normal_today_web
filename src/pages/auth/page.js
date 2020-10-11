import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import Phrase from '../../components/auth/phrase';
import KakaoLogin from '../../components/auth/kakao';

import { AuthContext } from '../../contexts/stores/authStore';
import axios from '../../axios';
import {
  AuthPageLayout,
  ComponentsWrapper,
} from './styled';

const Auth = () => {
  const {
    state: authState,
    dispatch: authDispatch,
  } = useContext(AuthContext);

  console.log(authState);

  const postKakaoAuthenticationData = async (data) => {
    const { response } = data;
    authDispatch({ type: 'START_AUTHENTICATION' });
    try {
      const { authToken, newUser } = (
        await axios({
          url: '/auth',
          method: 'POST',
          data: {
            accessToken: response.access_token,
            oauthProvider: 'kakao',
          },
        })
      ).data;

      authDispatch({
        type: 'SUCCEED_AUTHENTICATION',
        authToken,
        authRedirectTo: newUser
          ? '/user/detail?mode=init'
          : '/',
      });
    } catch (error) {
      console.log(error);
      authDispatch({ type: 'FAIL_AUTHENTICATION' });
    }
  };

  let AuthComponents;
  if (authState.loading)
    AuthComponents = () => <Spinner animation="border" />;
  else
    AuthComponents = () => (
      <ComponentsWrapper>
        <Phrase />
        <KakaoLogin
          data
          functions={{ postKakaoAuthenticationData }}
        />
      </ComponentsWrapper>
    );

  let AuthRedirects = () => null;
  if (authState.authRedirectTo)
    AuthRedirects = () => (
      <Redirect to={authState.authRedirectTo} />
    );

  return (
    <AuthPageLayout>
      <AuthComponents />
      <AuthRedirects />
    </AuthPageLayout>
  );
};

export default Auth;
