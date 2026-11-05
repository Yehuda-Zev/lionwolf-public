const express = require('express');
const path = require('path');

const app = express();
const PAGES = path.join(__dirname, 'pages');
const IDEA_MAP = path.join(PAGES, 'products', 'idea-map', 'app');

// Old Idea Map location -> new one
app.use('/ideamap', (req, res) => res.redirect(301, '/products/idea-map/app/'));

// Idea Map has no product page yet, so send visitors to the app
app.get(['/products/idea-map', '/products/idea-map/'], (req, res) =>
  res.redirect(302, '/products/idea-map/app/'));

// Privacy page lives in the Idea Map repo, served at a cleaner URL
app.get('/products/idea-map/privacy', (req, res) =>
  res.sendFile(path.join(IDEA_MAP, 'privacy.html')));

app.use(express.static(PAGES));

// Anything not matched above
app.use((req, res) => res.status(404).sendFile(path.join(PAGES, '404.html')));

app.listen(3000, '0.0.0.0', () => console.log('up on 3000'));
