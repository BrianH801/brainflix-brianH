const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;
const videoRoute = require('./routes/videoRoute');

app.use(express.json());
app.use(cors());
app.get('/', (_req, res) => {
  res.send('<h1>Hello Express');
});

app.use('/videos', videoRoute);

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
