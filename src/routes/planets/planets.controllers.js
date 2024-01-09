const planets = require("../../models/planets.model.js");

function getAllPlants(res, res) {
  res.status(200).json(planets);
}

module.exports = {
  getAllPlants,
};
