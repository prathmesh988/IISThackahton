import { createRequire } from "module";

import engine from "../engine.js";
const require = createRequire(import.meta.url);
const express = require("express");

const router = express.Router();

router.post("/createRoom", function (req, res, next) {
  // res.end();
  console.log("working fine");

  // const chat = mongoose.model("chat", chatShema);
  // const messagearray = req.body.history;
});

// module.exports = router; // ye export karna zaruri hai

export default router;
