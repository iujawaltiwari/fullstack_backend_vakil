const express = require("express");
const {
    postCourtSearch,
    getCourtSearch
} = require("../controllers/courtSearch.controller");

const router = express.Router();

/* reviews */

router.post("/courtsearch", postCourtSearch);
router.get("/getcourtsearch", getCourtSearch);

module.exports = router;
