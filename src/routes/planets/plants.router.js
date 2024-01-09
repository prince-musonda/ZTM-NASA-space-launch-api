const express = require("express");
const { getAllPlants } = require("./planets.controllers");

const planetsRouter = express.Router();
planetsRouter.get("/planets", getAllPlants);

module.exports = planetsRouter;
