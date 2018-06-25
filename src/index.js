// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Fragment from './components/headless/Fragment';
import { Fetch } from './components/headless/Fetch';
import ErrorBoundary from './containers/ErrorBoundary';
import theme from './styles/themes/default';

const elements = document.getElementsByTagName('cm-fragment');
const HOST = process.env.REACT_APP_API_HOST || 'http://127.0.0.1:8080';
const TENANT_ID = process.env.REACT_APP_TENANT_ID;
const SITE_ID = process.env.REACT_APP_SITE_ID;

const parseParams = (params: string): Object | void => {
  try {
    const parsed = JSON.parse(params);
    return parsed;
  } catch (error) {
    return;
  }
};

for (const item of elements) {
  const { id, show, view, params } = item.dataset;
  const parsedParams = params ? parseParams(params) : undefined;
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Fetch
          host={HOST}
          tenantId={TENANT_ID}
          siteId={SITE_ID}
          fragmentType={show}
          contentId={id}
        >
          {({ pending, data, error }) => {
            if (pending) {
              return <span>Loading...</span>;
            } else if (error) {
              throw new Error(error);
            } else if (data) {
              return (
                <Fragment data={data} fragmentType={show} viewType={view} params={parsedParams} />
              );
            }
            return null;
          }}
        </Fetch>
      </ErrorBoundary>
    </ThemeProvider>,
    item
  );
}
