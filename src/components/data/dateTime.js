const appendLeadZero = (val) => (Number(val) > 9 ? val : `0${val}`);

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'April',
  'May', 'June', 'July', 'Aug',
  'Sept', 'Oct', 'Nov', 'Dec'
];

/**
 * recieve a date value and return true if the date is today. Otherwise, false.
 * @param {String} date
 * @returns {Boolean}
 */

/**
 * recieve a date-time string and return date
 * @param {String} dateString
 * @returns {String} Format: Tues, 24 Sept 2019
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (date.toString() === 'Invalid Date') return null;

  return `${MONTHS[date.getMonth()]} ${appendLeadZero(date.getDate())},  ${date.getFullYear()}`;
};

export const formatSimpleDate = (date) => {
  const d = new Date(date);
  if (d.toString() === 'Invalid Date') return null;
  return `${appendLeadZero(d.getDate())}/${appendLeadZero(d.getMonth() + 1)}/${d.getFullYear()}`;
};
