/**
 * Node modules, App layouts, middlware and app router
 */

const express = require('express');
const Router = express.Router();
const HomeLayout = '../views/Layouts/Grand/home.ejs';


/**
 * App routes handler
 */

Router.get('/', (req, res) => {
    res.render('./App/Grand/home', { layout: HomeLayout})
})

module.exports = Router;


