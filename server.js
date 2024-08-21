const express = require('express');
const app = express();
const config = require('./config');

app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/assets/resources', (req, res) => {
  res.json(config.data);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});