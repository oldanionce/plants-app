const express = require("express");

const router = express.Router();
const catalogController = require("../controllers/collection");

router.get("/", catalogController.getAllPlants);
// router.get("/categories/:category", collectionController.getByCategory);
// router.get("/search", catalogController.searchByTitle);
// router.get("/:id", catalogController.getMovieById);

module.exports = router;
