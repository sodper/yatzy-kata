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
  var result = roll.reduce(function(last, now, index, array) {
    var filtered = array.filter(equal(now));
    return (filtered.length === 2 && now * 2 > last.score) ? { die: now, score: now * 2 } : last;
  }, { die: 0, score: 0 });
  return result.score;
};

var twoPairsCommand = function(roll) {
  var result = roll.reduce(function(last, now, index, array) {
    var filtered = array.filter(equal(now));
    return (filtered.length === 2 && now !== last.die) ? { die: now, score: last.score + now * 2 } : last;
  }, { die: 0, score: 0 });
  return result.score;
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
  'two pairs': twoPairsCommand,
};

exports.score = function(roll, category) {
  return commands[category](roll);
};
