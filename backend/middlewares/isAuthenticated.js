const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send('Unauthorized'); // Or redirect to login page
};

module.exports = isAuthenticated;
