var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// Swagger
const swaggerUi = require('swagger-jsdoc');
const apiDocumentation = require('./apiDocs.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
//End Swagger

const authRouter = require('./app/api/auth/router');
const logisticRouter = require('./app/api/logistic/router');

const URL = '/api/v1';
var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to api logistic' });
});

app.use(URL, authRouter);
app.use(URL, logisticRouter);

module.exports = app;
