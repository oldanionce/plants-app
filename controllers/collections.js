const Plant = require("../models/Plant");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllPlants = (req, res, next) => {
  Plant.find()
    .then((plants) =>
      res.status(200).json({
        success: true,
        plants,
      })
    )
    .catch((error) => next(error));
};

exports.getByPetFriendly = (req, res, next) => {
  const petFriendly = req.params.petFriendly;
  Plant.find({ petFriendly: { $regex: petFriendly, $options: "i" } })
    .then((plants) =>
      res.status(200).json({
        success: true,
        plants,
      })
    )
    .catch((error) => next(error));
};
exports.getByCareLevel = (req, res, next) => {
  const careLevel = req.params.careLevel;
  Plant.find({ careLevel: { $regex: careLevel, $options: "i" } })
    .then((plants) =>
      res.status(200).json({
        success: true,
        plants,
      })
    )
    .catch((error) => next(error));
};

exports.searchByTitle = (req, res, next) => {
  //const title = req.params.title;
  Plant.find({ title: { $regex: req.query.title, $options: "i" } })
    .then((plants) =>
      res.status(200).json({
        success: true,
        plants,
      })
    )
    .catch((error) => next(error));
};

exports.getPlantById = (req, res, next) => {
  const id = req.params.id;
  Plant.findById(id)
    .then((plant) =>
      res.status(200).json({
        success: true,
        plant,
      })
    )
    .catch((error) => next(error));
};
