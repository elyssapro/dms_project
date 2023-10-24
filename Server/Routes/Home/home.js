/**
 * Node modules, App layouts, middlware and app router
 */

const express = require('express');
const Router = express.Router();

/**
 * App routes handler
 */

Router.get('/', (req, res) => {
    res.render('./App/Home/home')
})


module.exports = Router;


