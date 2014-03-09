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
