class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    Date.getFullYear(year) - Date.getFullYear(this.startDate)
  }
}
