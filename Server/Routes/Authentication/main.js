/**
 * Node modules, App layouts, middlware and app router
 */

const express = require('express');
const Router = express.Router();
const AuthenticationLayout = '../views/Layouts/Authentication/main.ejs';
const RegisterSchool = '../views/Layouts/Authentication/school-reg.ejs';


/**
 * App routes handler
 */

Router.get('/account', async(req, res) => {
    const locals = {
        title: 'Account'
    }
    res.render('./App/authentication/main', {locals, layout: AuthenticationLayout});
});

Router.get('/school-registration', async(req, res) => {
    const locals = {
        title: 'Register School'
    }
    res.render('./App/authentication/school-reg', {locals, layout: RegisterSchool });
})


module.exports = Router;
