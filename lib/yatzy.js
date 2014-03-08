/*
 * yatzy
 * https://github.com/sodper/yatzy-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

// Reduces to sum
var bySummation = function (previous, current) {
  return previous + current;
};

// Creates a value filter function
var byEquality =  function(value) {
  return function (x) {
    return x === value;
  };
};

exports.score = function(roll, category) {
  var dieMap = {
    'ones': 1,
    'twos': 2,
    'threes': 3,
    'fours': 4,
    'fives': 5
  };
  if (category in dieMap) {
    var filtered = roll.filter(byEquality(dieMap[category]));
    return filtered.reduce(bySummation, 0);
  } else if (category === 'chance') {
    return roll.reduce(bySummation, 0);
  }
  return 0;
};
