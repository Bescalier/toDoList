const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(PORT, () => 
  console.log(`server on  192.168.0.22:${PORT}`),
);