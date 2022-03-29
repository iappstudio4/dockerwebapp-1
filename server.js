'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8082;

// App
const app = express();
app.get('/', (req, res) => {
 res.send("hai")
 
});

app.listen(PORT);
console.log(`Running on http://:${PORT}`);
