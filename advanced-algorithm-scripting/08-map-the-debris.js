function orbitalPeriod(arr) {

  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var result = [];

  arr.forEach(function(item) {
    result.push({
      name: item.name,
      orbitalPeriod: getOrbitalPeriod(earthRadius, GM, item.avgAlt)
    });
  });

  return result;

  function getOrbitalPeriod (earthRadius, GM, avgAltitude) {
    var orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAltitude, 3) / GM);
    return Math.round(orbitalPeriod);
  }

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
