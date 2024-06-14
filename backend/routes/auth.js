const express = require('express');
const passport = require('passport');
const router = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const feedbackController = require('../controllers/feedbackController');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/feedback' }),
    (req, res) => {
        res.redirect('http://localhost:3000/feedback');
    });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
