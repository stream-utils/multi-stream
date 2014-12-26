
var PassThrough = require('readable-stream/passthrough')
var toArray = require('stream-to-array')
var assert = require('assert')

var Multi = require('..')

it('should merge streams', function () {
  var stream1 = new PassThrough({
    objectMode: true
  })
  var stream2 = new PassThrough({
    objectMode: true
  })
  var stream3 = new PassThrough({
    objectMode: true
  })

  stream1.write(1)
  stream1.end(2)
  stream2.write(3)
  stream2.end(4)
  stream3.write(5)
  stream3.end(6)

  var multi = Multi()
  multi.pull(stream1)
  multi.pull(stream2)
  multi.pull(stream3)

  return toArray(multi).then(function (arr) {
    for (var i = 1; i <= 6; i++) {
      assert(~arr.indexOf(i))
    }
  })
})

it('should still work if one stream errors', function () {
  var stream1 = new PassThrough({
    objectMode: true
  })
  var stream2 = new PassThrough({
    objectMode: true
  })
  var stream3 = new PassThrough({
    objectMode: true
  })

  stream1.write(1)
  stream1.end(2)
  stream2.write(3)
  stream2.end(4)
  stream3.write(5)
  setTimeout(function () {
    stream3.emit('error', new Error('boom'))
  }, 10)

  var multi = Multi()
  multi.pull(stream1)
  multi.pull(stream2)
  multi.pull(stream3)

  return toArray(multi).then(function (arr) {
    for (var i = 1; i <= 5; i++) {
      assert(~arr.indexOf(i))
    }
  })
})
