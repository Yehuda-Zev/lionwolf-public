const express = require('express');
const app = express();
app.use(express.static('pages'));
app.listen(3000, () => console.log('up on 3000'));