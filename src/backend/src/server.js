const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');
const errorController = require('./controllers/errorController');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const server = express();

//* Setup body-parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());

//* Setup morgan to log calls
server.use(morgan('dev'));
server.use(cors());

//* Import endpoints and use respective controllers
const mainRoutes = require('./routes/mainRoutes');

server.use(mainRoutes);

server.use(errorController.get404);

//* Start server
server.listen(process.env.PORT, () => {
  console.log(
    `Server running on port :${process.env.PORT}  ( ͡~ ͜ʖ ͡°)`.yellow.underline
  );
});
