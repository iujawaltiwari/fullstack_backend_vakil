const express = require("express");
const {
    postOpeningDate,
    getOpeningDate,
    updateOpeningDate
} = require("../controllers/openingDate.controller");

const router = express.Router();

/* reviews */

router.post("/addopeningdate", postOpeningDate);
router.get("/getopeningdate/:id", getOpeningDate);
router.patch("/updateopeningdate/:id",updateOpeningDate);

module.exports = router;
