const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const strongPassword = require('./strongPassword');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.redirect('/password');
});

app.get('/password', (req, res, next) => {
  const pwLength = +req.query.pwLength || 8;
  const password = strongPassword(pwLength);
  let errorMessage = null;
  if (pwLength < 8) {
    errorMessage =
      "Sorry, please choose a password that's at least 8 characters long.";
  }
  res.json({ password: password, errorMessage: errorMessage });
});

app.listen(5000, () => console.log('running on port 5000'));
