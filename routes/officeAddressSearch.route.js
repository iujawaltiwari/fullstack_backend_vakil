const express = require("express");
const {
    postOfficeAddressSearch,
    getOfficeAddressSearch
} = require("../controllers/officeAddressSearch.controller");

const router = express.Router();

/* reviews */

router.post("/officeaddresssearch", postOfficeAddressSearch);
router.get("/getofficeaddsearch", getOfficeAddressSearch);


module.exports = router;
