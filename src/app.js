const express = require("express");
const planetsRouter = require("./routes/planets/plants.router");
const { launchesRouter } = require("./routes/launches/launches.router");

const app = express();
app.use(express.json());
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

module.exports = app;
