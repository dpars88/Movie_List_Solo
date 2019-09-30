const express = require('express');

const path = require('path');


const PORT = 3088;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log('Express server started on ', PORT));