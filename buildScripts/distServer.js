import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import RateLimit from 'express-rate-limit';
/* eslint-disable no-console */
const port = 3000;
const app = express();

// set up rate limiter: maximum of five requests per minute

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

//add gzip compression
app.use(compression());

app.use(express.static(__dirname, '../dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//opens browser
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
