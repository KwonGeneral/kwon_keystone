const express = require('express');
const app = express();
const port = 5000;

const db = require('./data/db/db');
db.connect();

app.get('/getUsers', (req, res) => {
    print("getUsers");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
