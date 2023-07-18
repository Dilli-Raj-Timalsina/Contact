const express = require("express");
const app = express();

//making req.body available:
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/api/contact", userRouter);

module.exports = app;
