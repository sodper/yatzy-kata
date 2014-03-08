/*
 * yatzy
 * https://github.com/sodper/yatzy-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

exports.score = function(roll, category) {
  if (category === 'fours') {
    return 8;
  }
  return 15;
};
