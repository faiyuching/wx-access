const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.query);
})

app.listen(80, () => {
    console.log('server running...');
})