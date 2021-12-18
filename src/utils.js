const applyCamelCase = (text) => text
  .split('-')
  .map((subText) => `${subText[0].toUpperCase()}${subText.slice(1)}`)
  .join('');

const transformListToText = (list) => list
  .slice()
  .sort()
  .join('-');

export {
  applyCamelCase,
  transformListToText,
};
