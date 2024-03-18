import chatShema from "./models/chat.js";
import router1 from "./routes/router1.js";
const require = createRequire(import.meta.url);
const express = require("express");
// const router = require("./routes/router1.js");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/chatdb");

const app = express();

const port = 5000;
app.use(router1);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
