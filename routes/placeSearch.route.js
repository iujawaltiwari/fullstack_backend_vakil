const express = require("express");
const {
    postPlaceSearch,
    getPlaceSearch
} = require("../controllers/placeSearch.controller");

const router = express.Router();

/* reviews */

router.post("/placesearch", postPlaceSearch);
router.get("/getplacesearch", getPlaceSearch);

module.exports = router;
