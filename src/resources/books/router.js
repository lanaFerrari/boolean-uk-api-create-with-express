const express = require("express");

const { createBook } = require("./controller");

const router = express.Router();

router.post("/", createBook);

module.exports = router;

