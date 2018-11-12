class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
    let startingAvenue = eastWest.indexOf(this.beginningLocation.horizontal)
    let endingAvenue = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontalTravel = endingAvenue - startingAvenue
    let verticalTravel = this.endingLocation.vertical - this.beginningLocation.vertical
    return horizontalTravel + verticalTravel
  }
  
  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}
