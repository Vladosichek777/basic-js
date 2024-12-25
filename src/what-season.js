const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  let season;
  try {
    switch (true) {
      case month <= 1 || month === 11:
        season = "winter";
        break;
      case month >= 2 && month <= 4:
        season = "spring";
        break;
      case month >= 5 && month <= 7:
        season = "summer";
        break;
      case month >= 8 && month <= 10:
        season = "autumn";
        break;
      default:
        season = "Invalid date";
    }
  } catch (error) {
    console.log("Invalid date!");
  }

  return season;
}

module.exports = {
  getSeason,
};
