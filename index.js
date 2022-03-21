//Importing needed packages
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/errorHandler');
connectDB();
const logger = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const app = express();

const userRouter = require('./routes/user');
const collectionRouter = require('./routes/catalog');
const authRouter = require('./routes/auth');
const { connect } = require('http2');

app.set('trust proxy', 1);

//Routes
app.use('/', express.static('./public'));
app.use('/api/myplants', userRouter);
app.use('/api/collection', collectionRouter);
app.use('/api/auth', authRouter);

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
	);
	next();
});

app.use(
	cors({
		allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept'],
		credentials: true,
		origin: [],
	})
);

//Method to catch not Found error
app.use(function (req, res, next) {
	next(createError(404));
});
app.use(errorHandler);

app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

/**
 * ========== SERVER ==============
 */

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, function () {
	console.log(`Express listening on PORT ${PORT} in ${NODE_ENV} mode`);
});
