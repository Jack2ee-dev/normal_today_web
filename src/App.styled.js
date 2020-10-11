import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100vw;
  height: ${(props) => (props.isNavbar ? '90vh' : '100vh')};
`;
