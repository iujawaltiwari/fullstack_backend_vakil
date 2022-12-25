const express = require("express");
const {
    postExpSearch,
    getExpSearch
} = require("../controllers/expSearch.controller");

const router = express.Router();

/* reviews */

router.post("/expsearch", postExpSearch);
router.get("/getexpsearch", getExpSearch);

module.exports = router;
