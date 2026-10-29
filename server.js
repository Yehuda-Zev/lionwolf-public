const express = require('express');
const app = express();
app.use(express.static('pages'));
app.listen(3000, '127.0.0.1', () => console.log('up on 3000'));