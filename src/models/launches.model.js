const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  destination: "kepler 123 planet 7",
  mission: "man reign",
  customer: ["ZTM", "NASA"],
  rocket: "falcon 2",
  launchDate: new Date("December 27,2030"),
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launches, {
      flightNumber: latestFlightNumber,
      customers: ["SpaceX", "BlueStar"],
      success: true,
      upcoming: true,
    })
  );
}

function abortLaunchWithId(launchId) {
  const aboutedLaunch = launches.get(launchId);
  aboutedLaunch.upcoming = false;
  abortLaunchWithId.success = false;
  return aboutedLaunch;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchWithId,
};
