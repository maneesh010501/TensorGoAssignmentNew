const Feedback = require('../models/feedback');
const axios = require('axios');

exports.submitFeedback = async (req, res) => {
    const { category, rating, comments } = req.body;
    const feedback = new Feedback({
        userId: req.user.id,
        category,
        rating,
        comments,
    });

    try {
        await feedback.save();
        // Optionally, send feedback to Frill.co
        await axios.post('https://api.frill.co/v1/ideas', {
            category,
            rating,
            comments,
        }, {
            headers: { 'Authorization': `Bearer ${process.env.FRILL_API_KEY}` }
        });
        res.status(201).send('Feedback submitted successfully.');
    } catch (err) {
        console.error('Error submitting feedback:', err);
        res.status(400).send(`Error submitting feedback: ${err.message}`);
    }
};

exports.getFeedbackByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const feedback = await Feedback.find({ category }).exec();
        res.status(200).json(feedback);
    } catch (err) {
        console.error('Error retrieving feedback:', err);
        res.status(400).send('Error retrieving feedback.');
    }
};
