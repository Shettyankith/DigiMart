const bcrypt = require('bcrypt');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email) {
            throw new Error('Please provide email');
        }
        if (!password) {
            throw new Error('Please provide password');
        }
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error('User not found!');
        }
        const result = await bcrypt.compareSync(password, existingUser.password);
        if (result) {
            const tokenData = {
                id: existingUser._id,
                email: existingUser.email,
            };

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

            const tokenOptions = {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production', // ensure secure cookies in production
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', 
                path: '/', // cookie path
            };

            res.cookie('token', token, tokenOptions).json({
                message: `Welcome back ${existingUser.name}`,
                data: token,
                success: true,
                error: false,
            });
        } else {
            throw new Error('Please provide correct password');
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: true,
            success: false,
            message: e.message || 'Internal Server Error',
        });
    }
}

module.exports = login;
