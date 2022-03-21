const express = require("express");

const router = express.Router();
const collectionControler = require("../controllers/collections");

router.get("/", collectionControler.getAllPlants);
router.get("/petFriendly", collectionController.getByPetFriendly);
router.get("/CareLevel", collectionController.getByCareLevel);
router.get("/search", collectionControler.searchByTitle);
router.get("/:id", collectionControler.getPlantById);

module.exports = router;

// - pet friendly
// - Interior/exterior (?)
// - Care Level
