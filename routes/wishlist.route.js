const express = require("express");
const {
    postWishList,
    getWishList,
    updateWish,
    deleteWish
} = require("../controllers/wishlist.controller");

const router = express.Router();

/* reviews */

router.post("/wishlist", postWishList);
router.get("/getwishlist/:id", getWishList);
router.patch("/updatewish/:_id",updateWish);
router.delete("/deletewish/:_id", deleteWish);

module.exports = router;
