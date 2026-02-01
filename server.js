const express = require('express');
const ip = require('ip');

const app = express();

app.get('/', (req, res) =>{
      const serverIP = ip.address();
      return res.json({
        ping: 'Pong',
        message: serverIP
      })
});

app.listen(3000, () => {
    console.log("server is running");
});