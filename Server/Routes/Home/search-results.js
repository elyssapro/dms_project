const express = require('express');
const Router = express.Router();


/**
 * Layouts
 */

const SearchResultLayout = '../views/Layouts/Home/SearchResults/results.ejs';

/**
 * POST
 * Search Results
 */

Router.post('/search-results', async(req, res) => {
    res.redirect('search-results');
})


/**
 * GET
 * Search Results
 */

Router.get('/search-results', async(req, res) => {
    const locals = {
        title: 'Search Results'
    }
    res.render('../views/App/Home/SearchResults/results', { locals, layout: SearchResultLayout});
})



module.exports = Router;