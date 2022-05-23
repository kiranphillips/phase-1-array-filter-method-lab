function findMatching(drivers, name) {
    return drivers.filter (driver => driver.toLowerCase() === name.toLowerCase())
  }
  function fuzzyMatch(drivers, letters){
      return drivers.filter(driver => driver.indexOf(letters) === 0)
    }
  function matchName(drivers, match){
      return drivers.filter(driver => driver.name === match)
  }
