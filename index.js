import express from 'express';
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port ' + port);
});
