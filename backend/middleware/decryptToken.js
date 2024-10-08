const jwt = require('jsonwebtoken');

async function decryptToken(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: 'Please Login...!',
                error: true,
                success: false,
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            if (err) {
                console.log('error auth', err);
                return res.status(401).json({
                    message: 'Unauthorized',
                    error: true,
                    success: false,
                });
            }

            req.userId = decoded?.id;
            next();
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        });
    }
}

module.exports = decryptToken;
