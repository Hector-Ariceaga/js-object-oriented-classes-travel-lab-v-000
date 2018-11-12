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
  
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    let startingAvenue = eastWest.indexOf(this.beginningLocation.horizontal)
    let endingAvenue = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontalTravel = endingAvenue - startingAvenue
    let verticalTravel = this.endingLocation.vertical - this.beginningLocation.vertical
    return horizontalTravel + verticalTravel
  }
  
  estimatedTime(hours) {
    if (hours === "off peak hours") {
      return this.blocksTravelled() / 3
    }
    else {
      return this.blocksTravelled() / 2
    }
  }
}
