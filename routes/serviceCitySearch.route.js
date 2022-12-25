const express = require("express");
const {
    postServiceCitySearch,
    getServiceCitySearch,
    updateServiceCitySearch
} = require("../controllers/serviceCitySearch.controller");

const router = express.Router();

/* reviews */

router.post("/servicecitysearch/:_id", postServiceCitySearch );
router.get("/getservicecitysearch/:id", getServiceCitySearch);
router.patch("/updateservicecity/:_id", updateServiceCitySearch);

module.exports = router;
