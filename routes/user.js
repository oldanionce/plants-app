var express = require("express");
var router = express.Router();

const { isAllowed } = require("../middleware/authorization");

module.exports = router;
