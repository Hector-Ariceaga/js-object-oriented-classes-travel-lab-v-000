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
    console.log(this.beginningLocation)
    console.log(this.endingLocation)
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    let startingAvenue = eastWest.filter(avenue => avenue === this.beginningLocation.horizontal)
    console.log(indexOf(startingAvenue)
    
    let horizontalTravel = this.endingLocation.horizontal - this.endingLocation.horizontal
  }
}
