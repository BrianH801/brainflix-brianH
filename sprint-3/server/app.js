const express = require('express');
const app = express();
const port = 5000;
const videoRoute = require('./routes/videoRoute');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello Express');
});

app.use('/videos', videoRoute);

app.listen(port, () => console.log(`listening at: http://localhost:${port}`));
