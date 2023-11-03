/**
 * Node modules, App layouts, middlware and app router
 */

const express = require('express');
const Router = express.Router();
const AuthenticationLayout = '../views/Layouts/Authentication/main.ejs';


/**
 * App routes handler
 */

Router.get('/account', async(req, res) => {
    const locals = {
        title: 'Account'
    }
    res.render('./App/authentication/main', {locals, layout: AuthenticationLayout});
})


module.exports = Router;