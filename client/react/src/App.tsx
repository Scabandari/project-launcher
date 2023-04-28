import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import Toaster from 'src/components/utils/Toaster';

import { HomePage, AboutPage, LoginPage, RegisterPage } from './pages';
import { Header, SideDrawer, Logout } from './components';
import { borderBox, fitPageContentMediaQuery } from './styles/constants';
import React from 'react';

const Help = () => <h1>Help Center</h1>;

const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PageContent = styled.div`
  ${borderBox}
  width: 100%;
  margin: 0 auto;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${fitPageContentMediaQuery}
`;

const HeaderWrapper = styled.div`
  z-index: -1;
`;

const SideDrawerWraper = styled.div`
  z-index: 100;
  position: fixed;
  right: 0;
  top: 0;
`;

const PageContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <BrowserRouter>
      <PageWrap>
        <HeaderWrapper>
          <Header setIsOpen={setIsOpen} />
        </HeaderWrapper>
        <PageContentWrapper>
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
        </PageContentWrapper>
        <Toaster />
        <SideDrawerWraper>
          <SideDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </SideDrawerWraper>
      </PageWrap>
    </BrowserRouter>
  );
};

export default App;
