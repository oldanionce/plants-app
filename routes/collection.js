const express = require('express');

const router = express.Router();
const collectionController = require('../controllers/collection');

router.get('/', collectionController.getAllPlants);
router.get('/pet-friendly', collectionController.getByPetFriendly);

router.get('/interior', collectionController.getByInterior);
router.get('/exterior', collectionController.getByExterior);
router.get('/intext', collectionController.getByIntExt);

router.get('/care-level-easy', collectionController.getByCareLevelEasy);
router.get('/care-level-medium', collectionController.getByCareLevelMedium);
router.get('/care-level-hard', collectionController.getByCareLevelHard);
router.get('/irrigation-summer-1', collectionController.getByIrrigationSummer1);
router.get('/irrigation-summer-2', collectionController.getByIrrigationSummer2);
router.get('/irrigation-summer-3', collectionController.getByIrrigationSummer3);
router.get('/irrigation-summer-4', collectionController.getByIrrigationSummer4);
router.get('/irrigation-winter-1', collectionController.getByIrrigationWinter1);
router.get('/irrigation-winter-2', collectionController.getByIrrigationWinter2);
router.get('/irrigation-winter-3', collectionController.getByIrrigationWinter3);

router.get('/search', collectionController.searchByName);
router.get('/:id', collectionController.getPlantById);

module.exports = router;
