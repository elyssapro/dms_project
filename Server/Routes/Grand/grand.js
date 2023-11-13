/**
 * Node modules, App layouts, middlware and app router
 */

const express = require('express');
const Router = express.Router();
const GrandLayout = '../views/Layouts/Grand/main.ejs';


/**
 * App routes handler
 */

Router.get('/', (req, res) => {
    res.render('./App/Grand/index', { layout: GrandLayout})
})

module.exports = Router;


