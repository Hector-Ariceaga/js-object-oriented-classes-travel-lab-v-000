let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

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
   function horizontalInteger(avenue) {
     eastWest.indexOf(avenue)
   }
   
   horizontalTravel = this.horizontalInteger(this.endingLocation.horizontal) - this.horizontalInteger(this.beginningLocation)
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
