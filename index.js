class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    console.log(year)
    new Date.getFullYear(year) - Date.getFullYear(this.startDate)
  }
}
