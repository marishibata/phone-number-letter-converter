const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.listen(port, () => {
  console.log('server is listening on port ' + port);
});