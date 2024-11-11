const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/expose/env', (req, res) => {
    const envVar = req.query.var;
    if (!envVar) {
        return res.status(400).json({ error: 'Query parameter "var" is required' });
    }
    const envValue = process.env[envVar];
    if (envValue === undefined) {
        return res.status(404).json({ error: `Environment variable "${envVar}" not found` });
    }
    res.json({ [envVar]: envValue });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});