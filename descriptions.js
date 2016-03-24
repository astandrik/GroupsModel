var config = require('./config.js');
var helpers = require('./helpers.js');

/* initial conditions */
var A = {
  name: "A",
  soc: {
    people: config.people1,
    food: config.food1
  },
  bio: {
    food: config.bioFood1
  }
}

var B = {
  name: "B",
  soc: {
    people: config.people2,
    food: config.food2
  },
  bio: {
    food: config.bioFood2
  }
}


var events = {
  2134: function(a,b) {
    a.bio.food += 1000;
    b.bio.food += 1000;
  },
  1243: function(a,b) {
    var aGathered = a.soc.people;
    var bGathered = b.soc.people;
    var bKilled =  helpers.getRandomInt(0, a.soc.people / 2);
    var aKilled =  helpers.getRandomInt(0, b.soc.people / 2);
    a.soc.people = a.soc.people - aKilled;
    b.soc.people = b.soc.people - bKilled;
    a.soc.food += aGathered - bGathered;
    b.soc.food += bGathered - aGathered;
  },
  3214: function(a,b) {
    var aGathered = a.soc.people;
    a.soc.food += aGathered;
    a.bio.food = a.bio.food - aGathered;
  },
  1432: function(a,b) {
    var bGathered = b.soc.people;
    b.soc.food += bGathered;
    b.bio.food = b.bio.food - bGathered;
  },
  1234: function(a,b) {
    a.soc.food = a.soc.food - a.soc.people;
    a.soc.food = a.soc.food - a.soc.people;
    a.bio.food += 1000;
    b.bio.food += 1000;
  },
  3412: function(a,b) {
    var bGathered = b.soc.people;
    b.soc.food += bGathered;
    b.bio.food = b.bio.food - bGathered;
    var aGathered = a.soc.people;
    a.soc.food += aGathered;
    a.bio.food = a.bio.food - aGathered;
  }
}

function print(kernel) {
  var str = '\tsoc: \n\t\t people:' + kernel.soc.people + '\n\t\t food:' + kernel.soc.food + '\n\t bio \n\t\t food:' + kernel.bio.food + '\n\n';
  return str;
}

function  checkConditions(kernel) {
    if(kernel.soc.food < 0 || kernel.soc.people < 0) {
      var message = kernel.name + " is dead";
      throw message;
    }
  }

module.exports = {kernels: {A: A,B: B, print: print, checkConditions: checkConditions}, events: events}
