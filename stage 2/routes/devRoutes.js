const express = require('express');
const router = express.Router();
const { 
    createDev,
    getDeveloper,
    updateDeveloper,
    deleteDeveloper
} = require("../controllers/devController")


router.post("/", createDev)
router.get("/", getDeveloper)
router.put("/", updateDeveloper)
router.delete("/", deleteDeveloper)

module.exports = router