const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


const app = express();

const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);


app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/bad', (req, res) => {
  throw new Error('Error .....');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};