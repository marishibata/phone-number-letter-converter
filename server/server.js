const express = require('express');
const cors = require('cors');
const router = require('./router/router');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT} 🦄`);
});