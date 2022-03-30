//Importing needed packages
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

connectDB();

const userRouter = require('./routes/user');
const collectionRouter = require('./routes/collection');
const authRouter = require('./routes/auth');
const { connect } = require('http2');

const app = express();

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

app.set('trust proxy', 1);

app.use(require('./config/session'));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', express.static('./public'));
app.use('/api/myplants', userRouter);
app.use('/api/collection', collectionRouter);
app.use('/api/auth', authRouter);
app.use('/images', express.static('./plant-images'));

//Method to catch not Found error
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({ err });
});

/**
 * ========== SERVER ==============
 */

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, function () {
	console.log(`Express listening on PORT ${PORT} in ${NODE_ENV} mode`);
});
