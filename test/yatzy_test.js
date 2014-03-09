'use strict';

var yatzy = require('../lib/yatzy.js');

var testHelper = function (test, roll, category, score) {
  test.expect(1);
  test.equal(yatzy.score(roll, category), score, 'should be ' + score);
  test.done();
};

exports.chance = {
  '1,1,3,3,6 on chance': function(test) {
    testHelper(test, [1,1,3,3,6], 'chance', 14);
  },
  '4,5,5,6,1 on chance': function(test) {
    testHelper(test, [4,5,5,6,1], 'chance', 21);
  }
};

exports.yatzy = {
  '1,1,1,1,1 on yatzy': function(test) {
    testHelper(test, [1,1,1,1,1], 'yatzy', 50);
  },
  '1,1,1,2,1 on yatzy': function(test) {
    testHelper(test, [1,1,1,2,1], 'yatzy', 0);
  }
};

exports.die = {
  '5,6,5,5,2 on fives': function(test) {
    testHelper(test, [5,6,5,5,2], 'fives', 15);
  },
  '1,1,2,4,4 on fours': function(test) {
    testHelper(test, [1,1,2,4,4], 'fours', 8);
  },
  '1,3,2,3,4 on threes': function(test) {
    testHelper(test, [1,3,2,3,3], 'threes', 9);
  },
  '2,3,2,5,1 on twos': function(test) {
    testHelper(test, [2,3,2,5,1], 'twos', 4);
  },
  '3,3,3,4,5 on ones': function(test) {
    testHelper(test, [3,3,3,4,5], 'ones', 0);
  }
};

exports.pair = {
  '3,3,3,4,4 on pair': function(test) {
    testHelper(test, [3,3,3,4,4], 'pair', 8);
  },
  '1,1,6,2,6 on pair': function(test) {
    testHelper(test, [1,1,6,2,6], 'pair', 12);
  },
  '3,3,3,4,1 on pair': function(test) {
    testHelper(test, [3,3,3,4,1], 'pair', 0);
  },
  '3,3,3,3,1 on pair': function(test) {
    testHelper(test, [3,3,3,3,1], 'pair', 0);
  }
};

exports.twoPair = {
  '1,1,2,3,3 on two pairs': function(test) {
    testHelper(test, [1,1,2,3,3], 'two pairs', 8);
  },
  '1,1,2,3,4 on two pairs': function(test) {
    testHelper(test, [1,1,2,3,4], 'two pairs', 0);
  },
  '1,1,2,2,2 on two pairs': function(test) {
    testHelper(test, [1,1,2,2,2], 'two pairs', 0);
  }
};

exports.threeOfKind = {
  '3,3,3,4,5 on three of a kind': function(test) {
    testHelper(test, [3,3,3,4,5], 'three of a kind', 9);
  },
  '3,3,4,5,6 on three of a kind': function(test) {
    testHelper(test, [3,3,4,5,6], 'three of a kind', 0);
  },
  '3,3,3,3,1 on three of a kind': function(test) {
    testHelper(test, [3,3,3,3,1], 'three of a kind', 0);
  }
};

exports.fourOfKind = {
  '2,2,2,2,5 on four of a kind': function(test) {
    testHelper(test, [2,2,2,2,5], 'four of a kind', 8);
  },
  '2,2,2,5,5 on four of a kind': function(test) {
    testHelper(test, [2,2,2,5,5], 'four of a kind', 0);
  },
  '2,2,2,2,2 on four of a kind': function(test) {
    testHelper(test, [2,2,2,2,2], 'four of a kind', 0);
  }
};

exports.smallStraight = {
  '1,2,3,4,5 on small straight': function(test) {
    testHelper(test, [1,2,3,4,5], 'small straight', 15);
  },
  '1,2,3,4,6 on small straight': function(test) {
    testHelper(test, [1,2,3,4,6], 'small straight', 0);
  }
};

exports.largeStraight = {
  '2,3,4,5,6 on large straight': function(test) {
    testHelper(test, [2,3,4,5,6], 'large straight', 20);
  },
  '1,3,4,5,6 on large straight': function(test) {
    testHelper(test, [1,3,4,5,6], 'large straight', 0);
  }
};
