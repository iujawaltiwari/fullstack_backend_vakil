const express = require("express");
const {
    postMaps
} = require("../controllers/mapSchema.controller");

const router = express.Router();

/* reviews */

router.post("/maps", postMaps);


module.exports = router;
