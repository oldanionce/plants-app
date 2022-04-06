const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const ObjectId = require('mongoose').Types.ObjectId;

//@access public
exports.getAllMyPlants = (req, res, next) => {
	User.findOne({ _id: req.user._id })
		.populate('myplants.plant')
		.then(user =>
			res.status(200).json({
				success: true,
				myplants: user.myplants,
			})
		)
		.catch(error => next(error));
};

//@access public
exports.addToMyPlants = (req, res, next) => {
	let user = req.user;
	let plantId = req.body._id;
	let nickname = req.body.nickname;

	const checkDuplicated = obj => obj.nickname.toLowerCase() === nickname.toLowerCase();

	if (!user.myplants.some(checkDuplicated)) {
		user.myplants.push({ nickname: nickname, plant: plantId });
	} else {
		throw 'Name is duplicated!';
	}

	user.save(function (error) {
		if (error) {
			next(error);
		} else {
			res.status(201).json({
				success: true,
				id: plantId,
			});
		}
	});
};

//@access private
exports.deleteMyPlant = async (req, res, next) => {
	let user = req.user;
	let nickname = req.params.nickname;

	const result = await User.findByIdAndUpdate(user._id, {
		$pull: {
			myplants: {
				nickname: nickname,
			},
		},
	});

	user.save(function (error) {
		if (error) {
			next(error);
		} else {
			res.status(202).json({
				success: true,
				message: `Delete plant with name: ${nickname}`,
			});
		}
	});
};
