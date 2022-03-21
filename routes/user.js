var express = require('express');
var router = express.Router();

const userController = require('../controllers/user');
const { isAllowed } = require('../middleware/authorization');

router.get('/', isAllowed, userController.getAllMyPlants);
router.post('/', isAllowed, userController.addToMyPlants);
router.delete('/:id', isAllowed, userController.deleteMyPlant);

module.exports = router;
