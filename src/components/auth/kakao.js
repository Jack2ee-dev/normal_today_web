import React from 'react';

import { StyledKakaoLogin } from './styled';

import { JAVASCRIPT_KEY } from '../../constants/kakao.json';

const Login = ({ data, functions }) => {
  const { postKakaoAuthenticationData } = functions;

  return (
    <StyledKakaoLogin
      jsKey={JAVASCRIPT_KEY}
      buttonText="카카오로 빠른 시작"
      onSuccess={(result) =>
        postKakaoAuthenticationData(result)
      }
      onFailure={(result) => console.log(result)}
      // getProfile={true}
    />
  );
};

export default Login;
