class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    new Date(year)
    year.getFullYear - this.startDate.getFullYear()
  }
}
