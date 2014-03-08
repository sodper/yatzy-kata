/*
 * yatzy
 * https://github.com/sodper/yatzy-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

// reduces to sum
var sum = function (previous, current) {
  return previous + current;
};

// creates a value filter function
var equal =  function(value) {
  return function (x) {
    return x === value;
  };
};


/*
  commands
*/

var dieCommand = function(die) {
  return function(roll) {
    var filtered = roll.filter(equal(die));
    return filtered.reduce(sum, 0);
  };
};

var chanceCommand = function(roll) {
  return roll.reduce(sum, 0);
};

var yatzyCommand = function(roll) {
  return (roll.every(equal(roll[0]))) ? 50 : 0;
};

var pairCommand = function(roll) {
  var score = 0;
  for (var i = 0; i < roll.length; i++) {
    var filteredPair = roll.filter(equal(roll[i])).slice(0, 2);
    var reduced = filteredPair.reduce(sum, 0);
    score = (reduced > score) ? reduced : score;
  }
  return score;
};

// command object
var commands = {
  'ones': dieCommand(1),
  'twos': dieCommand(2),
  'threes': dieCommand(3),
  'fours': dieCommand(4),
  'fives': dieCommand(5),
  'chance': chanceCommand,
  'yatzy': yatzyCommand,
  'pair': pairCommand,
};

exports.score = function(roll, category) {
  return commands[category](roll);
};
