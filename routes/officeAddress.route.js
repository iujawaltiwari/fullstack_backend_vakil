const express = require("express");
const {
    postOfficeAdrs,
    getOfficeAdrs,
    updateOfficeAdrs
} = require("../controllers/officeAddress.controller");

const router = express.Router();

/* reviews */

router.post("/officeaddress", postOfficeAdrs);
router.get("/getofficeaddress/:id", getOfficeAdrs);
router.patch("/updateofficeaddress/:id",updateOfficeAdrs);

module.exports = router;
