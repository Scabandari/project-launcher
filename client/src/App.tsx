import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';

import { HomePage } from './pages';
import { Header } from './components';
import { borderBox, fitPageContentMediaQuery } from './styles/constants';

const url = process.env.REACT_APP_API_URL;

const Help = () => <h1>Help Center</h1>;
const About = () => <h1>About page</h1>;
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
            <Route path='/about' element={<About />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </PageContent>
      </PageWrap>
    </BrowserRouter>
  );
};

export default App;
