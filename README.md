
# multi-stream

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Create an object stream from multiple sources.

```js
var Mutli = require('multi-stream')
var multi = Multi()

multi
.pull(stream1)
.pull(stream2)
.pipe(proces.stdout)
```

[gitter-image]: https://badges.gitter.im/stream-utils/multi-stream.png
[gitter-url]: https://gitter.im/stream-utils/multi-stream
[npm-image]: https://img.shields.io/npm/v/multi-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/multi-stream
[github-tag]: http://img.shields.io/github/tag/stream-utils/multi-stream.svg?style=flat-square
[github-url]: https://github.com/stream-utils/multi-stream/tags
[travis-image]: https://img.shields.io/travis/stream-utils/multi-stream.svg?style=flat-square
[travis-url]: https://travis-ci.org/stream-utils/multi-stream
[coveralls-image]: https://img.shields.io/coveralls/stream-utils/multi-stream.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/stream-utils/multi-stream
[david-image]: http://img.shields.io/david/stream-utils/multi-stream.svg?style=flat-square
[david-url]: https://david-dm.org/stream-utils/multi-stream
[license-image]: http://img.shields.io/npm/l/multi-stream.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/multi-stream.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/multi-stream
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
