import express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import {
  createPage,
  write,
  writeError,
  writeNotFound,
  redirect
} from './src/utils/server-utils';
import { routes } from './src/routes';
import config from './webpack.config.dev';

const PORT = process.env.PORT || 3000;

const renderApp = (props, res) => {
  const markup = renderToString(<RouterContext {...props} />);
  const html = createPage(markup);

  write(html, 'text/html', res);
};

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      writeError('ERROR!', res);
    } else if (redirectLocation) {
      redirect(redirectLocation, res);
    } else if (renderProps) {
      renderApp(renderProps, res);
    } else {
      writeNotFound(res);
    }
  });
});

// if (__DEV__) {
  // if (module.hot) {
    // console.log("[HMR] Waiting for server-side updates");

    // module.hot.accept("containers/routes", () => {
      // routes = require("containers/routes");
    // });

    // module.hot.addStatusHandler((status) => {
      // if (status === "abort") {
        // setTimeout(() => process.exit(0), 0);
      // }
    // });
  // }
// }

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

