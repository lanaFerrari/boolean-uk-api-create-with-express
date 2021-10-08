const express = require("express");

const { createPet } = require("./controller");

const router = express.Router();

router.post("/pets", createPet);

module.exports = router;