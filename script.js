const express = require('express');
const env= require('dotenv');
env.config();
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});
const port= 5000 || process.env.PORT;
app.listen(port);

