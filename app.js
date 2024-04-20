const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('There are 5 rule actions by default while you run a typical Snort rule'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
