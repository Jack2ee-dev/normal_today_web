import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10vh;
  box-shadow: 3px 0 9px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 10;
  display: flex;
`;

export const StyledLink = styled(Link)`
  width: ${(props) => `${100 / Number(props.count)}%`};
  display: flex;
  align-items: center;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
`;

export const StyledNavItem = styled.div`
  width: 100%;
  display: inline;
  text-align: center;
`;
