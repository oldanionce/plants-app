const express = require('express');

const router = express.Router();
const collectionController = require('../controllers/collection');

router.get('/', collectionController.getAllPlants);
router.get('/pet-friendly', collectionController.getByPetFriendly);
router.get('/care-level', collectionController.getByCareLevel);
router.get('/search', collectionController.searchByTitle);
router.get('/:id', collectionController.getPlantById);

module.exports = router;

// - pet friendly
// - Interior/exterior (?)
// - Care Level
