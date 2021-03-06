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

// creates a reduction function for multiples of die
var getMultiples = function(multiple) {
  return function(last, now, index, array) {
    if(array.filter(equal(now)).length === multiple) {
        last.push(now);
    }
    return last;
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
  var pairs = roll.reduce(getMultiples(2), []);

  return (pairs.length === 4) ? pairs.reduce(sum, 0) : 0;
};

var ofKindCommand = function(multiple) {
  return function(roll) {
    var threes = roll.reduce(getMultiples(multiple), []);
    return threes.reduce(sum, 0);
  };
};

var straightCommand = function(type) {
  var limits = {
    'small': { start: 1, end: 5 },
    'large': { start: 2, end: 6 },
  };

  return function(roll) {
    for (var i = limits[type].start; i <= limits[type].end; i++) {
      if (roll.indexOf(i) === -1) {
        return 0;
      }
    }
    return roll.reduce(sum, 0);
  };
};

var fullHouseCommand = function(roll) {
  var distinct = roll.reduce(function(last, now) {
    if (!last.some(equal(now))) {
      last.push(now);
    }

    return last;
  }, []);

  if (distinct.length !== 2) {
    return 0;
  }

  for (var i = 0; i < distinct.length; i++) {
    var multiples = roll.filter(equal(distinct[i]), []);
    if (multiples.length < 2 || multiples.length > 3) {
      return 0;
    }
  }

  return roll.reduce(sum, 0);
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
  'three of a kind': ofKindCommand(3),
  'four of a kind': ofKindCommand(4),
  'small straight': straightCommand('small'),
  'large straight': straightCommand('large'),
  'full house': fullHouseCommand,
};

exports.score = function(roll, category) {
  return commands[category](roll);
};
