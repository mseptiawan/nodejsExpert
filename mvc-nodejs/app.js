// const express = require("express");
import express from "express";
import * as path from "path";

import { routerUser } from "./src/routes/User.js";
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//url handling

app.use("/user", routerUser);

app.listen(port, () => {
  console.log("server berjalan");
});
