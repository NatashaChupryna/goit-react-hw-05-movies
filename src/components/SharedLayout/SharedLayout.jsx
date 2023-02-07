import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Header, Container} from './SharedLayout.styled';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Container>
        <main>
          <Suspense fallback={<Loader></Loader>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
