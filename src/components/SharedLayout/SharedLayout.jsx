import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Container>
        {' '}
        <Outlet></Outlet>
      </Container>

      <Footer><p>Made with a lot of tears by Nataliia Chupryna ✌</p></Footer>
    </>
  );
};

const StyledLink = styled(NavLink)`
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

const Header = styled.header`
  padding: 20px 30px;
  background-color: #3b3b3b;
  box-shadow: 0px 13px 24px -3px rgb(245 14 45 / 70%);
`;

const Container = styled.main`
    padding: 0 15px;
    height: 100vh;
`
const Footer = styled.footer`
  text-align: center;
`