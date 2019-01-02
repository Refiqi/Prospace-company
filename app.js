const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Initial App');
});

app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`Listening at port: ${port}`);
});

