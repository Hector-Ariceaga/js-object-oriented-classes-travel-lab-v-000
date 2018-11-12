class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    let chosenYear = new Date(year)
    chosenYear.getFullYear() - this.startDate.getFullYear()
  }
}
