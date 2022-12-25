const express = require("express");
const {
    postTen,
    getClient,
    updateClient,
    deleteClient
} = require("../controllers/client.controller");

const router = express.Router();

/* reviews */

router.post("/ten", postTen);
router.get("/getclient/:_id", getClient);
router.patch("/updateclient/:_id",updateClient);
router.delete("/deleteclient/:_id", deleteClient);

module.exports = router;
