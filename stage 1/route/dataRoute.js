const express = require('express');
const router = express.Router();
const {getData} = require("../controller/dataController")


router.get('/data', getData);

module.exports = router;