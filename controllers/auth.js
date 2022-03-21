const User = require('../models/User');
const passport = require('passport');
const { ONE_DAY } = require('../utils/constants');
//const ErrorResponse = require("../utils/errorResponse");

//@access public
exports.login = (req, res, next) => {
	passport.authenticate('local', function (error, user) {
		if (error || !user) {
			res.status(401).send();
		} else {
			req.login(user, function (error) {
				if (error) {
					return next(error);
				}
				res.status(200).json({
					email: user.email,
					name: user.name,
				});
			});
		}
	})(req, res, next);
};

exports.logout = (req, res, next) => {
	req.logout();
	res.clearCookie('SID', { path: '/' });
	req.session.destroy(function (err) {
		if (err) {
			return next(err);
		}
		res.status(200).send();
	});
};

//@access public
exports.register = (req, res, next) => {
	User.findOne({ email: req.body.email }, function (error, user) {
		if (user) {
			return res.status(400).send({
				message: `Email <${req.body.email}> already taken`,
			});
		} else {
			let user = new User(req.body);

			user.generateHashPassword(req.body.password);
			user.save(error => {
				if (error) {
					next(error);
				} else {
					//Auto-login
					req.login(user, function (err) {
						if (err) {
							next(err);
						}
						res.status(200).json({
							email: user.email,
							name: user.name,
						});
					});
				}
			});
		}
	});
};

exports.getUser = (req, res, next) => {
	if (!req.isAuthenticated()) {
		res.status(401);
		res.send();
	} else {
		res.status(200);
		res.json({
			email: req.user.email,
			name: req.user.name,
		});
	}
};
