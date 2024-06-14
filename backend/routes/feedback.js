const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const isAuthenticated = require('../middlewares/isAuthenticated'); //

router.post('/submit', isAuthenticated, feedbackController.submitFeedback);
router.get('/category/:category', feedbackController.getFeedbackByCategory);

module.exports = router;

