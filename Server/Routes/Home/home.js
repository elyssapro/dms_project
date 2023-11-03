/**
 * Node modules, App layouts, middlware and app router
 */

const express = require('express');
const Router = express.Router();
const AuthenticationLayout = '../views/Layouts/Home/SearchResults/results.ejs';


/**
 * App routes handler
 */

Router.get('/', (req, res) => {
    res.render('./App/Home/home')
})

module.exports = Router;


