const express = require("express");
const router = express.Router();
const Pusher = require("pusher");
const mongoose = require("mongoose");
const Vote = require("../models/Vote");
const pusher = new Pusher({
  appId: "1072444",
  key: "a27a1c3ea2be7b8033b6",
  secret: "431edb1ca4df50cd59db",
  cluster: "ap2",
  encrypted: true,
});

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1,
  };
  new Vote() = pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os,
  });
  return res.json({ success: true, message: "Thankyou for voring" });
});

module.exports = router;
