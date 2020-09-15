const express = require("express");
const router = express.Router();
const Pusher = require("pusher");

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {});

module.exports = router;
