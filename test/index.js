/**
 * Imports
 */

var isBoolean = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should return true for booleans', function (t) {
  t.ok(isBoolean(true))
  t.ok(isBoolean(false))
  t.end()
})

test('should return false for non booleans', function (t) {
  t.notOk(isBoolean(0))
  t.notOk(isBoolean(''))
  t.end()
})
