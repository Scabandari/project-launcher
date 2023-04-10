import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import Toaster from 'src/components/utils/Toaster';

import {
  // HomePage,
  AboutPage,
  LoginPage,
  RegisterPage,
} from './pages';
import { Header } from './components';
import { borderBox, fitPageContentMediaQuery } from './styles/constants';

const Help = () => <h1>Help Center</h1>;
const Logout = () => <h1>You've been logged out</h1>;

const HomePage = () => (
  <>
    <h1>process.env: </h1>
    <pre>{JSON.stringify(process.env, null, 2)}</pre>
  </>
);

const PageWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const PageContent = styled.div`
  ${borderBox}
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  ${fitPageContentMediaQuery}
`;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <PageWrap id='page-wrap'>
        <PageContent>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </PageContent>
        <Toaster />
      </PageWrap>
    </BrowserRouter>
  );
};

export default App;
