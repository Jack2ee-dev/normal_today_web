import styled from 'styled-components';

import KakaoLogin from 'react-kakao-login';

export const StyledKakaoLogin = styled(KakaoLogin)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 222px;
  height: 49px;
  color: #3c1e1e;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
`;

export const StyledPhrase = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.1;
  display: flex;
  justify-content: center;
`;
