const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');
const errorController = require('./controllers/errorController');

const PORT = process.env.PORT || 8080;

const app = express();

//* Setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//* Setup view engine
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');
app.set('views', 'backend/views');

//* Setup morgan to log calls
app.use(morgan('dev'));

//* Import endpoints and use respective controllers
const mainRoutes = require('./routes/mainRoutes');

app.use(mainRoutes);

app.use(errorController.get404);

//* Start server
app.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`.magenta.underline);
});
