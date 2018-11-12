class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    console.log(this.startDate.getFullYear())
    year - this.startDate.getFullYear()
  }
}
