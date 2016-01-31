// import React from 'react';
// import { render } from 'react-dom';
// import { match, Router, browserHistory } from 'react-router';
// import { routes } from './routes';

// const { pathname, search, hash } = window.location;
// const location = `${pathname}${search}${hash}`;

const mountNode = document.getElementById('root');

// match({ history: browserHistory, routes, location }, (error, redirectLocation, renderProps) => {
  // render(
    // <Router {...renderProps} />,
    // document.getElementById('root')
  // );
// });

/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if (__DEV__) {
  if (!mountNode.firstChild ||
      !mountNode.firstChild.attributes ||
      !mountNode.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}
