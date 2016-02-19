import path from 'path';
import express from 'express';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { routes } from './src/routes';

const app = express();
const renderPage = (html) => `<!doctype html public="storage">
<html>
  <head>
    <meta charset="utf-8" />
    <title>SSR Production Server Example</title>
    <link rel="stylesheet" href="/static/css/main.css">
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/static/main.js"></script>
  </body>
</html>
`;

app.use(compression());
app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error) {
      res.status(500).json({
        location: req.url,
        message: error.message,
        routes,
      });

    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const html = renderToString(<RouterContext {...props} />);
      res.send(renderPage(html));
    } else {
      res.status(404).send('Not found');
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Production server started running at http://localhost:${PORT}`);
});

