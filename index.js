
var PassThrough = require('readable-stream/passthrough')
var inherits = require('util').inherits

inherits(Multi, PassThrough)

module.exports = Multi

function Multi(options) {
  if (!(this instanceof Multi)) return new Multi(options)

  PassThrough.call(this, options)

  this._readableState.objectMode =
  this._writableState.objectMode = true

  this._sources = []

  this.on('pipe', this._onpipe)
}

Multi.prototype.pull = function (stream) {
  var onsourceend = this._onsourceend.bind(this, stream)
  return stream
  .on('error', onsourceend)
  .on('end', onsourceend)
  .on('close', onsourceend)
  .pipe(this, {
    end: false
  })
}

Multi.prototype._onpipe = function (stream) {
  this._sources.push(stream)
}

Multi.prototype._onsourceend = function (stream) {
  var sources = this._sources
  var index = sources.indexOf(stream)
  if (!~index) return // already removed or something
  sources.splice(index, 1)
  if (!sources.length) this.end()
}
