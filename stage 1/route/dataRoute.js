const express = require('express');
const router = express.Router();
const {getData} = require("../controller/dataController")


router.get('/', getData);

module.exports = router;