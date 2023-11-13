/**
 * Node core modules and other third packages
 */

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();

/**
 * PORT number
 */

const PORT = 5000 || process.env.PORT_NUMBER;

/**
 * Middleware and static files
 */

app.use(expressLayout);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Applicaction layouts middlewares
 */

app.set('layout', './Layouts/Home/home');
app.set('view engine', 'ejs');


/**
 * App routes
 */

app.use('/Home', require('./Server/Routes/Home/home'));
app.use('/', require('./Server/Routes/Grand/grand'));
app.use('/', require('./Server/Routes/Home/search-results'))
app.use('/', require('./Server/Routes/Authentication/main'))

/**
 * Listening to the application
 */

app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on PORT ${PORT}`);
})