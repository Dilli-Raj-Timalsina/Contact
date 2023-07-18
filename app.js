const express = require("express");
const app = express();
const onSubmitControl=require("./onSubmit")
//making req.body available:
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/api/contact",onSubmitControl );

module.exports = app;
