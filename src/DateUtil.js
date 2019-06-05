export default class DateUtility {
  constructor(date) {
    this.date = date;
  }

  weekDay() {
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return weekDays[this.date.getDay()];
  }

  day() {
    return this.date.getDate();
  }

  month() {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[this.date.getMonth()];
  }

  year() {
    return this.date.getFullYear();
  }

  fullDate() {
    return `${this.weekDay()}, 
                ${this.day()} 
                ${this.month()} 
                ${this.year()}`;
  }
}
