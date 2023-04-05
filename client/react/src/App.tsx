import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { Toaster } from 'react-hot-toast';

import { HomePage, AboutPage, LoginPage } from './pages';
import { Header } from './components';
import { borderBox, fitPageContentMediaQuery } from './styles/constants';

const Help = () => <h1>Help Center</h1>;
const Logout = () => <h1>You've been logged out</h1>;

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
            <Route path='/logout' element={<Logout />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </PageContent>
        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          containerClassName=''
          containerStyle={{}}
          toastOptions={{
            position: 'bottom-center',
            success: {
              duration: 3000,
              style: {
                background: '#61C791',
                color: '#fff',
              },
            },
            error: {
              duration: 3000,
              style: {
                background: '#B22222',
                color: '#fff',
              },
            },
          }}
        />
      </PageWrap>
    </BrowserRouter>
  );
};

export default App;
