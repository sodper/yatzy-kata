/*
 * yatzy
 * https://github.com/sodper/yatzy-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

// Reduces to sum
var sum = function (previous, current) {
  return previous + current;
};

// Creates a value filter function
var equal =  function(value) {
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
    var filtered = roll.filter(equal(dieMap[category]));
    return filtered.reduce(sum, 0);
  } else if (category === 'chance') {
    return roll.reduce(sum, 0);
  } else if (category === 'yatzy') {
    return (roll.every(equal(roll[0]))) ? 50 : 0;
  } else if (category === 'pair') {
    var score = 0;
    for (var i = 0; i < roll.length; i++) {
      var filteredPair = roll.filter(equal(roll[i])).slice(0, 2);
      var reduced = filteredPair.reduce(sum, 0);
      score = (reduced > score) ? reduced : score;
    }
    return score;
  }
  return 0;
};
