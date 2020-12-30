const path = require('path');
const express = require('express');
const logger = require('morgan');

// Initializations
const app = express();

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
require('./config/hbs.config');

// Dev
app.use(logger('dev'));

// Middlewares

app.use(express.json());

// Global variables
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// Configure body parser
app.use(express.urlencoded({ extended: true }));

// Routes
const router = require('./config/routes.config');
app.use('/', router);



// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`App listening at port ${port}`);
})





