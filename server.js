//Install express server
const express = require('express');
const path = require('');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + './dist'));

app.get('*', (req, res) =>{
    res.sendStatus(200).sendFile(__dirname + 'dist/index.html');
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
