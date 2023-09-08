const express = require("express");
const baseRouter = require("./router/base");
const addRouter = require("./router/add-data");
const app = express();
app.use(express.static("public"));
// app.set("views,path.join("__dir","NAME OF THE FILE")") use this line if we use another file name for ejs codes
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(baseRouter);
app.use(addRouter);
app.listen(3000);
