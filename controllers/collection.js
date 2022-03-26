const Plant = require('../models/Plant');
const ErrorResponse = require('../utils/errorResponse');

exports.getAllPlants = (req, res, next) => {
	Plant.find()
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByPetFriendly = (req, res, next) => {
	const petFriendly = req.params.petFriendly;
	Plant.find({ petFriendly: { $eq: true } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByInterior = (req, res, next) => {
	const interiorExterior = req.params.interiorExterior;
	Plant.find({ interiorExterior: { $eq: 1 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByExterior = (req, res, next) => {
	const interiorExterior = req.params.interiorExterior;
	Plant.find({ interiorExterior: { $eq: 2 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIntExt = (req, res, next) => {
	const interiorExterior = req.params.interiorExterior;
	Plant.find({ interiorExterior: { $eq: 3 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByCareLevelEasy = (req, res, next) => {
	const careLevel = req.params.careLevel;
	Plant.find({ careLevel: { $eq: 1 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByCareLevelMedium = (req, res, next) => {
	const careLevel = req.params.careLevel;
	Plant.find({ careLevel: { $eq: 2 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByCareLevelHard = (req, res, next) => {
	const careLevel = req.params.careLevel;
	Plant.find({ careLevel: { $eq: 3 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationSummer1 = (req, res, next) => {
	const irrigationSummer = req.params.irrigationSummer;
	Plant.find({ irrigationSummer: { $eq: 1 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationSummer2 = (req, res, next) => {
	const irrigationSummer = req.params.irrigationSummer;
	Plant.find({ irrigationSummer: { $eq: 2 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationSummer3 = (req, res, next) => {
	const irrigationSummer = req.params.irrigationSummer;
	Plant.find({ irrigationSummer: { $eq: 3 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationSummer4 = (req, res, next) => {
	const irrigationSummer = req.params.irrigationSummer;
	Plant.find({ irrigationSummer: { $eq: 4 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationWinter1 = (req, res, next) => {
	const irrigationWinter = req.params.irrigationWinter;
	Plant.find({ irrigationWinter: { $eq: 1 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationWinter2 = (req, res, next) => {
	const irrigationWinter = req.params.irrigationWinter;
	Plant.find({ irrigationWinter: { $eq: 2 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getByIrrigationWinter3 = (req, res, next) => {
	const irrigationWinter = req.params.irrigationWinter;
	Plant.find({ irrigationWinter: { $eq: 3 } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.searchByName = (req, res, next) => {
	Plant.find({ commonName: { $regex: req.query.name, $options: 'i' } })
		.then(plants =>
			res.status(200).json({
				success: true,
				plants,
			})
		)
		.catch(error => next(error));
};

exports.getPlantById = (req, res, next) => {
	const id = req.params.id;
	Plant.findById(id)
		.then(plant =>
			res.status(200).json({
				success: true,
				plant,
			})
		)
		.catch(error => next(error));
};
