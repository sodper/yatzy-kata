'use strict';

var yatzy = require('../lib/yatzy.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var testHelper = function (test, roll, category, score) {
  test.expect(1);
  test.equal(yatzy.score(roll, category), score, 'should be ' + score);
  test.done();
};

exports['yatzy-score'] = {
  '1,1,3,3,6 on chance': function(test) {
    testHelper(test, [1,1,3,3,6], 'chance', 14);
  },
  '4,5,5,6,1 on chance': function(test) {
    testHelper(test, [4,5,5,6,1], 'chance', 21);
  },
  '1,1,1,1,1 on yatzy': function(test) {
    testHelper(test, [1,1,1,1,1], 'yatzy', 50);
  },
  '1,1,1,2,1 on yatzy': function(test) {
    testHelper(test, [1,1,1,2,1], 'yatzy', 0);
  },
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
  },
};
