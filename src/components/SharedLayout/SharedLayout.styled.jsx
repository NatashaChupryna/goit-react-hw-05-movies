import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 600;
  font-size: 20px;

  &.active {
    color: red;
    border-bottom: 2px solid red;
  }
  &:hover {
    color: red;
    transition: 500ms ease;
  }
`;

export const Header = styled.header`
  padding: 20px 30px;
  background-color: #3b3b3b;
  box-shadow: 0px 9px 26px 0px rgb(245 14 45 / 70%);
  margin-bottom: 15px;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  padding-bottom: 20px;
  min-height: 100%;
  color: white;
  
`;
export const Footer = styled.footer`
  text-align: center;
  padding: 20px 0px;
  
`;
