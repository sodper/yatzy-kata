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

var scoreHelper = function (test, roll, category, score) {
  test.expect(1);
  test.equal(yatzy.score(roll, category), score, 'should be ' + score);
  test.done();
};

exports['yatzy-score'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  '5,6,5,5,2 on fives': function(test) {
    scoreHelper(test, [5,6,5,5,2], 'fives', 15);
  },
  '1,1,2,4,4 on fours': function(test) {
    scoreHelper(test, [1,1,2,4,4], 'fours', 8);
  },
};
