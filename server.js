const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// app.get('/api/contacts', (req, res) => {
//     res.send('get all contacts');
// })
app.use('/api/contacts', require('./routes/contactRoutes'))// middleWare

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})