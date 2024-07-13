const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToDB = require('./config/db');
const router = require('./routes/index');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = 8080;

// Set up CORS
app.use(cors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(cookieParser());

// Increase the request size limit
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// Parse application/json
app.use(express.json());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Handle preflight requests
app.options('*', cors());

// Define routes
app.use('/', router);

// Connect to the database and start the server
connectToDB().then(() => {
    app.listen(port, () => {
        console.log("Connected to DB");
        console.log(`App is listening at port ${port}`);
    });
}).catch(error => {
    console.error("Error connecting to the database", error);
});
