// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
     if (driver['revenue'] >= revenue) {
      return driver;
    };
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  newDrivers = [];
  drivers.filter(function(driver) {
     if (driver['revenue'] >= revenue) {
      newDrivers.push(driver['name']);
    };
  });
  return newDrivers;
};

function exactMatch(drivers, match) {
  // const matchedDrivers = []
  return drivers.map(driver) {
    for (const key in driver) {
      if (key == match) {
      return driver;
      };
    };
  };
};
