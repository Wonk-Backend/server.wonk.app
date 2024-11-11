const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/expose/env', (req, res) => {
    const envVar = req.query.var;
    const envValue = process.env[envVar];
    res.json({ [envVar]: envValue });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});