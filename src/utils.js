const applyCamelCase = (text) => text
  .split('-')
  .map((subText) => `${subText[0].toUpperCase()}${subText.slice(1)}`)
  .join('');

const transformListToText = (list) => list
  .slice()
  .sort()
  .join('-');

const normalizePhoneNumber = (number) => number.replace(/\D/g, '').slice(-10);

export {
  applyCamelCase,
  transformListToText,
  normalizePhoneNumber,
};
