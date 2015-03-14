/*!
 * stringify-travis-url <https://travis.com/jonschlinkert/stringify-travis-url>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var travis = require('./');

describe('travis', function () {
  it('should generate a travis URL:', function () {
    travis('assemble', 'verb').should.equal('https://travis-ci.org/assemble/verb');
  });
});

describe('errors', function () {
  it('should throw an error when `user` not a string:', function () {
    (function () {
      travis();
    }).should.throw('stringify-travis-url expects `user` to be a string.');
  });
  it('should throw an error when `repo` not a string:', function () {
    (function () {
      travis('foo');
    }).should.throw('stringify-travis-url expects `repo` to be a string.');
  });
});
