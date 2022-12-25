const express = require("express");
const {
    postGallery,
    getGallery,
    updateGallery,
    deleteGallery
} = require("../controllers/gallery.controller");

const router = express.Router();

/* reviews */

router.post("/gallery", postGallery);
router.get("/getgallery/:_id", getGallery);
router.patch("/updategallery/:_id", updateGallery);
router.delete("/deletegallery/:_id", deleteGallery);

module.exports = router;
