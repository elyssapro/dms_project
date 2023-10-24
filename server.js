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

app.use(express.static('Public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Applicaction layouts middlewares
 */

app.set('layout', './layouts/Home_one/home_one');
app.set('view engine', 'ejs');


/**
 * App routes
 */

app.get('/', (req, res) => {
    res.send('Hello developers');
})


/**
 * Listening to the application
 */

app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on PORT ${PORT}`);
})