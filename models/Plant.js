const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
	scientificName: {
		type: String,
		required: [true],
	},
	commonName: {
		type: String,
		required: [true],
	},
	location: {
		type: String,
		required: [true],
	},
	interiorExterior: {
		type: Number,
		required: [true],
	},
	temperature: {
		type: String,
		required: [true],
	},
	careLevel: {
		type: Number,
		required: [true],
	},
	irrigation: {
		type: String,
		required: [true],
	},
	irrigationSummer: {
		type: Number,
		required: [true],
	},
	irrigationWinter: {
		type: Number,
		required: [true],
	},
	soil: {
		type: String,
		required: [true],
	},
	nickname: {
		type: String,
	},
	petFriendly: {
		type: Boolean,
		required: [true],
	},
	image: String,
});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
