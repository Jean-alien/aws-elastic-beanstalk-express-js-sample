const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('1100 SW 66th, Oklahoma City, OK 73139'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
