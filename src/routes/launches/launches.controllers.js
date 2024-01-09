const {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchWithId,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  launches = getAllLaunches();
  return res.status(200).json(launches);
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  // validate data from user
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate
  ) {
    return res
      .status(400)
      .json({ error: "missing required launch information" });
  }
  // convert date and ensure that it is valid
  launch.launchDate = new Date(launch);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: "invalid date" });
  }

  // if everything is okay, then save new launch
  addNewLaunch(launch);
  res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = req.params.id;
  // if launch doesn't exist
  if (existsLaunchWithId(launchId)) {
    return res.status(400).json({ error: "launch not found" });
  }
  // if launch exists
  const aboutedLaunch = abortLaunchWithId(launchId);
  return res.status(200).json(aboutedLaunch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
