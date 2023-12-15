const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('.')); // Serve static files

app.get('/largefile', (req, res) => {
    const filePath = path.join(__dirname, 'largefile.dat');
    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


