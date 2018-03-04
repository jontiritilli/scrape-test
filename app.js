const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 6700;

const app = express();

// app.use(express.static(path.resolve('.','index.html')));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('scrape-it','index.html'))
});

require('./scrape')(app);

app.listen(PORT, ()=>{
    console.log('Server listening on port ', PORT)
})