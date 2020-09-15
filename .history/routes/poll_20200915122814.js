const express = require("express");
const router = express.Router();
const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "1072444",
  key: "a27a1c3ea2be7b8033b6",
  secret: "431edb1ca4df50cd59db",
  cluster: "ap2",
  encrypted: false,
});
console.log(pusher);

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {
  pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os,
  });
  return res.json({ success: true, message: "Thankyou for voring" });
});

module.exports = router;
