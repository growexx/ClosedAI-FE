/* eslint-disable react/no-array-index-key */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import UploadDocuments from 'containers/UploadDocuments/Loadable';
import { FAV_ICONS } from './constants';
import GlobalStyle from '../../global-styles';
import { manageSession } from '../../utils/Helper';
import { initGA, recordPageViewGA } from '../../utils/googleAnalytics';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function App() {
  useEffect(() => {
    // google analytics init
    initGA();
    // first time page render
    recordPageViewGA(window.location.pathname);
    window.addEventListener('storage', manageSession, []);
    return () => {
      window.removeEventListener('storage', window);
    };
  }, []);

  useEffect(() => {
    // record page view on every route change
    recordPageViewGA(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <AppWrapper data-testid="AppRoutes">
      <Helmet
        titleTemplate="%s - Closed AI"
        defaultTitle="Closed AI"
      >
        <meta name="description" content="A Closed AI application" />
        {FAV_ICONS.map((favIcon, index) => (
          <link {...favIcon} key={index} />
        ))}
      </Helmet>

      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<UploadDocuments />} />
      </Routes>
    </AppWrapper>
  );
}
