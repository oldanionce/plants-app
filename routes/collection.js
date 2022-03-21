const express = require('express');

const router = express.Router();
const collectionControler = require('../controllers/collection');

router.get('/', collectionControler.getAllPlants);
router.get('/pet-friendly', collectionController.getByPetFriendly);
router.get('/care-level', collectionController.getByCareLevel);
router.get('/search', collectionControler.searchByTitle);
router.get('/:id', collectionControler.getPlantById);

module.exports = router;

// - pet friendly
// - Interior/exterior (?)
// - Care Level
