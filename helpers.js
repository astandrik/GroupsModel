// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var helpers = {};
helpers.getRandomInt = getRandomInt;

module.exports = helpers;
