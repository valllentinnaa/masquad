const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log('TOKEN');
        console.log('============');
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        console.log(error);
        console.log(req.headers);
        return res.status(404).json({
            message: 'Auth failed',
            responseAuth: res
        });
    }
};