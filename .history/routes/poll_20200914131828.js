const express = require("express");
const router = express.Router();
const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "1072444",
  key: "a27a1c3ea2be7b8033b6",
  secret: "431edb1ca4df50cd59db",
  cluster: "ap2",
  encrypted: true,
});

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {});

module.exports = router;
