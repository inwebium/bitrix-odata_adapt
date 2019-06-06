(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/emitter-component/index.js":
/*!*************************************************!*\
  !*** ./node_modules/emitter-component/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/stream/index.js":
/*!**************************************!*\
  !*** ./node_modules/stream/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Emitter = __webpack_require__(/*! emitter */ "./node_modules/emitter-component/index.js");

function Stream() {
  Emitter.call(this);
}
Stream.prototype = new Emitter();
module.exports = Stream;
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (!this.hasListeners('error')) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.off('data', ondata);
    dest.off('drain', ondrain);

    source.off('end', onend);
    source.off('close', onclose);

    source.off('error', onerror);
    dest.off('error', onerror);

    source.off('end', cleanup);
    source.off('close', cleanup);

    dest.off('end', cleanup);
    dest.off('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('end', cleanup);
  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
}


/***/ }),

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
/*!***********************************************************!*\
  !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/timers/index.js":
/*!**************************************!*\
  !*** ./node_modules/timers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


exports.every = function(str) {
  return new Every(str);
};

/*
  Time map
*/

var time = {
  millisecond: 1,
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 86400000
};

for (var key in time) {
  if (key === 'millisecond') {
    time.ms = time[key];
  } else {
    time[key.charAt(0)] = time[key];
  }
  time[key + 's'] = time[key];
}


/*
  Every constructor
*/

function Every(str) {
  this.count = 0;
  var m = parse(str);
  if (m) {
    this.time = Number(m[0]) * time[m[1]];
    this.type = m[1];
  }
}

Every.prototype.do = function(cb) {
  if (this.time) {
    this.interval = setInterval(callback, this.time);
  }

  var that = this;
  function callback() {
    that.count++;
    cb.call(that);
  }
  return this;
};

Every.prototype.stop = function() {
  if (this.interval) {
    clearInterval(this.interval);
    delete this.interval;
  }
  return this;
};


/*
  Convert string to milliseconds

    ms, millisecond(s)?
    s, second(s)?
    m, minute(s)?
    h, hour(s)?
    d, day(s)?
*/
var reg = /^\s*(\d+(?:\.\d+)?)\s*([a-z]+)\s*$/;

function parse(str) {
  var m = str.match(reg);
  if (m && time[m[2]]) {
    return m.slice(1);
  }
  return null;
}


/***/ }),

/***/ "./node_modules/xml2js/lib/bom.js":
/*!****************************************!*\
  !*** ./node_modules/xml2js/lib/bom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  exports.stripBOM = function(str) {
    if (str[0] === '\uFEFF') {
      return str.substring(1);
    } else {
      return str;
    }
  };

}).call(this);


/***/ }),

/***/ "./node_modules/xml2js/lib/builder.js":
/*!********************************************!*\
  !*** ./node_modules/xml2js/lib/builder.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA,
    hasProp = {}.hasOwnProperty;

  builder = __webpack_require__(/*! xmlbuilder */ "./node_modules/xmlbuilder/lib/index.js");

  defaults = __webpack_require__(/*! ./defaults */ "./node_modules/xml2js/lib/defaults.js").defaults;

  requiresCDATA = function(entry) {
    return typeof entry === "string" && (entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0);
  };

  wrapCDATA = function(entry) {
    return "<![CDATA[" + (escapeCDATA(entry)) + "]]>";
  };

  escapeCDATA = function(entry) {
    return entry.replace(']]>', ']]]]><![CDATA[>');
  };

  exports.Builder = (function() {
    function Builder(opts) {
      var key, ref, value;
      this.options = {};
      ref = defaults["0.2"];
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
    }

    Builder.prototype.buildObject = function(rootObj) {
      var attrkey, charkey, render, rootElement, rootName;
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      if ((Object.keys(rootObj).length === 1) && (this.options.rootName === defaults['0.2'].rootName)) {
        rootName = Object.keys(rootObj)[0];
        rootObj = rootObj[rootName];
      } else {
        rootName = this.options.rootName;
      }
      render = (function(_this) {
        return function(element, obj) {
          var attr, child, entry, index, key, value;
          if (typeof obj !== 'object') {
            if (_this.options.cdata && requiresCDATA(obj)) {
              element.raw(wrapCDATA(obj));
            } else {
              element.txt(obj);
            }
          } else if (Array.isArray(obj)) {
            for (index in obj) {
              if (!hasProp.call(obj, index)) continue;
              child = obj[index];
              for (key in child) {
                entry = child[key];
                element = render(element.ele(key), entry).up();
              }
            }
          } else {
            for (key in obj) {
              if (!hasProp.call(obj, key)) continue;
              child = obj[key];
              if (key === attrkey) {
                if (typeof child === "object") {
                  for (attr in child) {
                    value = child[attr];
                    element = element.att(attr, value);
                  }
                }
              } else if (key === charkey) {
                if (_this.options.cdata && requiresCDATA(child)) {
                  element = element.raw(wrapCDATA(child));
                } else {
                  element = element.txt(child);
                }
              } else if (Array.isArray(child)) {
                for (index in child) {
                  if (!hasProp.call(child, index)) continue;
                  entry = child[index];
                  if (typeof entry === 'string') {
                    if (_this.options.cdata && requiresCDATA(entry)) {
                      element = element.ele(key).raw(wrapCDATA(entry)).up();
                    } else {
                      element = element.ele(key, entry).up();
                    }
                  } else {
                    element = render(element.ele(key), entry).up();
                  }
                }
              } else if (typeof child === "object") {
                element = render(element.ele(key), child).up();
              } else {
                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
                  element = element.ele(key).raw(wrapCDATA(child)).up();
                } else {
                  if (child == null) {
                    child = '';
                  }
                  element = element.ele(key, child.toString()).up();
                }
              }
            }
          }
          return element;
        };
      })(this);
      rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
        headless: this.options.headless,
        allowSurrogateChars: this.options.allowSurrogateChars
      });
      return render(rootElement, rootObj).end(this.options.renderOpts);
    };

    return Builder;

  })();

}).call(this);


/***/ }),

/***/ "./node_modules/xml2js/lib/defaults.js":
/*!*********************************************!*\
  !*** ./node_modules/xml2js/lib/defaults.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  exports.defaults = {
    "0.1": {
      explicitCharkey: false,
      trim: true,
      normalize: true,
      normalizeTags: false,
      attrkey: "@",
      charkey: "#",
      explicitArray: false,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: false,
      validator: null,
      xmlns: false,
      explicitChildren: false,
      childkey: '@@',
      charsAsChildren: false,
      includeWhiteChars: false,
      async: false,
      strict: true,
      attrNameProcessors: null,
      attrValueProcessors: null,
      tagNameProcessors: null,
      valueProcessors: null,
      emptyTag: ''
    },
    "0.2": {
      explicitCharkey: false,
      trim: false,
      normalize: false,
      normalizeTags: false,
      attrkey: "$",
      charkey: "_",
      explicitArray: true,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: true,
      validator: null,
      xmlns: false,
      explicitChildren: false,
      preserveChildrenOrder: false,
      childkey: '$$',
      charsAsChildren: false,
      includeWhiteChars: false,
      async: false,
      strict: true,
      attrNameProcessors: null,
      attrValueProcessors: null,
      tagNameProcessors: null,
      valueProcessors: null,
      rootName: 'root',
      xmldec: {
        'version': '1.0',
        'encoding': 'UTF-8',
        'standalone': true
      },
      doctype: null,
      renderOpts: {
        'pretty': true,
        'indent': '  ',
        'newline': '\n'
      },
      headless: false,
      chunkSize: 10000,
      emptyTag: '',
      cdata: false
    }
  };

}).call(this);


/***/ }),

/***/ "./node_modules/xml2js/lib/parser.js":
/*!*******************************************!*\
  !*** ./node_modules/xml2js/lib/parser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  sax = __webpack_require__(/*! sax */ "./node_modules/xml2js/node_modules/sax/lib/sax.js");

  events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

  bom = __webpack_require__(/*! ./bom */ "./node_modules/xml2js/lib/bom.js");

  processors = __webpack_require__(/*! ./processors */ "./node_modules/xml2js/lib/processors.js");

  setImmediate = __webpack_require__(/*! timers */ "./node_modules/timers/index.js").setImmediate;

  defaults = __webpack_require__(/*! ./defaults */ "./node_modules/xml2js/lib/defaults.js").defaults;

  isEmpty = function(thing) {
    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
  };

  processItem = function(processors, item, key) {
    var i, len, process;
    for (i = 0, len = processors.length; i < len; i++) {
      process = processors[i];
      item = process(item, key);
    }
    return item;
  };

  exports.Parser = (function(superClass) {
    extend(Parser, superClass);

    function Parser(opts) {
      this.parseString = bind(this.parseString, this);
      this.reset = bind(this.reset, this);
      this.assignOrPush = bind(this.assignOrPush, this);
      this.processAsync = bind(this.processAsync, this);
      var key, ref, value;
      if (!(this instanceof exports.Parser)) {
        return new exports.Parser(opts);
      }
      this.options = {};
      ref = defaults["0.2"];
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
      if (this.options.xmlns) {
        this.options.xmlnskey = this.options.attrkey + "ns";
      }
      if (this.options.normalizeTags) {
        if (!this.options.tagNameProcessors) {
          this.options.tagNameProcessors = [];
        }
        this.options.tagNameProcessors.unshift(processors.normalize);
      }
      this.reset();
    }

    Parser.prototype.processAsync = function() {
      var chunk, err;
      try {
        if (this.remaining.length <= this.options.chunkSize) {
          chunk = this.remaining;
          this.remaining = '';
          this.saxParser = this.saxParser.write(chunk);
          return this.saxParser.close();
        } else {
          chunk = this.remaining.substr(0, this.options.chunkSize);
          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
          this.saxParser = this.saxParser.write(chunk);
          return setImmediate(this.processAsync);
        }
      } catch (error1) {
        err = error1;
        if (!this.saxParser.errThrown) {
          this.saxParser.errThrown = true;
          return this.emit(err);
        }
      }
    };

    Parser.prototype.assignOrPush = function(obj, key, newValue) {
      if (!(key in obj)) {
        if (!this.options.explicitArray) {
          return obj[key] = newValue;
        } else {
          return obj[key] = [newValue];
        }
      } else {
        if (!(obj[key] instanceof Array)) {
          obj[key] = [obj[key]];
        }
        return obj[key].push(newValue);
      }
    };

    Parser.prototype.reset = function() {
      var attrkey, charkey, ontext, stack;
      this.removeAllListeners();
      this.saxParser = sax.parser(this.options.strict, {
        trim: false,
        normalize: false,
        xmlns: this.options.xmlns
      });
      this.saxParser.errThrown = false;
      this.saxParser.onerror = (function(_this) {
        return function(error) {
          _this.saxParser.resume();
          if (!_this.saxParser.errThrown) {
            _this.saxParser.errThrown = true;
            return _this.emit("error", error);
          }
        };
      })(this);
      this.saxParser.onend = (function(_this) {
        return function() {
          if (!_this.saxParser.ended) {
            _this.saxParser.ended = true;
            return _this.emit("end", _this.resultObject);
          }
        };
      })(this);
      this.saxParser.ended = false;
      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
      this.resultObject = null;
      stack = [];
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      this.saxParser.onopentag = (function(_this) {
        return function(node) {
          var key, newValue, obj, processedKey, ref;
          obj = {};
          obj[charkey] = "";
          if (!_this.options.ignoreAttrs) {
            ref = node.attributes;
            for (key in ref) {
              if (!hasProp.call(ref, key)) continue;
              if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                obj[attrkey] = {};
              }
              newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
              processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
              if (_this.options.mergeAttrs) {
                _this.assignOrPush(obj, processedKey, newValue);
              } else {
                obj[attrkey][processedKey] = newValue;
              }
            }
          }
          obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
          if (_this.options.xmlns) {
            obj[_this.options.xmlnskey] = {
              uri: node.uri,
              local: node.local
            };
          }
          return stack.push(obj);
        };
      })(this);
      this.saxParser.onclosetag = (function(_this) {
        return function() {
          var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
          obj = stack.pop();
          nodeName = obj["#name"];
          if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
            delete obj["#name"];
          }
          if (obj.cdata === true) {
            cdata = obj.cdata;
            delete obj.cdata;
          }
          s = stack[stack.length - 1];
          if (obj[charkey].match(/^\s*$/) && !cdata) {
            emptyStr = obj[charkey];
            delete obj[charkey];
          } else {
            if (_this.options.trim) {
              obj[charkey] = obj[charkey].trim();
            }
            if (_this.options.normalize) {
              obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
            }
            obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
              obj = obj[charkey];
            }
          }
          if (isEmpty(obj)) {
            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
          }
          if (_this.options.validator != null) {
            xpath = "/" + ((function() {
              var i, len, results;
              results = [];
              for (i = 0, len = stack.length; i < len; i++) {
                node = stack[i];
                results.push(node["#name"]);
              }
              return results;
            })()).concat(nodeName).join("/");
            (function() {
              var err;
              try {
                return obj = _this.options.validator(xpath, s && s[nodeName], obj);
              } catch (error1) {
                err = error1;
                return _this.emit("error", err);
              }
            })();
          }
          if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
            if (!_this.options.preserveChildrenOrder) {
              node = {};
              if (_this.options.attrkey in obj) {
                node[_this.options.attrkey] = obj[_this.options.attrkey];
                delete obj[_this.options.attrkey];
              }
              if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                node[_this.options.charkey] = obj[_this.options.charkey];
                delete obj[_this.options.charkey];
              }
              if (Object.getOwnPropertyNames(obj).length > 0) {
                node[_this.options.childkey] = obj;
              }
              obj = node;
            } else if (s) {
              s[_this.options.childkey] = s[_this.options.childkey] || [];
              objClone = {};
              for (key in obj) {
                if (!hasProp.call(obj, key)) continue;
                objClone[key] = obj[key];
              }
              s[_this.options.childkey].push(objClone);
              delete obj["#name"];
              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                obj = obj[charkey];
              }
            }
          }
          if (stack.length > 0) {
            return _this.assignOrPush(s, nodeName, obj);
          } else {
            if (_this.options.explicitRoot) {
              old = obj;
              obj = {};
              obj[nodeName] = old;
            }
            _this.resultObject = obj;
            _this.saxParser.ended = true;
            return _this.emit("end", _this.resultObject);
          }
        };
      })(this);
      ontext = (function(_this) {
        return function(text) {
          var charChild, s;
          s = stack[stack.length - 1];
          if (s) {
            s[charkey] += text;
            if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
              s[_this.options.childkey] = s[_this.options.childkey] || [];
              charChild = {
                '#name': '__text__'
              };
              charChild[charkey] = text;
              if (_this.options.normalize) {
                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
              }
              s[_this.options.childkey].push(charChild);
            }
            return s;
          }
        };
      })(this);
      this.saxParser.ontext = ontext;
      return this.saxParser.oncdata = (function(_this) {
        return function(text) {
          var s;
          s = ontext(text);
          if (s) {
            return s.cdata = true;
          }
        };
      })(this);
    };

    Parser.prototype.parseString = function(str, cb) {
      var err;
      if ((cb != null) && typeof cb === "function") {
        this.on("end", function(result) {
          this.reset();
          return cb(null, result);
        });
        this.on("error", function(err) {
          this.reset();
          return cb(err);
        });
      }
      try {
        str = str.toString();
        if (str.trim() === '') {
          this.emit("end", null);
          return true;
        }
        str = bom.stripBOM(str);
        if (this.options.async) {
          this.remaining = str;
          setImmediate(this.processAsync);
          return this.saxParser;
        }
        return this.saxParser.write(str).close();
      } catch (error1) {
        err = error1;
        if (!(this.saxParser.errThrown || this.saxParser.ended)) {
          this.emit('error', err);
          return this.saxParser.errThrown = true;
        } else if (this.saxParser.ended) {
          throw err;
        }
      }
    };

    return Parser;

  })(events.EventEmitter);

  exports.parseString = function(str, a, b) {
    var cb, options, parser;
    if (b != null) {
      if (typeof b === 'function') {
        cb = b;
      }
      if (typeof a === 'object') {
        options = a;
      }
    } else {
      if (typeof a === 'function') {
        cb = a;
      }
      options = {};
    }
    parser = new exports.Parser(options);
    return parser.parseString(str, cb);
  };

}).call(this);


/***/ }),

/***/ "./node_modules/xml2js/lib/processors.js":
/*!***********************************************!*\
  !*** ./node_modules/xml2js/lib/processors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var prefixMatch;

  prefixMatch = new RegExp(/(?!xmlns)^.*:/);

  exports.normalize = function(str) {
    return str.toLowerCase();
  };

  exports.firstCharLowerCase = function(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  exports.stripPrefix = function(str) {
    return str.replace(prefixMatch, '');
  };

  exports.parseNumbers = function(str) {
    if (!isNaN(str)) {
      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
    }
    return str;
  };

  exports.parseBooleans = function(str) {
    if (/^(?:true|false)$/i.test(str)) {
      str = str.toLowerCase() === 'true';
    }
    return str;
  };

}).call(this);


/***/ }),

/***/ "./node_modules/xml2js/lib/xml2js.js":
/*!*******************************************!*\
  !*** ./node_modules/xml2js/lib/xml2js.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var builder, defaults, parser, processors,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  defaults = __webpack_require__(/*! ./defaults */ "./node_modules/xml2js/lib/defaults.js");

  builder = __webpack_require__(/*! ./builder */ "./node_modules/xml2js/lib/builder.js");

  parser = __webpack_require__(/*! ./parser */ "./node_modules/xml2js/lib/parser.js");

  processors = __webpack_require__(/*! ./processors */ "./node_modules/xml2js/lib/processors.js");

  exports.defaults = defaults.defaults;

  exports.processors = processors;

  exports.ValidationError = (function(superClass) {
    extend(ValidationError, superClass);

    function ValidationError(message) {
      this.message = message;
    }

    return ValidationError;

  })(Error);

  exports.Builder = builder.Builder;

  exports.Parser = parser.Parser;

  exports.parseString = parser.parseString;

}).call(this);


/***/ }),

/***/ "./node_modules/xml2js/node_modules/sax/lib/sax.js":
/*!*********************************************************!*\
  !*** ./node_modules/xml2js/node_modules/sax/lib/sax.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (sax) { // wrapper for non-node envs
  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
  sax.SAXParser = SAXParser
  sax.SAXStream = SAXStream
  sax.createStream = createStream

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024

  var buffers = [
    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
    'procInstName', 'procInstBody', 'entity', 'attribName',
    'attribValue', 'cdata', 'script'
  ]

  sax.EVENTS = [
    'text',
    'processinginstruction',
    'sgmldeclaration',
    'doctype',
    'comment',
    'opentagstart',
    'attribute',
    'opentag',
    'closetag',
    'opencdata',
    'cdata',
    'closecdata',
    'error',
    'end',
    'ready',
    'script',
    'opennamespace',
    'closenamespace'
  ]

  function SAXParser (strict, opt) {
    if (!(this instanceof SAXParser)) {
      return new SAXParser(strict, opt)
    }

    var parser = this
    clearBuffers(parser)
    parser.q = parser.c = ''
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
    parser.opt = opt || {}
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
    parser.tags = []
    parser.closed = parser.closedRoot = parser.sawRoot = false
    parser.tag = parser.error = null
    parser.strict = !!strict
    parser.noscript = !!(strict || parser.opt.noscript)
    parser.state = S.BEGIN
    parser.strictEntities = parser.opt.strictEntities
    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
    parser.attribList = []

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) {
      parser.ns = Object.create(rootNS)
    }

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0
    }
    emit(parser, 'onready')
  }

  if (!Object.create) {
    Object.create = function (o) {
      function F () {}
      F.prototype = o
      var newf = new F()
      return newf
    }
  }

  if (!Object.keys) {
    Object.keys = function (o) {
      var a = []
      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
      return a
    }
  }

  function checkBufferLength (parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    var maxActual = 0
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case 'textNode':
            closeText(parser)
            break

          case 'cdata':
            emitNode(parser, 'oncdata', parser.cdata)
            parser.cdata = ''
            break

          case 'script':
            emitNode(parser, 'onscript', parser.script)
            parser.script = ''
            break

          default:
            error(parser, 'Max buffer length exceeded: ' + buffers[i])
        }
      }
      maxActual = Math.max(maxActual, len)
    }
    // schedule the next check for the earliest possible buffer overrun.
    var m = sax.MAX_BUFFER_LENGTH - maxActual
    parser.bufferCheckPosition = m + parser.position
  }

  function clearBuffers (parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = ''
    }
  }

  function flushBuffers (parser) {
    closeText(parser)
    if (parser.cdata !== '') {
      emitNode(parser, 'oncdata', parser.cdata)
      parser.cdata = ''
    }
    if (parser.script !== '') {
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }
  }

  SAXParser.prototype = {
    end: function () { end(this) },
    write: write,
    resume: function () { this.error = null; return this },
    close: function () { return this.write(null) },
    flush: function () { flushBuffers(this) }
  }

  var Stream
  try {
    Stream = __webpack_require__(/*! stream */ "./node_modules/stream/index.js").Stream
  } catch (ex) {
    Stream = function () {}
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== 'error' && ev !== 'end'
  })

  function createStream (strict, opt) {
    return new SAXStream(strict, opt)
  }

  function SAXStream (strict, opt) {
    if (!(this instanceof SAXStream)) {
      return new SAXStream(strict, opt)
    }

    Stream.apply(this)

    this._parser = new SAXParser(strict, opt)
    this.writable = true
    this.readable = true

    var me = this

    this._parser.onend = function () {
      me.emit('end')
    }

    this._parser.onerror = function (er) {
      me.emit('error', er)

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null
    }

    this._decoder = null

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, 'on' + ev, {
        get: function () {
          return me._parser['on' + ev]
        },
        set: function (h) {
          if (!h) {
            me.removeAllListeners(ev)
            me._parser['on' + ev] = h
            return h
          }
          me.on(ev, h)
        },
        enumerable: true,
        configurable: false
      })
    })
  }

  SAXStream.prototype = Object.create(Stream.prototype, {
    constructor: {
      value: SAXStream
    }
  })

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = __webpack_require__(/*! string_decoder */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder
        this._decoder = new SD('utf8')
      }
      data = this._decoder.write(data)
    }

    this._parser.write(data.toString())
    this.emit('data', data)
    return true
  }

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) {
      this.write(chunk)
    }
    this._parser.end()
    return true
  }

  SAXStream.prototype.on = function (ev, handler) {
    var me = this
    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser['on' + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
        args.splice(0, 0, ev)
        me.emit.apply(me, args)
      }
    }

    return Stream.prototype.on.call(me, ev, handler)
  }

  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  var CDATA = '[CDATA['
  var DOCTYPE = 'DOCTYPE'
  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  function isWhitespace (c) {
    return c === ' ' || c === '\n' || c === '\r' || c === '\t'
  }

  function isQuote (c) {
    return c === '"' || c === '\''
  }

  function isAttribEnd (c) {
    return c === '>' || isWhitespace(c)
  }

  function isMatch (regex, c) {
    return regex.test(c)
  }

  function notMatch (regex, c) {
    return !isMatch(regex, c)
  }

  var S = 0
  sax.STATE = {
    BEGIN: S++, // leading byte order mark or whitespace
    BEGIN_WHITESPACE: S++, // leading whitespace
    TEXT: S++, // general stuff
    TEXT_ENTITY: S++, // &amp and such.
    OPEN_WAKA: S++, // <
    SGML_DECL: S++, // <!BLARG
    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
    DOCTYPE: S++, // <!DOCTYPE
    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
    COMMENT_STARTING: S++, // <!-
    COMMENT: S++, // <!--
    COMMENT_ENDING: S++, // <!-- blah -
    COMMENT_ENDED: S++, // <!-- blah --
    CDATA: S++, // <![CDATA[ something
    CDATA_ENDING: S++, // ]
    CDATA_ENDING_2: S++, // ]]
    PROC_INST: S++, // <?hi
    PROC_INST_BODY: S++, // <?hi there
    PROC_INST_ENDING: S++, // <?hi "there" ?
    OPEN_TAG: S++, // <strong
    OPEN_TAG_SLASH: S++, // <strong /
    ATTRIB: S++, // <a
    ATTRIB_NAME: S++, // <a foo
    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
    ATTRIB_VALUE: S++, // <a foo=
    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
    CLOSE_TAG: S++, // </a
    CLOSE_TAG_SAW_WHITE: S++, // </a   >
    SCRIPT: S++, // <script> ...
    SCRIPT_ENDING: S++ // <script> ... <
  }

  sax.XML_ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'"
  }

  sax.ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'",
    'AElig': 198,
    'Aacute': 193,
    'Acirc': 194,
    'Agrave': 192,
    'Aring': 197,
    'Atilde': 195,
    'Auml': 196,
    'Ccedil': 199,
    'ETH': 208,
    'Eacute': 201,
    'Ecirc': 202,
    'Egrave': 200,
    'Euml': 203,
    'Iacute': 205,
    'Icirc': 206,
    'Igrave': 204,
    'Iuml': 207,
    'Ntilde': 209,
    'Oacute': 211,
    'Ocirc': 212,
    'Ograve': 210,
    'Oslash': 216,
    'Otilde': 213,
    'Ouml': 214,
    'THORN': 222,
    'Uacute': 218,
    'Ucirc': 219,
    'Ugrave': 217,
    'Uuml': 220,
    'Yacute': 221,
    'aacute': 225,
    'acirc': 226,
    'aelig': 230,
    'agrave': 224,
    'aring': 229,
    'atilde': 227,
    'auml': 228,
    'ccedil': 231,
    'eacute': 233,
    'ecirc': 234,
    'egrave': 232,
    'eth': 240,
    'euml': 235,
    'iacute': 237,
    'icirc': 238,
    'igrave': 236,
    'iuml': 239,
    'ntilde': 241,
    'oacute': 243,
    'ocirc': 244,
    'ograve': 242,
    'oslash': 248,
    'otilde': 245,
    'ouml': 246,
    'szlig': 223,
    'thorn': 254,
    'uacute': 250,
    'ucirc': 251,
    'ugrave': 249,
    'uuml': 252,
    'yacute': 253,
    'yuml': 255,
    'copy': 169,
    'reg': 174,
    'nbsp': 160,
    'iexcl': 161,
    'cent': 162,
    'pound': 163,
    'curren': 164,
    'yen': 165,
    'brvbar': 166,
    'sect': 167,
    'uml': 168,
    'ordf': 170,
    'laquo': 171,
    'not': 172,
    'shy': 173,
    'macr': 175,
    'deg': 176,
    'plusmn': 177,
    'sup1': 185,
    'sup2': 178,
    'sup3': 179,
    'acute': 180,
    'micro': 181,
    'para': 182,
    'middot': 183,
    'cedil': 184,
    'ordm': 186,
    'raquo': 187,
    'frac14': 188,
    'frac12': 189,
    'frac34': 190,
    'iquest': 191,
    'times': 215,
    'divide': 247,
    'OElig': 338,
    'oelig': 339,
    'Scaron': 352,
    'scaron': 353,
    'Yuml': 376,
    'fnof': 402,
    'circ': 710,
    'tilde': 732,
    'Alpha': 913,
    'Beta': 914,
    'Gamma': 915,
    'Delta': 916,
    'Epsilon': 917,
    'Zeta': 918,
    'Eta': 919,
    'Theta': 920,
    'Iota': 921,
    'Kappa': 922,
    'Lambda': 923,
    'Mu': 924,
    'Nu': 925,
    'Xi': 926,
    'Omicron': 927,
    'Pi': 928,
    'Rho': 929,
    'Sigma': 931,
    'Tau': 932,
    'Upsilon': 933,
    'Phi': 934,
    'Chi': 935,
    'Psi': 936,
    'Omega': 937,
    'alpha': 945,
    'beta': 946,
    'gamma': 947,
    'delta': 948,
    'epsilon': 949,
    'zeta': 950,
    'eta': 951,
    'theta': 952,
    'iota': 953,
    'kappa': 954,
    'lambda': 955,
    'mu': 956,
    'nu': 957,
    'xi': 958,
    'omicron': 959,
    'pi': 960,
    'rho': 961,
    'sigmaf': 962,
    'sigma': 963,
    'tau': 964,
    'upsilon': 965,
    'phi': 966,
    'chi': 967,
    'psi': 968,
    'omega': 969,
    'thetasym': 977,
    'upsih': 978,
    'piv': 982,
    'ensp': 8194,
    'emsp': 8195,
    'thinsp': 8201,
    'zwnj': 8204,
    'zwj': 8205,
    'lrm': 8206,
    'rlm': 8207,
    'ndash': 8211,
    'mdash': 8212,
    'lsquo': 8216,
    'rsquo': 8217,
    'sbquo': 8218,
    'ldquo': 8220,
    'rdquo': 8221,
    'bdquo': 8222,
    'dagger': 8224,
    'Dagger': 8225,
    'bull': 8226,
    'hellip': 8230,
    'permil': 8240,
    'prime': 8242,
    'Prime': 8243,
    'lsaquo': 8249,
    'rsaquo': 8250,
    'oline': 8254,
    'frasl': 8260,
    'euro': 8364,
    'image': 8465,
    'weierp': 8472,
    'real': 8476,
    'trade': 8482,
    'alefsym': 8501,
    'larr': 8592,
    'uarr': 8593,
    'rarr': 8594,
    'darr': 8595,
    'harr': 8596,
    'crarr': 8629,
    'lArr': 8656,
    'uArr': 8657,
    'rArr': 8658,
    'dArr': 8659,
    'hArr': 8660,
    'forall': 8704,
    'part': 8706,
    'exist': 8707,
    'empty': 8709,
    'nabla': 8711,
    'isin': 8712,
    'notin': 8713,
    'ni': 8715,
    'prod': 8719,
    'sum': 8721,
    'minus': 8722,
    'lowast': 8727,
    'radic': 8730,
    'prop': 8733,
    'infin': 8734,
    'ang': 8736,
    'and': 8743,
    'or': 8744,
    'cap': 8745,
    'cup': 8746,
    'int': 8747,
    'there4': 8756,
    'sim': 8764,
    'cong': 8773,
    'asymp': 8776,
    'ne': 8800,
    'equiv': 8801,
    'le': 8804,
    'ge': 8805,
    'sub': 8834,
    'sup': 8835,
    'nsub': 8836,
    'sube': 8838,
    'supe': 8839,
    'oplus': 8853,
    'otimes': 8855,
    'perp': 8869,
    'sdot': 8901,
    'lceil': 8968,
    'rceil': 8969,
    'lfloor': 8970,
    'rfloor': 8971,
    'lang': 9001,
    'rang': 9002,
    'loz': 9674,
    'spades': 9824,
    'clubs': 9827,
    'hearts': 9829,
    'diams': 9830
  }

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
  })

  for (var s in sax.STATE) {
    sax.STATE[sax.STATE[s]] = s
  }

  // shorthand
  S = sax.STATE

  function emit (parser, event, data) {
    parser[event] && parser[event](data)
  }

  function emitNode (parser, nodeType, data) {
    if (parser.textNode) closeText(parser)
    emit(parser, nodeType, data)
  }

  function closeText (parser) {
    parser.textNode = textopts(parser.opt, parser.textNode)
    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
    parser.textNode = ''
  }

  function textopts (opt, text) {
    if (opt.trim) text = text.trim()
    if (opt.normalize) text = text.replace(/\s+/g, ' ')
    return text
  }

  function error (parser, er) {
    closeText(parser)
    if (parser.trackPosition) {
      er += '\nLine: ' + parser.line +
        '\nColumn: ' + parser.column +
        '\nChar: ' + parser.c
    }
    er = new Error(er)
    parser.error = er
    emit(parser, 'onerror', er)
    return parser
  }

  function end (parser) {
    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
    if ((parser.state !== S.BEGIN) &&
      (parser.state !== S.BEGIN_WHITESPACE) &&
      (parser.state !== S.TEXT)) {
      error(parser, 'Unexpected end')
    }
    closeText(parser)
    parser.c = ''
    parser.closed = true
    emit(parser, 'onend')
    SAXParser.call(parser, parser.strict, parser.opt)
    return parser
  }

  function strictFail (parser, message) {
    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
      throw new Error('bad call to strictFail')
    }
    if (parser.strict) {
      error(parser, message)
    }
  }

  function newTag (parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
    var parent = parser.tags[parser.tags.length - 1] || parser
    var tag = parser.tag = { name: parser.tagName, attributes: {} }

    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    if (parser.opt.xmlns) {
      tag.ns = parent.ns
    }
    parser.attribList.length = 0
    emitNode(parser, 'onopentagstart', tag)
  }

  function qname (name, attribute) {
    var i = name.indexOf(':')
    var qualName = i < 0 ? [ '', name ] : name.split(':')
    var prefix = qualName[0]
    var local = qualName[1]

    // <x "xmlns"="http://foo">
    if (attribute && name === 'xmlns') {
      prefix = 'xmlns'
      local = ''
    }

    return { prefix: prefix, local: local }
  }

  function attrib (parser) {
    if (!parser.strict) {
      parser.attribName = parser.attribName[parser.looseCase]()
    }

    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      parser.attribName = parser.attribValue = ''
      return
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true)
      var prefix = qn.prefix
      var local = qn.local

      if (prefix === 'xmlns') {
        // namespace binding attribute. push the binding into scope
        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser,
            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser,
            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else {
          var tag = parser.tag
          var parent = parser.tags[parser.tags.length - 1] || parser
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns)
          }
          tag.ns[local] = parser.attribValue
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect. preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue])
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue
      emitNode(parser, 'onattribute', {
        name: parser.attribName,
        value: parser.attribValue
      })
    }

    parser.attribName = parser.attribValue = ''
  }

  function openTag (parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag

      // add namespace info to tag
      var qn = qname(parser.tagName)
      tag.prefix = qn.prefix
      tag.local = qn.local
      tag.uri = tag.ns[qn.prefix] || ''

      if (tag.prefix && !tag.uri) {
        strictFail(parser, 'Unbound namespace prefix: ' +
          JSON.stringify(parser.tagName))
        tag.uri = qn.prefix
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, 'onopennamespace', {
            prefix: p,
            uri: tag.ns[p]
          })
        })
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i]
        var name = nv[0]
        var value = nv[1]
        var qualName = qname(name, true)
        var prefix = qualName.prefix
        var local = qualName.local
        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
        var a = {
          name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri
        }

        // if there's any attributes with an undefined namespace,
        // then fail on them now.
        if (prefix && prefix !== 'xmlns' && !uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(prefix))
          a.uri = prefix
        }
        parser.tag.attributes[name] = a
        emitNode(parser, 'onattribute', a)
      }
      parser.attribList.length = 0
    }

    parser.tag.isSelfClosing = !!selfClosing

    // process the tag
    parser.sawRoot = true
    parser.tags.push(parser.tag)
    emitNode(parser, 'onopentag', parser.tag)
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
        parser.state = S.SCRIPT
      } else {
        parser.state = S.TEXT
      }
      parser.tag = null
      parser.tagName = ''
    }
    parser.attribName = parser.attribValue = ''
    parser.attribList.length = 0
  }

  function closeTag (parser) {
    if (!parser.tagName) {
      strictFail(parser, 'Weird empty close tag.')
      parser.textNode += '</>'
      parser.state = S.TEXT
      return
    }

    if (parser.script) {
      if (parser.tagName !== 'script') {
        parser.script += '</' + parser.tagName + '>'
        parser.tagName = ''
        parser.state = S.SCRIPT
        return
      }
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length
    var tagName = parser.tagName
    if (!parser.strict) {
      tagName = tagName[parser.looseCase]()
    }
    var closeTo = tagName
    while (t--) {
      var close = parser.tags[t]
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, 'Unexpected close tag')
      } else {
        break
      }
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
      parser.textNode += '</' + parser.tagName + '>'
      parser.state = S.TEXT
      return
    }
    parser.tagName = tagName
    var s = parser.tags.length
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop()
      parser.tagName = parser.tag.name
      emitNode(parser, 'onclosetag', parser.tagName)

      var x = {}
      for (var i in tag.ns) {
        x[i] = tag.ns[i]
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p]
          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
        })
      }
    }
    if (t === 0) parser.closedRoot = true
    parser.tagName = parser.attribValue = parser.attribName = ''
    parser.attribList.length = 0
    parser.state = S.TEXT
  }

  function parseEntity (parser) {
    var entity = parser.entity
    var entityLC = entity.toLowerCase()
    var num
    var numStr = ''

    if (parser.ENTITIES[entity]) {
      return parser.ENTITIES[entity]
    }
    if (parser.ENTITIES[entityLC]) {
      return parser.ENTITIES[entityLC]
    }
    entity = entityLC
    if (entity.charAt(0) === '#') {
      if (entity.charAt(1) === 'x') {
        entity = entity.slice(2)
        num = parseInt(entity, 16)
        numStr = num.toString(16)
      } else {
        entity = entity.slice(1)
        num = parseInt(entity, 10)
        numStr = num.toString(10)
      }
    }
    entity = entity.replace(/^0+/, '')
    if (isNaN(num) || numStr.toLowerCase() !== entity) {
      strictFail(parser, 'Invalid character entity')
      return '&' + parser.entity + ';'
    }

    return String.fromCodePoint(num)
  }

  function beginWhiteSpace (parser, c) {
    if (c === '<') {
      parser.state = S.OPEN_WAKA
      parser.startTagPosition = parser.position
    } else if (!isWhitespace(c)) {
      // have to process this as a text node.
      // weird, but happens.
      strictFail(parser, 'Non-whitespace before first tag.')
      parser.textNode = c
      parser.state = S.TEXT
    }
  }

  function charAt (chunk, i) {
    var result = ''
    if (i < chunk.length) {
      result = chunk.charAt(i)
    }
    return result
  }

  function write (chunk) {
    var parser = this
    if (this.error) {
      throw this.error
    }
    if (parser.closed) {
      return error(parser,
        'Cannot write after close. Assign an onready handler.')
    }
    if (chunk === null) {
      return end(parser)
    }
    if (typeof chunk === 'object') {
      chunk = chunk.toString()
    }
    var i = 0
    var c = ''
    while (true) {
      c = charAt(chunk, i++)
      parser.c = c

      if (!c) {
        break
      }

      if (parser.trackPosition) {
        parser.position++
        if (c === '\n') {
          parser.line++
          parser.column = 0
        } else {
          parser.column++
        }
      }

      switch (parser.state) {
        case S.BEGIN:
          parser.state = S.BEGIN_WHITESPACE
          if (c === '\uFEFF') {
            continue
          }
          beginWhiteSpace(parser, c)
          continue

        case S.BEGIN_WHITESPACE:
          beginWhiteSpace(parser, c)
          continue

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1
            while (c && c !== '<' && c !== '&') {
              c = charAt(chunk, i++)
              if (c && parser.trackPosition) {
                parser.position++
                if (c === '\n') {
                  parser.line++
                  parser.column = 0
                } else {
                  parser.column++
                }
              }
            }
            parser.textNode += chunk.substring(starti, i - 1)
          }
          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
            parser.state = S.OPEN_WAKA
            parser.startTagPosition = parser.position
          } else {
            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
              strictFail(parser, 'Text data outside of root node.')
            }
            if (c === '&') {
              parser.state = S.TEXT_ENTITY
            } else {
              parser.textNode += c
            }
          }
          continue

        case S.SCRIPT:
          // only non-strict
          if (c === '<') {
            parser.state = S.SCRIPT_ENDING
          } else {
            parser.script += c
          }
          continue

        case S.SCRIPT_ENDING:
          if (c === '/') {
            parser.state = S.CLOSE_TAG
          } else {
            parser.script += '<' + c
            parser.state = S.SCRIPT
          }
          continue

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === '!') {
            parser.state = S.SGML_DECL
            parser.sgmlDecl = ''
          } else if (isWhitespace(c)) {
            // wait for it...
          } else if (isMatch(nameStart, c)) {
            parser.state = S.OPEN_TAG
            parser.tagName = c
          } else if (c === '/') {
            parser.state = S.CLOSE_TAG
            parser.tagName = ''
          } else if (c === '?') {
            parser.state = S.PROC_INST
            parser.procInstName = parser.procInstBody = ''
          } else {
            strictFail(parser, 'Unencoded <')
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition
              c = new Array(pad).join(' ') + c
            }
            parser.textNode += '<' + c
            parser.state = S.TEXT
          }
          continue

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, 'onopencdata')
            parser.state = S.CDATA
            parser.sgmlDecl = ''
            parser.cdata = ''
          } else if (parser.sgmlDecl + c === '--') {
            parser.state = S.COMMENT
            parser.comment = ''
            parser.sgmlDecl = ''
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE
            if (parser.doctype || parser.sawRoot) {
              strictFail(parser,
                'Inappropriately located doctype declaration')
            }
            parser.doctype = ''
            parser.sgmlDecl = ''
          } else if (c === '>') {
            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
            parser.sgmlDecl = ''
            parser.state = S.TEXT
          } else if (isQuote(c)) {
            parser.state = S.SGML_DECL_QUOTED
            parser.sgmlDecl += c
          } else {
            parser.sgmlDecl += c
          }
          continue

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL
            parser.q = ''
          }
          parser.sgmlDecl += c
          continue

        case S.DOCTYPE:
          if (c === '>') {
            parser.state = S.TEXT
            emitNode(parser, 'ondoctype', parser.doctype)
            parser.doctype = true // just remember that we saw it.
          } else {
            parser.doctype += c
            if (c === '[') {
              parser.state = S.DOCTYPE_DTD
            } else if (isQuote(c)) {
              parser.state = S.DOCTYPE_QUOTED
              parser.q = c
            }
          }
          continue

        case S.DOCTYPE_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.q = ''
            parser.state = S.DOCTYPE
          }
          continue

        case S.DOCTYPE_DTD:
          parser.doctype += c
          if (c === ']') {
            parser.state = S.DOCTYPE
          } else if (isQuote(c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED
            parser.q = c
          }
          continue

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD
            parser.q = ''
          }
          continue

        case S.COMMENT:
          if (c === '-') {
            parser.state = S.COMMENT_ENDING
          } else {
            parser.comment += c
          }
          continue

        case S.COMMENT_ENDING:
          if (c === '-') {
            parser.state = S.COMMENT_ENDED
            parser.comment = textopts(parser.opt, parser.comment)
            if (parser.comment) {
              emitNode(parser, 'oncomment', parser.comment)
            }
            parser.comment = ''
          } else {
            parser.comment += '-' + c
            parser.state = S.COMMENT
          }
          continue

        case S.COMMENT_ENDED:
          if (c !== '>') {
            strictFail(parser, 'Malformed comment')
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += '--' + c
            parser.state = S.COMMENT
          } else {
            parser.state = S.TEXT
          }
          continue

        case S.CDATA:
          if (c === ']') {
            parser.state = S.CDATA_ENDING
          } else {
            parser.cdata += c
          }
          continue

        case S.CDATA_ENDING:
          if (c === ']') {
            parser.state = S.CDATA_ENDING_2
          } else {
            parser.cdata += ']' + c
            parser.state = S.CDATA
          }
          continue

        case S.CDATA_ENDING_2:
          if (c === '>') {
            if (parser.cdata) {
              emitNode(parser, 'oncdata', parser.cdata)
            }
            emitNode(parser, 'onclosecdata')
            parser.cdata = ''
            parser.state = S.TEXT
          } else if (c === ']') {
            parser.cdata += ']'
          } else {
            parser.cdata += ']]' + c
            parser.state = S.CDATA
          }
          continue

        case S.PROC_INST:
          if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else if (isWhitespace(c)) {
            parser.state = S.PROC_INST_BODY
          } else {
            parser.procInstName += c
          }
          continue

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && isWhitespace(c)) {
            continue
          } else if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else {
            parser.procInstBody += c
          }
          continue

        case S.PROC_INST_ENDING:
          if (c === '>') {
            emitNode(parser, 'onprocessinginstruction', {
              name: parser.procInstName,
              body: parser.procInstBody
            })
            parser.procInstName = parser.procInstBody = ''
            parser.state = S.TEXT
          } else {
            parser.procInstBody += '?' + c
            parser.state = S.PROC_INST_BODY
          }
          continue

        case S.OPEN_TAG:
          if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else {
            newTag(parser)
            if (c === '>') {
              openTag(parser)
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, 'Invalid character in tag name')
              }
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.OPEN_TAG_SLASH:
          if (c === '>') {
            openTag(parser, true)
            closeTag(parser)
          } else {
            strictFail(parser, 'Forward-slash in opening tag not followed by >')
            parser.state = S.ATTRIB
          }
          continue

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (isWhitespace(c)) {
            continue
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (c === '>') {
            strictFail(parser, 'Attribute without value')
            parser.attribValue = parser.attribName
            attrib(parser)
            openTag(parser)
          } else if (isWhitespace(c)) {
            parser.state = S.ATTRIB_NAME_SAW_WHITE
          } else if (isMatch(nameBody, c)) {
            parser.attribName += c
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (isWhitespace(c)) {
            continue
          } else {
            strictFail(parser, 'Attribute without value')
            parser.tag.attributes[parser.attribName] = ''
            parser.attribValue = ''
            emitNode(parser, 'onattribute', {
              name: parser.attribName,
              value: ''
            })
            parser.attribName = ''
            if (c === '>') {
              openTag(parser)
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c
              parser.state = S.ATTRIB_NAME
            } else {
              strictFail(parser, 'Invalid attribute name')
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.ATTRIB_VALUE:
          if (isWhitespace(c)) {
            continue
          } else if (isQuote(c)) {
            parser.q = c
            parser.state = S.ATTRIB_VALUE_QUOTED
          } else {
            strictFail(parser, 'Unquoted attribute value')
            parser.state = S.ATTRIB_VALUE_UNQUOTED
            parser.attribValue = c
          }
          continue

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_Q
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          parser.q = ''
          parser.state = S.ATTRIB_VALUE_CLOSED
          continue

        case S.ATTRIB_VALUE_CLOSED:
          if (isWhitespace(c)) {
            parser.state = S.ATTRIB
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            strictFail(parser, 'No whitespace between attributes')
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_VALUE_UNQUOTED:
          if (!isAttribEnd(c)) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_U
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          if (c === '>') {
            openTag(parser)
          } else {
            parser.state = S.ATTRIB
          }
          continue

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (isWhitespace(c)) {
              continue
            } else if (notMatch(nameStart, c)) {
              if (parser.script) {
                parser.script += '</' + c
                parser.state = S.SCRIPT
              } else {
                strictFail(parser, 'Invalid tagname in closing tag.')
              }
            } else {
              parser.tagName = c
            }
          } else if (c === '>') {
            closeTag(parser)
          } else if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else if (parser.script) {
            parser.script += '</' + parser.tagName
            parser.tagName = ''
            parser.state = S.SCRIPT
          } else {
            if (!isWhitespace(c)) {
              strictFail(parser, 'Invalid tagname in closing tag')
            }
            parser.state = S.CLOSE_TAG_SAW_WHITE
          }
          continue

        case S.CLOSE_TAG_SAW_WHITE:
          if (isWhitespace(c)) {
            continue
          }
          if (c === '>') {
            closeTag(parser)
          } else {
            strictFail(parser, 'Invalid characters in closing tag')
          }
          continue

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          var returnState
          var buffer
          switch (parser.state) {
            case S.TEXT_ENTITY:
              returnState = S.TEXT
              buffer = 'textNode'
              break

            case S.ATTRIB_VALUE_ENTITY_Q:
              returnState = S.ATTRIB_VALUE_QUOTED
              buffer = 'attribValue'
              break

            case S.ATTRIB_VALUE_ENTITY_U:
              returnState = S.ATTRIB_VALUE_UNQUOTED
              buffer = 'attribValue'
              break
          }

          if (c === ';') {
            parser[buffer] += parseEntity(parser)
            parser.entity = ''
            parser.state = returnState
          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
            parser.entity += c
          } else {
            strictFail(parser, 'Invalid character in entity name')
            parser[buffer] += '&' + parser.entity + c
            parser.entity = ''
            parser.state = returnState
          }

          continue

        default:
          throw new Error(parser, 'Unknown state: ' + parser.state)
      }
    } // while

    if (parser.position >= parser.bufferCheckPosition) {
      checkBufferLength(parser)
    }
    return parser
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  /* istanbul ignore next */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode
      var floor = Math.floor
      var fromCodePoint = function () {
        var MAX_SIZE = 0x4000
        var codeUnits = []
        var highSurrogate
        var lowSurrogate
        var index = -1
        var length = arguments.length
        if (!length) {
          return ''
        }
        var result = ''
        while (++index < length) {
          var codePoint = Number(arguments[index])
          if (
            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
            codePoint < 0 || // not a valid Unicode code point
            codePoint > 0x10FFFF || // not a valid Unicode code point
            floor(codePoint) !== codePoint // not an integer
          ) {
            throw RangeError('Invalid code point: ' + codePoint)
          }
          if (codePoint <= 0xFFFF) { // BMP code point
            codeUnits.push(codePoint)
          } else { // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000
            highSurrogate = (codePoint >> 10) + 0xD800
            lowSurrogate = (codePoint % 0x400) + 0xDC00
            codeUnits.push(highSurrogate, lowSurrogate)
          }
          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits)
            codeUnits.length = 0
          }
        }
        return result
      }
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          value: fromCodePoint,
          configurable: true,
          writable: true
        })
      } else {
        String.fromCodePoint = fromCodePoint
      }
    }())
  }
})( false ? undefined : exports)


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/Utility.js":
/*!************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/Utility.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var assign, isArray, isEmpty, isFunction, isObject, isPlainObject,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  assign = function() {
    var i, key, len, source, sources, target;
    target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (isFunction(Object.assign)) {
      Object.assign.apply(null, arguments);
    } else {
      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        if (source != null) {
          for (key in source) {
            if (!hasProp.call(source, key)) continue;
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };

  isFunction = function(val) {
    return !!val && Object.prototype.toString.call(val) === '[object Function]';
  };

  isObject = function(val) {
    var ref;
    return !!val && ((ref = typeof val) === 'function' || ref === 'object');
  };

  isArray = function(val) {
    if (isFunction(Array.isArray)) {
      return Array.isArray(val);
    } else {
      return Object.prototype.toString.call(val) === '[object Array]';
    }
  };

  isEmpty = function(val) {
    var key;
    if (isArray(val)) {
      return !val.length;
    } else {
      for (key in val) {
        if (!hasProp.call(val, key)) continue;
        return false;
      }
      return true;
    }
  };

  isPlainObject = function(val) {
    var ctor, proto;
    return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && (typeof ctor === 'function') && (ctor instanceof ctor) && (Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object));
  };

  module.exports.assign = assign;

  module.exports.isFunction = isFunction;

  module.exports.isObject = isObject;

  module.exports.isArray = isArray;

  module.exports.isEmpty = isEmpty;

  module.exports.isPlainObject = isPlainObject;

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLAttribute.js":
/*!*****************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLAttribute.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLAttribute;

  module.exports = XMLAttribute = (function() {
    function XMLAttribute(parent, name, value) {
      this.options = parent.options;
      this.stringify = parent.stringify;
      if (name == null) {
        throw new Error("Missing attribute name of element " + parent.name);
      }
      if (value == null) {
        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
      }
      this.name = this.stringify.attName(name);
      this.value = this.stringify.attValue(value);
    }

    XMLAttribute.prototype.clone = function() {
      return Object.create(this);
    };

    XMLAttribute.prototype.toString = function(options) {
      return this.options.writer.set(options).attribute(this);
    };

    return XMLAttribute;

  })();

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLCData.js":
/*!*************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLCData.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLCData, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLCData = (function(superClass) {
    extend(XMLCData, superClass);

    function XMLCData(parent, text) {
      XMLCData.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing CDATA text");
      }
      this.text = this.stringify.cdata(text);
    }

    XMLCData.prototype.clone = function() {
      return Object.create(this);
    };

    XMLCData.prototype.toString = function(options) {
      return this.options.writer.set(options).cdata(this);
    };

    return XMLCData;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLComment.js":
/*!***************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLComment.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLComment, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLComment = (function(superClass) {
    extend(XMLComment, superClass);

    function XMLComment(parent, text) {
      XMLComment.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing comment text");
      }
      this.text = this.stringify.comment(text);
    }

    XMLComment.prototype.clone = function() {
      return Object.create(this);
    };

    XMLComment.prototype.toString = function(options) {
      return this.options.writer.set(options).comment(this);
    };

    return XMLComment;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDTDAttList.js":
/*!******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDTDAttList.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDTDAttList, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLDTDAttList = (function(superClass) {
    extend(XMLDTDAttList, superClass);

    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      XMLDTDAttList.__super__.constructor.call(this, parent);
      if (elementName == null) {
        throw new Error("Missing DTD element name");
      }
      if (attributeName == null) {
        throw new Error("Missing DTD attribute name");
      }
      if (!attributeType) {
        throw new Error("Missing DTD attribute type");
      }
      if (!defaultValueType) {
        throw new Error("Missing DTD attribute default");
      }
      if (defaultValueType.indexOf('#') !== 0) {
        defaultValueType = '#' + defaultValueType;
      }
      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
      }
      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
        throw new Error("Default value only applies to #FIXED or #DEFAULT");
      }
      this.elementName = this.stringify.eleName(elementName);
      this.attributeName = this.stringify.attName(attributeName);
      this.attributeType = this.stringify.dtdAttType(attributeType);
      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
      this.defaultValueType = defaultValueType;
    }

    XMLDTDAttList.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdAttList(this);
    };

    return XMLDTDAttList;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDTDElement.js":
/*!******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDTDElement.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDTDElement, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLDTDElement = (function(superClass) {
    extend(XMLDTDElement, superClass);

    function XMLDTDElement(parent, name, value) {
      XMLDTDElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing DTD element name");
      }
      if (!value) {
        value = '(#PCDATA)';
      }
      if (Array.isArray(value)) {
        value = '(' + value.join(',') + ')';
      }
      this.name = this.stringify.eleName(name);
      this.value = this.stringify.dtdElementValue(value);
    }

    XMLDTDElement.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdElement(this);
    };

    return XMLDTDElement;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDTDEntity.js":
/*!*****************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDTDEntity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDTDEntity, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js").isObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLDTDEntity = (function(superClass) {
    extend(XMLDTDEntity, superClass);

    function XMLDTDEntity(parent, pe, name, value) {
      XMLDTDEntity.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing entity name");
      }
      if (value == null) {
        throw new Error("Missing entity value");
      }
      this.pe = !!pe;
      this.name = this.stringify.eleName(name);
      if (!isObject(value)) {
        this.value = this.stringify.dtdEntityValue(value);
      } else {
        if (!value.pubID && !value.sysID) {
          throw new Error("Public and/or system identifiers are required for an external entity");
        }
        if (value.pubID && !value.sysID) {
          throw new Error("System identifier is required for a public external entity");
        }
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
        if (value.nData != null) {
          this.nData = this.stringify.dtdNData(value.nData);
        }
        if (this.pe && this.nData) {
          throw new Error("Notation declaration is not allowed in a parameter entity");
        }
      }
    }

    XMLDTDEntity.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdEntity(this);
    };

    return XMLDTDEntity;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDTDNotation.js":
/*!*******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDTDNotation.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDTDNotation, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLDTDNotation = (function(superClass) {
    extend(XMLDTDNotation, superClass);

    function XMLDTDNotation(parent, name, value) {
      XMLDTDNotation.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing notation name");
      }
      if (!value.pubID && !value.sysID) {
        throw new Error("Public or system identifiers are required for an external entity");
      }
      this.name = this.stringify.eleName(name);
      if (value.pubID != null) {
        this.pubID = this.stringify.dtdPubID(value.pubID);
      }
      if (value.sysID != null) {
        this.sysID = this.stringify.dtdSysID(value.sysID);
      }
    }

    XMLDTDNotation.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdNotation(this);
    };

    return XMLDTDNotation;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDeclaration.js":
/*!*******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDeclaration.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDeclaration, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js").isObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLDeclaration = (function(superClass) {
    extend(XMLDeclaration, superClass);

    function XMLDeclaration(parent, version, encoding, standalone) {
      var ref;
      XMLDeclaration.__super__.constructor.call(this, parent);
      if (isObject(version)) {
        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
      }
      if (!version) {
        version = '1.0';
      }
      this.version = this.stringify.xmlVersion(version);
      if (encoding != null) {
        this.encoding = this.stringify.xmlEncoding(encoding);
      }
      if (standalone != null) {
        this.standalone = this.stringify.xmlStandalone(standalone);
      }
    }

    XMLDeclaration.prototype.toString = function(options) {
      return this.options.writer.set(options).declaration(this);
    };

    return XMLDeclaration;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDocType.js":
/*!***************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDocType.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js").isObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "./node_modules/xmlbuilder/lib/XMLDTDAttList.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "./node_modules/xmlbuilder/lib/XMLDTDEntity.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "./node_modules/xmlbuilder/lib/XMLDTDElement.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "./node_modules/xmlbuilder/lib/XMLDTDNotation.js");

  module.exports = XMLDocType = (function(superClass) {
    extend(XMLDocType, superClass);

    function XMLDocType(parent, pubID, sysID) {
      var ref, ref1;
      XMLDocType.__super__.constructor.call(this, parent);
      this.documentObject = parent;
      if (isObject(pubID)) {
        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
      }
      if (sysID == null) {
        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
      }
      if (pubID != null) {
        this.pubID = this.stringify.dtdPubID(pubID);
      }
      if (sysID != null) {
        this.sysID = this.stringify.dtdSysID(sysID);
      }
    }

    XMLDocType.prototype.element = function(name, value) {
      var child;
      child = new XMLDTDElement(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var child;
      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.entity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, false, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.pEntity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, true, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.notation = function(name, value) {
      var child;
      child = new XMLDTDNotation(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.toString = function(options) {
      return this.options.writer.set(options).docType(this);
    };

    XMLDocType.prototype.ele = function(name, value) {
      return this.element(name, value);
    };

    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
    };

    XMLDocType.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocType.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocType.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    XMLDocType.prototype.up = function() {
      return this.root() || this.documentObject;
    };

    return XMLDocType;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDocument.js":
/*!****************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDocument.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isPlainObject = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js").isPlainObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  XMLStringifier = __webpack_require__(/*! ./XMLStringifier */ "./node_modules/xmlbuilder/lib/XMLStringifier.js");

  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "./node_modules/xmlbuilder/lib/XMLStringWriter.js");

  module.exports = XMLDocument = (function(superClass) {
    extend(XMLDocument, superClass);

    function XMLDocument(options) {
      XMLDocument.__super__.constructor.call(this, null);
      options || (options = {});
      if (!options.writer) {
        options.writer = new XMLStringWriter();
      }
      this.options = options;
      this.stringify = new XMLStringifier(options);
      this.isDocument = true;
    }

    XMLDocument.prototype.end = function(writer) {
      var writerOptions;
      if (!writer) {
        writer = this.options.writer;
      } else if (isPlainObject(writer)) {
        writerOptions = writer;
        writer = this.options.writer.set(writerOptions);
      }
      return writer.document(this);
    };

    XMLDocument.prototype.toString = function(options) {
      return this.options.writer.set(options).document(this);
    };

    return XMLDocument;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLDocumentCB.js":
/*!******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLDocumentCB.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, isFunction, isObject, isPlainObject, ref,
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js"), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;

  XMLElement = __webpack_require__(/*! ./XMLElement */ "./node_modules/xmlbuilder/lib/XMLElement.js");

  XMLCData = __webpack_require__(/*! ./XMLCData */ "./node_modules/xmlbuilder/lib/XMLCData.js");

  XMLComment = __webpack_require__(/*! ./XMLComment */ "./node_modules/xmlbuilder/lib/XMLComment.js");

  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "./node_modules/xmlbuilder/lib/XMLRaw.js");

  XMLText = __webpack_require__(/*! ./XMLText */ "./node_modules/xmlbuilder/lib/XMLText.js");

  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "./node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");

  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "./node_modules/xmlbuilder/lib/XMLDeclaration.js");

  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "./node_modules/xmlbuilder/lib/XMLDocType.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "./node_modules/xmlbuilder/lib/XMLDTDAttList.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "./node_modules/xmlbuilder/lib/XMLDTDEntity.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "./node_modules/xmlbuilder/lib/XMLDTDElement.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "./node_modules/xmlbuilder/lib/XMLDTDNotation.js");

  XMLAttribute = __webpack_require__(/*! ./XMLAttribute */ "./node_modules/xmlbuilder/lib/XMLAttribute.js");

  XMLStringifier = __webpack_require__(/*! ./XMLStringifier */ "./node_modules/xmlbuilder/lib/XMLStringifier.js");

  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "./node_modules/xmlbuilder/lib/XMLStringWriter.js");

  module.exports = XMLDocumentCB = (function() {
    function XMLDocumentCB(options, onData, onEnd) {
      var writerOptions;
      options || (options = {});
      if (!options.writer) {
        options.writer = new XMLStringWriter(options);
      } else if (isPlainObject(options.writer)) {
        writerOptions = options.writer;
        options.writer = new XMLStringWriter(writerOptions);
      }
      this.options = options;
      this.writer = options.writer;
      this.stringify = new XMLStringifier(options);
      this.onDataCallback = onData || function() {};
      this.onEndCallback = onEnd || function() {};
      this.currentNode = null;
      this.currentLevel = -1;
      this.openTags = {};
      this.documentStarted = false;
      this.documentCompleted = false;
      this.root = null;
    }

    XMLDocumentCB.prototype.node = function(name, attributes, text) {
      var ref1;
      if (name == null) {
        throw new Error("Missing node name");
      }
      if (this.root && this.currentLevel === -1) {
        throw new Error("Document can only have one root node");
      }
      this.openCurrent();
      name = name.valueOf();
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      this.currentNode = new XMLElement(this, name, attributes);
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      if (text != null) {
        this.text(text);
      }
      return this;
    };

    XMLDocumentCB.prototype.element = function(name, attributes, text) {
      if (this.currentNode && this.currentNode instanceof XMLDocType) {
        return this.dtdElement.apply(this, arguments);
      } else {
        return this.node(name, attributes, text);
      }
    };

    XMLDocumentCB.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (!this.currentNode || this.currentNode.children) {
        throw new Error("att() can only be used immediately after an ele() call in callback mode");
      }
      if (name != null) {
        name = name.valueOf();
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (!this.options.skipNullAttributes || (value != null)) {
          this.currentNode.attributes[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLDocumentCB.prototype.text = function(value) {
      var node;
      this.openCurrent();
      node = new XMLText(this, value);
      this.onData(this.writer.text(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.cdata = function(value) {
      var node;
      this.openCurrent();
      node = new XMLCData(this, value);
      this.onData(this.writer.cdata(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.comment = function(value) {
      var node;
      this.openCurrent();
      node = new XMLComment(this, value);
      this.onData(this.writer.comment(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.raw = function(value) {
      var node;
      this.openCurrent();
      node = new XMLRaw(this, value);
      this.onData(this.writer.raw(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.instruction = function(target, value) {
      var i, insTarget, insValue, len, node;
      this.openCurrent();
      if (target != null) {
        target = target.valueOf();
      }
      if (value != null) {
        value = value.valueOf();
      }
      if (Array.isArray(target)) {
        for (i = 0, len = target.length; i < len; i++) {
          insTarget = target[i];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        node = new XMLProcessingInstruction(this, target, value);
        this.onData(this.writer.processingInstruction(node, this.currentLevel + 1));
      }
      return this;
    };

    XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
      var node;
      this.openCurrent();
      if (this.documentStarted) {
        throw new Error("declaration() must be the first node");
      }
      node = new XMLDeclaration(this, version, encoding, standalone);
      this.onData(this.writer.declaration(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
      this.openCurrent();
      if (root == null) {
        throw new Error("Missing root node name");
      }
      if (this.root) {
        throw new Error("dtd() must come before the root node");
      }
      this.currentNode = new XMLDocType(this, pubID, sysID);
      this.currentNode.rootNodeName = root;
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      return this;
    };

    XMLDocumentCB.prototype.dtdElement = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDElement(this, name, value);
      this.onData(this.writer.dtdElement(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var node;
      this.openCurrent();
      node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.onData(this.writer.dtdAttList(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.entity = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDEntity(this, false, name, value);
      this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.pEntity = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDEntity(this, true, name, value);
      this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.notation = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDNotation(this, name, value);
      this.onData(this.writer.dtdNotation(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.up = function() {
      if (this.currentLevel < 0) {
        throw new Error("The document node has no parent");
      }
      if (this.currentNode) {
        if (this.currentNode.children) {
          this.closeNode(this.currentNode);
        } else {
          this.openNode(this.currentNode);
        }
        this.currentNode = null;
      } else {
        this.closeNode(this.openTags[this.currentLevel]);
      }
      delete this.openTags[this.currentLevel];
      this.currentLevel--;
      return this;
    };

    XMLDocumentCB.prototype.end = function() {
      while (this.currentLevel >= 0) {
        this.up();
      }
      return this.onEnd();
    };

    XMLDocumentCB.prototype.openCurrent = function() {
      if (this.currentNode) {
        this.currentNode.children = true;
        return this.openNode(this.currentNode);
      }
    };

    XMLDocumentCB.prototype.openNode = function(node) {
      if (!node.isOpen) {
        if (!this.root && this.currentLevel === 0 && node instanceof XMLElement) {
          this.root = node;
        }
        this.onData(this.writer.openNode(node, this.currentLevel));
        return node.isOpen = true;
      }
    };

    XMLDocumentCB.prototype.closeNode = function(node) {
      if (!node.isClosed) {
        this.onData(this.writer.closeNode(node, this.currentLevel));
        return node.isClosed = true;
      }
    };

    XMLDocumentCB.prototype.onData = function(chunk) {
      this.documentStarted = true;
      return this.onDataCallback(chunk);
    };

    XMLDocumentCB.prototype.onEnd = function() {
      this.documentCompleted = true;
      return this.onEndCallback();
    };

    XMLDocumentCB.prototype.ele = function() {
      return this.element.apply(this, arguments);
    };

    XMLDocumentCB.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLDocumentCB.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLDocumentCB.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLDocumentCB.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLDocumentCB.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
      return this.doctype(root, pubID, sysID);
    };

    XMLDocumentCB.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLDocumentCB.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLDocumentCB.prototype.t = function(value) {
      return this.text(value);
    };

    XMLDocumentCB.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLDocumentCB.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLDocumentCB.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLDocumentCB.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocumentCB.prototype.att = function() {
      if (this.currentNode && this.currentNode instanceof XMLDocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };

    XMLDocumentCB.prototype.a = function() {
      if (this.currentNode && this.currentNode instanceof XMLDocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };

    XMLDocumentCB.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocumentCB.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocumentCB.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    return XMLDocumentCB;

  })();

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLElement.js":
/*!***************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLElement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLAttribute, XMLElement, XMLNode, isFunction, isObject, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js"), isObject = ref.isObject, isFunction = ref.isFunction;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  XMLAttribute = __webpack_require__(/*! ./XMLAttribute */ "./node_modules/xmlbuilder/lib/XMLAttribute.js");

  module.exports = XMLElement = (function(superClass) {
    extend(XMLElement, superClass);

    function XMLElement(parent, name, attributes) {
      XMLElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing element name");
      }
      this.name = this.stringify.eleName(name);
      this.attributes = {};
      if (attributes != null) {
        this.attribute(attributes);
      }
      if (parent.isDocument) {
        this.isRoot = true;
        this.documentObject = parent;
        parent.rootObject = this;
      }
    }

    XMLElement.prototype.clone = function() {
      var att, attName, clonedSelf, ref1;
      clonedSelf = Object.create(this);
      if (clonedSelf.isRoot) {
        clonedSelf.documentObject = null;
      }
      clonedSelf.attributes = {};
      ref1 = this.attributes;
      for (attName in ref1) {
        if (!hasProp.call(ref1, attName)) continue;
        att = ref1[attName];
        clonedSelf.attributes[attName] = att.clone();
      }
      clonedSelf.children = [];
      this.children.forEach(function(child) {
        var clonedChild;
        clonedChild = child.clone();
        clonedChild.parent = clonedSelf;
        return clonedSelf.children.push(clonedChild);
      });
      return clonedSelf;
    };

    XMLElement.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (name != null) {
        name = name.valueOf();
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (!this.options.skipNullAttributes || (value != null)) {
          this.attributes[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLElement.prototype.removeAttribute = function(name) {
      var attName, i, len;
      if (name == null) {
        throw new Error("Missing attribute name");
      }
      name = name.valueOf();
      if (Array.isArray(name)) {
        for (i = 0, len = name.length; i < len; i++) {
          attName = name[i];
          delete this.attributes[attName];
        }
      } else {
        delete this.attributes[name];
      }
      return this;
    };

    XMLElement.prototype.toString = function(options) {
      return this.options.writer.set(options).element(this);
    };

    XMLElement.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    return XMLElement;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLNode.js":
/*!************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLNode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLProcessingInstruction, XMLRaw, XMLText, isEmpty, isFunction, isObject, ref,
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js"), isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty;

  XMLElement = null;

  XMLCData = null;

  XMLComment = null;

  XMLDeclaration = null;

  XMLDocType = null;

  XMLRaw = null;

  XMLText = null;

  XMLProcessingInstruction = null;

  module.exports = XMLNode = (function() {
    function XMLNode(parent) {
      this.parent = parent;
      if (this.parent) {
        this.options = this.parent.options;
        this.stringify = this.parent.stringify;
      }
      this.children = [];
      if (!XMLElement) {
        XMLElement = __webpack_require__(/*! ./XMLElement */ "./node_modules/xmlbuilder/lib/XMLElement.js");
        XMLCData = __webpack_require__(/*! ./XMLCData */ "./node_modules/xmlbuilder/lib/XMLCData.js");
        XMLComment = __webpack_require__(/*! ./XMLComment */ "./node_modules/xmlbuilder/lib/XMLComment.js");
        XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "./node_modules/xmlbuilder/lib/XMLDeclaration.js");
        XMLDocType = __webpack_require__(/*! ./XMLDocType */ "./node_modules/xmlbuilder/lib/XMLDocType.js");
        XMLRaw = __webpack_require__(/*! ./XMLRaw */ "./node_modules/xmlbuilder/lib/XMLRaw.js");
        XMLText = __webpack_require__(/*! ./XMLText */ "./node_modules/xmlbuilder/lib/XMLText.js");
        XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "./node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");
      }
    }

    XMLNode.prototype.element = function(name, attributes, text) {
      var childNode, item, j, k, key, lastChild, len, len1, ref1, val;
      lastChild = null;
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      if (name != null) {
        name = name.valueOf();
      }
      if (Array.isArray(name)) {
        for (j = 0, len = name.length; j < len; j++) {
          item = name[j];
          lastChild = this.element(item);
        }
      } else if (isFunction(name)) {
        lastChild = this.element(name.apply());
      } else if (isObject(name)) {
        for (key in name) {
          if (!hasProp.call(name, key)) continue;
          val = name[key];
          if (isFunction(val)) {
            val = val.apply();
          }
          if ((isObject(val)) && (isEmpty(val))) {
            val = null;
          }
          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
            for (k = 0, len1 = val.length; k < len1; k++) {
              item = val[k];
              childNode = {};
              childNode[key] = item;
              lastChild = this.element(childNode);
            }
          } else if (isObject(val)) {
            lastChild = this.element(key);
            lastChild.element(val);
          } else {
            lastChild = this.element(key, val);
          }
        }
      } else {
        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
          lastChild = this.text(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
          lastChild = this.cdata(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
          lastChild = this.comment(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
          lastChild = this.raw(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
          lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
        } else {
          lastChild = this.node(name, attributes, text);
        }
      }
      if (lastChild == null) {
        throw new Error("Could not create any elements with: " + name);
      }
      return lastChild;
    };

    XMLNode.prototype.insertBefore = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.insertAfter = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.remove = function() {
      var i, ref1;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
      return this.parent;
    };

    XMLNode.prototype.node = function(name, attributes, text) {
      var child, ref1;
      if (name != null) {
        name = name.valueOf();
      }
      attributes || (attributes = {});
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      child = new XMLElement(this, name, attributes);
      if (text != null) {
        child.text(text);
      }
      this.children.push(child);
      return child;
    };

    XMLNode.prototype.text = function(value) {
      var child;
      child = new XMLText(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.commentBefore = function(value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.comment(value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.commentAfter = function(value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.comment(value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.raw = function(value) {
      var child;
      child = new XMLRaw(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.instruction = function(target, value) {
      var insTarget, insValue, instruction, j, len;
      if (target != null) {
        target = target.valueOf();
      }
      if (value != null) {
        value = value.valueOf();
      }
      if (Array.isArray(target)) {
        for (j = 0, len = target.length; j < len; j++) {
          insTarget = target[j];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        instruction = new XMLProcessingInstruction(this, target, value);
        this.children.push(instruction);
      }
      return this;
    };

    XMLNode.prototype.instructionBefore = function(target, value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.instruction(target, value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.instructionAfter = function(target, value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.instruction(target, value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.declaration = function(version, encoding, standalone) {
      var doc, xmldec;
      doc = this.document();
      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
      if (doc.children[0] instanceof XMLDeclaration) {
        doc.children[0] = xmldec;
      } else {
        doc.children.unshift(xmldec);
      }
      return doc.root() || doc;
    };

    XMLNode.prototype.doctype = function(pubID, sysID) {
      var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
      doc = this.document();
      doctype = new XMLDocType(doc, pubID, sysID);
      ref1 = doc.children;
      for (i = j = 0, len = ref1.length; j < len; i = ++j) {
        child = ref1[i];
        if (child instanceof XMLDocType) {
          doc.children[i] = doctype;
          return doctype;
        }
      }
      ref2 = doc.children;
      for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
        child = ref2[i];
        if (child.isRoot) {
          doc.children.splice(i, 0, doctype);
          return doctype;
        }
      }
      doc.children.push(doctype);
      return doctype;
    };

    XMLNode.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLNode.prototype.root = function() {
      var node;
      node = this;
      while (node) {
        if (node.isDocument) {
          return node.rootObject;
        } else if (node.isRoot) {
          return node;
        } else {
          node = node.parent;
        }
      }
    };

    XMLNode.prototype.document = function() {
      var node;
      node = this;
      while (node) {
        if (node.isDocument) {
          return node;
        } else {
          node = node.parent;
        }
      }
    };

    XMLNode.prototype.end = function(options) {
      return this.document().end(options);
    };

    XMLNode.prototype.prev = function() {
      var i;
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLNode.prototype.next = function() {
      var i;
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLNode.prototype.importDocument = function(doc) {
      var clonedRoot;
      clonedRoot = doc.root().clone();
      clonedRoot.parent = this;
      clonedRoot.isRoot = false;
      this.children.push(clonedRoot);
      return this;
    };

    XMLNode.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLNode.prototype.doc = function() {
      return this.document();
    };

    XMLNode.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLNode.prototype.dtd = function(pubID, sysID) {
      return this.doctype(pubID, sysID);
    };

    XMLNode.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.t = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLNode.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    XMLNode.prototype.u = function() {
      return this.up();
    };

    XMLNode.prototype.importXMLBuilder = function(doc) {
      return this.importDocument(doc);
    };

    return XMLNode;

  })();

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLProcessingInstruction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLProcessingInstruction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLNode, XMLProcessingInstruction,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLProcessingInstruction = (function(superClass) {
    extend(XMLProcessingInstruction, superClass);

    function XMLProcessingInstruction(parent, target, value) {
      XMLProcessingInstruction.__super__.constructor.call(this, parent);
      if (target == null) {
        throw new Error("Missing instruction target");
      }
      this.target = this.stringify.insTarget(target);
      if (value) {
        this.value = this.stringify.insValue(value);
      }
    }

    XMLProcessingInstruction.prototype.clone = function() {
      return Object.create(this);
    };

    XMLProcessingInstruction.prototype.toString = function(options) {
      return this.options.writer.set(options).processingInstruction(this);
    };

    return XMLProcessingInstruction;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLRaw.js":
/*!***********************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLRaw.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLNode, XMLRaw,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLRaw = (function(superClass) {
    extend(XMLRaw, superClass);

    function XMLRaw(parent, text) {
      XMLRaw.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing raw text");
      }
      this.value = this.stringify.raw(text);
    }

    XMLRaw.prototype.clone = function() {
      return Object.create(this);
    };

    XMLRaw.prototype.toString = function(options) {
      return this.options.writer.set(options).raw(this);
    };

    return XMLRaw;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLStreamWriter.js":
/*!********************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLStreamWriter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStreamWriter, XMLText, XMLWriterBase,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "./node_modules/xmlbuilder/lib/XMLDeclaration.js");

  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "./node_modules/xmlbuilder/lib/XMLDocType.js");

  XMLCData = __webpack_require__(/*! ./XMLCData */ "./node_modules/xmlbuilder/lib/XMLCData.js");

  XMLComment = __webpack_require__(/*! ./XMLComment */ "./node_modules/xmlbuilder/lib/XMLComment.js");

  XMLElement = __webpack_require__(/*! ./XMLElement */ "./node_modules/xmlbuilder/lib/XMLElement.js");

  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "./node_modules/xmlbuilder/lib/XMLRaw.js");

  XMLText = __webpack_require__(/*! ./XMLText */ "./node_modules/xmlbuilder/lib/XMLText.js");

  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "./node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "./node_modules/xmlbuilder/lib/XMLDTDAttList.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "./node_modules/xmlbuilder/lib/XMLDTDElement.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "./node_modules/xmlbuilder/lib/XMLDTDEntity.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "./node_modules/xmlbuilder/lib/XMLDTDNotation.js");

  XMLWriterBase = __webpack_require__(/*! ./XMLWriterBase */ "./node_modules/xmlbuilder/lib/XMLWriterBase.js");

  module.exports = XMLStreamWriter = (function(superClass) {
    extend(XMLStreamWriter, superClass);

    function XMLStreamWriter(stream, options) {
      XMLStreamWriter.__super__.constructor.call(this, options);
      this.stream = stream;
    }

    XMLStreamWriter.prototype.document = function(doc) {
      var child, i, j, len, len1, ref, ref1, results;
      ref = doc.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        child.isLastRootNode = false;
      }
      doc.children[doc.children.length - 1].isLastRootNode = true;
      ref1 = doc.children;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        child = ref1[j];
        switch (false) {
          case !(child instanceof XMLDeclaration):
            results.push(this.declaration(child));
            break;
          case !(child instanceof XMLDocType):
            results.push(this.docType(child));
            break;
          case !(child instanceof XMLComment):
            results.push(this.comment(child));
            break;
          case !(child instanceof XMLProcessingInstruction):
            results.push(this.processingInstruction(child));
            break;
          default:
            results.push(this.element(child));
        }
      }
      return results;
    };

    XMLStreamWriter.prototype.attribute = function(att) {
      return this.stream.write(' ' + att.name + '="' + att.value + '"');
    };

    XMLStreamWriter.prototype.cdata = function(node, level) {
      return this.stream.write(this.space(level) + '<![CDATA[' + node.text + ']]>' + this.endline(node));
    };

    XMLStreamWriter.prototype.comment = function(node, level) {
      return this.stream.write(this.space(level) + '<!-- ' + node.text + ' -->' + this.endline(node));
    };

    XMLStreamWriter.prototype.declaration = function(node, level) {
      this.stream.write(this.space(level));
      this.stream.write('<?xml version="' + node.version + '"');
      if (node.encoding != null) {
        this.stream.write(' encoding="' + node.encoding + '"');
      }
      if (node.standalone != null) {
        this.stream.write(' standalone="' + node.standalone + '"');
      }
      this.stream.write(this.spacebeforeslash + '?>');
      return this.stream.write(this.endline(node));
    };

    XMLStreamWriter.prototype.docType = function(node, level) {
      var child, i, len, ref;
      level || (level = 0);
      this.stream.write(this.space(level));
      this.stream.write('<!DOCTYPE ' + node.root().name);
      if (node.pubID && node.sysID) {
        this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
      } else if (node.sysID) {
        this.stream.write(' SYSTEM "' + node.sysID + '"');
      }
      if (node.children.length > 0) {
        this.stream.write(' [');
        this.stream.write(this.endline(node));
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          switch (false) {
            case !(child instanceof XMLDTDAttList):
              this.dtdAttList(child, level + 1);
              break;
            case !(child instanceof XMLDTDElement):
              this.dtdElement(child, level + 1);
              break;
            case !(child instanceof XMLDTDEntity):
              this.dtdEntity(child, level + 1);
              break;
            case !(child instanceof XMLDTDNotation):
              this.dtdNotation(child, level + 1);
              break;
            case !(child instanceof XMLCData):
              this.cdata(child, level + 1);
              break;
            case !(child instanceof XMLComment):
              this.comment(child, level + 1);
              break;
            case !(child instanceof XMLProcessingInstruction):
              this.processingInstruction(child, level + 1);
              break;
            default:
              throw new Error("Unknown DTD node type: " + child.constructor.name);
          }
        }
        this.stream.write(']');
      }
      this.stream.write(this.spacebeforeslash + '>');
      return this.stream.write(this.endline(node));
    };

    XMLStreamWriter.prototype.element = function(node, level) {
      var att, child, i, len, name, ref, ref1, space;
      level || (level = 0);
      space = this.space(level);
      this.stream.write(space + '<' + node.name);
      ref = node.attributes;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        att = ref[name];
        this.attribute(att);
      }
      if (node.children.length === 0 || node.children.every(function(e) {
        return e.value === '';
      })) {
        if (this.allowEmpty) {
          this.stream.write('></' + node.name + '>');
        } else {
          this.stream.write(this.spacebeforeslash + '/>');
        }
      } else if (this.pretty && node.children.length === 1 && (node.children[0].value != null)) {
        this.stream.write('>');
        this.stream.write(node.children[0].value);
        this.stream.write('</' + node.name + '>');
      } else {
        this.stream.write('>' + this.newline);
        ref1 = node.children;
        for (i = 0, len = ref1.length; i < len; i++) {
          child = ref1[i];
          switch (false) {
            case !(child instanceof XMLCData):
              this.cdata(child, level + 1);
              break;
            case !(child instanceof XMLComment):
              this.comment(child, level + 1);
              break;
            case !(child instanceof XMLElement):
              this.element(child, level + 1);
              break;
            case !(child instanceof XMLRaw):
              this.raw(child, level + 1);
              break;
            case !(child instanceof XMLText):
              this.text(child, level + 1);
              break;
            case !(child instanceof XMLProcessingInstruction):
              this.processingInstruction(child, level + 1);
              break;
            default:
              throw new Error("Unknown XML node type: " + child.constructor.name);
          }
        }
        this.stream.write(space + '</' + node.name + '>');
      }
      return this.stream.write(this.endline(node));
    };

    XMLStreamWriter.prototype.processingInstruction = function(node, level) {
      this.stream.write(this.space(level) + '<?' + node.target);
      if (node.value) {
        this.stream.write(' ' + node.value);
      }
      return this.stream.write(this.spacebeforeslash + '?>' + this.endline(node));
    };

    XMLStreamWriter.prototype.raw = function(node, level) {
      return this.stream.write(this.space(level) + node.value + this.endline(node));
    };

    XMLStreamWriter.prototype.text = function(node, level) {
      return this.stream.write(this.space(level) + node.value + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdAttList = function(node, level) {
      this.stream.write(this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType);
      if (node.defaultValueType !== '#DEFAULT') {
        this.stream.write(' ' + node.defaultValueType);
      }
      if (node.defaultValue) {
        this.stream.write(' "' + node.defaultValue + '"');
      }
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdElement = function(node, level) {
      this.stream.write(this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value);
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdEntity = function(node, level) {
      this.stream.write(this.space(level) + '<!ENTITY');
      if (node.pe) {
        this.stream.write(' %');
      }
      this.stream.write(' ' + node.name);
      if (node.value) {
        this.stream.write(' "' + node.value + '"');
      } else {
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.nData) {
          this.stream.write(' NDATA ' + node.nData);
        }
      }
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdNotation = function(node, level) {
      this.stream.write(this.space(level) + '<!NOTATION ' + node.name);
      if (node.pubID && node.sysID) {
        this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
      } else if (node.pubID) {
        this.stream.write(' PUBLIC "' + node.pubID + '"');
      } else if (node.sysID) {
        this.stream.write(' SYSTEM "' + node.sysID + '"');
      }
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.endline = function(node) {
      if (!node.isLastRootNode) {
        return this.newline;
      } else {
        return '';
      }
    };

    return XMLStreamWriter;

  })(XMLWriterBase);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLStringWriter.js":
/*!********************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLStringWriter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLText, XMLWriterBase,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "./node_modules/xmlbuilder/lib/XMLDeclaration.js");

  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "./node_modules/xmlbuilder/lib/XMLDocType.js");

  XMLCData = __webpack_require__(/*! ./XMLCData */ "./node_modules/xmlbuilder/lib/XMLCData.js");

  XMLComment = __webpack_require__(/*! ./XMLComment */ "./node_modules/xmlbuilder/lib/XMLComment.js");

  XMLElement = __webpack_require__(/*! ./XMLElement */ "./node_modules/xmlbuilder/lib/XMLElement.js");

  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "./node_modules/xmlbuilder/lib/XMLRaw.js");

  XMLText = __webpack_require__(/*! ./XMLText */ "./node_modules/xmlbuilder/lib/XMLText.js");

  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "./node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "./node_modules/xmlbuilder/lib/XMLDTDAttList.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "./node_modules/xmlbuilder/lib/XMLDTDElement.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "./node_modules/xmlbuilder/lib/XMLDTDEntity.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "./node_modules/xmlbuilder/lib/XMLDTDNotation.js");

  XMLWriterBase = __webpack_require__(/*! ./XMLWriterBase */ "./node_modules/xmlbuilder/lib/XMLWriterBase.js");

  module.exports = XMLStringWriter = (function(superClass) {
    extend(XMLStringWriter, superClass);

    function XMLStringWriter(options) {
      XMLStringWriter.__super__.constructor.call(this, options);
    }

    XMLStringWriter.prototype.document = function(doc) {
      var child, i, len, r, ref;
      this.textispresent = false;
      r = '';
      ref = doc.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        r += (function() {
          switch (false) {
            case !(child instanceof XMLDeclaration):
              return this.declaration(child);
            case !(child instanceof XMLDocType):
              return this.docType(child);
            case !(child instanceof XMLComment):
              return this.comment(child);
            case !(child instanceof XMLProcessingInstruction):
              return this.processingInstruction(child);
            default:
              return this.element(child, 0);
          }
        }).call(this);
      }
      if (this.pretty && r.slice(-this.newline.length) === this.newline) {
        r = r.slice(0, -this.newline.length);
      }
      return r;
    };

    XMLStringWriter.prototype.attribute = function(att) {
      return ' ' + att.name + '="' + att.value + '"';
    };

    XMLStringWriter.prototype.cdata = function(node, level) {
      return this.space(level) + '<![CDATA[' + node.text + ']]>' + this.newline;
    };

    XMLStringWriter.prototype.comment = function(node, level) {
      return this.space(level) + '<!-- ' + node.text + ' -->' + this.newline;
    };

    XMLStringWriter.prototype.declaration = function(node, level) {
      var r;
      r = this.space(level);
      r += '<?xml version="' + node.version + '"';
      if (node.encoding != null) {
        r += ' encoding="' + node.encoding + '"';
      }
      if (node.standalone != null) {
        r += ' standalone="' + node.standalone + '"';
      }
      r += this.spacebeforeslash + '?>';
      r += this.newline;
      return r;
    };

    XMLStringWriter.prototype.docType = function(node, level) {
      var child, i, len, r, ref;
      level || (level = 0);
      r = this.space(level);
      r += '<!DOCTYPE ' + node.root().name;
      if (node.pubID && node.sysID) {
        r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
      } else if (node.sysID) {
        r += ' SYSTEM "' + node.sysID + '"';
      }
      if (node.children.length > 0) {
        r += ' [';
        r += this.newline;
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += (function() {
            switch (false) {
              case !(child instanceof XMLDTDAttList):
                return this.dtdAttList(child, level + 1);
              case !(child instanceof XMLDTDElement):
                return this.dtdElement(child, level + 1);
              case !(child instanceof XMLDTDEntity):
                return this.dtdEntity(child, level + 1);
              case !(child instanceof XMLDTDNotation):
                return this.dtdNotation(child, level + 1);
              case !(child instanceof XMLCData):
                return this.cdata(child, level + 1);
              case !(child instanceof XMLComment):
                return this.comment(child, level + 1);
              case !(child instanceof XMLProcessingInstruction):
                return this.processingInstruction(child, level + 1);
              default:
                throw new Error("Unknown DTD node type: " + child.constructor.name);
            }
          }).call(this);
        }
        r += ']';
      }
      r += this.spacebeforeslash + '>';
      r += this.newline;
      return r;
    };

    XMLStringWriter.prototype.element = function(node, level) {
      var att, child, i, j, len, len1, name, r, ref, ref1, ref2, space, textispresentwasset;
      level || (level = 0);
      textispresentwasset = false;
      if (this.textispresent) {
        this.newline = '';
        this.pretty = false;
      } else {
        this.newline = this.newlinedefault;
        this.pretty = this.prettydefault;
      }
      space = this.space(level);
      r = '';
      r += space + '<' + node.name;
      ref = node.attributes;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        att = ref[name];
        r += this.attribute(att);
      }
      if (node.children.length === 0 || node.children.every(function(e) {
        return e.value === '';
      })) {
        if (this.allowEmpty) {
          r += '></' + node.name + '>' + this.newline;
        } else {
          r += this.spacebeforeslash + '/>' + this.newline;
        }
      } else if (this.pretty && node.children.length === 1 && (node.children[0].value != null)) {
        r += '>';
        r += node.children[0].value;
        r += '</' + node.name + '>' + this.newline;
      } else {
        if (this.dontprettytextnodes) {
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            if (child.value != null) {
              this.textispresent++;
              textispresentwasset = true;
              break;
            }
          }
        }
        if (this.textispresent) {
          this.newline = '';
          this.pretty = false;
          space = this.space(level);
        }
        r += '>' + this.newline;
        ref2 = node.children;
        for (j = 0, len1 = ref2.length; j < len1; j++) {
          child = ref2[j];
          r += (function() {
            switch (false) {
              case !(child instanceof XMLCData):
                return this.cdata(child, level + 1);
              case !(child instanceof XMLComment):
                return this.comment(child, level + 1);
              case !(child instanceof XMLElement):
                return this.element(child, level + 1);
              case !(child instanceof XMLRaw):
                return this.raw(child, level + 1);
              case !(child instanceof XMLText):
                return this.text(child, level + 1);
              case !(child instanceof XMLProcessingInstruction):
                return this.processingInstruction(child, level + 1);
              default:
                throw new Error("Unknown XML node type: " + child.constructor.name);
            }
          }).call(this);
        }
        if (textispresentwasset) {
          this.textispresent--;
        }
        if (!this.textispresent) {
          this.newline = this.newlinedefault;
          this.pretty = this.prettydefault;
        }
        r += space + '</' + node.name + '>' + this.newline;
      }
      return r;
    };

    XMLStringWriter.prototype.processingInstruction = function(node, level) {
      var r;
      r = this.space(level) + '<?' + node.target;
      if (node.value) {
        r += ' ' + node.value;
      }
      r += this.spacebeforeslash + '?>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.raw = function(node, level) {
      return this.space(level) + node.value + this.newline;
    };

    XMLStringWriter.prototype.text = function(node, level) {
      return this.space(level) + node.value + this.newline;
    };

    XMLStringWriter.prototype.dtdAttList = function(node, level) {
      var r;
      r = this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
      if (node.defaultValueType !== '#DEFAULT') {
        r += ' ' + node.defaultValueType;
      }
      if (node.defaultValue) {
        r += ' "' + node.defaultValue + '"';
      }
      r += this.spacebeforeslash + '>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.dtdElement = function(node, level) {
      return this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value + this.spacebeforeslash + '>' + this.newline;
    };

    XMLStringWriter.prototype.dtdEntity = function(node, level) {
      var r;
      r = this.space(level) + '<!ENTITY';
      if (node.pe) {
        r += ' %';
      }
      r += ' ' + node.name;
      if (node.value) {
        r += ' "' + node.value + '"';
      } else {
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.nData) {
          r += ' NDATA ' + node.nData;
        }
      }
      r += this.spacebeforeslash + '>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.dtdNotation = function(node, level) {
      var r;
      r = this.space(level) + '<!NOTATION ' + node.name;
      if (node.pubID && node.sysID) {
        r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
      } else if (node.pubID) {
        r += ' PUBLIC "' + node.pubID + '"';
      } else if (node.sysID) {
        r += ' SYSTEM "' + node.sysID + '"';
      }
      r += this.spacebeforeslash + '>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.openNode = function(node, level) {
      var att, name, r, ref;
      level || (level = 0);
      if (node instanceof XMLElement) {
        r = this.space(level) + '<' + node.name;
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          r += this.attribute(att);
        }
        r += (node.children ? '>' : '/>') + this.newline;
        return r;
      } else {
        r = this.space(level) + '<!DOCTYPE ' + node.rootNodeName;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        r += (node.children ? ' [' : '>') + this.newline;
        return r;
      }
    };

    XMLStringWriter.prototype.closeNode = function(node, level) {
      level || (level = 0);
      switch (false) {
        case !(node instanceof XMLElement):
          return this.space(level) + '</' + node.name + '>' + this.newline;
        case !(node instanceof XMLDocType):
          return this.space(level) + ']>' + this.newline;
      }
    };

    return XMLStringWriter;

  })(XMLWriterBase);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLStringifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLStringifier.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLStringifier,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    hasProp = {}.hasOwnProperty;

  module.exports = XMLStringifier = (function() {
    function XMLStringifier(options) {
      this.assertLegalChar = bind(this.assertLegalChar, this);
      var key, ref, value;
      options || (options = {});
      this.noDoubleEncoding = options.noDoubleEncoding;
      ref = options.stringify || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this[key] = value;
      }
    }

    XMLStringifier.prototype.eleName = function(val) {
      val = '' + val || '';
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.eleText = function(val) {
      val = '' + val || '';
      return this.assertLegalChar(this.elEscape(val));
    };

    XMLStringifier.prototype.cdata = function(val) {
      val = '' + val || '';
      val = val.replace(']]>', ']]]]><![CDATA[>');
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.comment = function(val) {
      val = '' + val || '';
      if (val.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.raw = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.attName = function(val) {
      return val = '' + val || '';
    };

    XMLStringifier.prototype.attValue = function(val) {
      val = '' + val || '';
      return this.attEscape(val);
    };

    XMLStringifier.prototype.insTarget = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.insValue = function(val) {
      val = '' + val || '';
      if (val.match(/\?>/)) {
        throw new Error("Invalid processing instruction value: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlVersion = function(val) {
      val = '' + val || '';
      if (!val.match(/1\.[0-9]+/)) {
        throw new Error("Invalid version number: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlEncoding = function(val) {
      val = '' + val || '';
      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
        throw new Error("Invalid encoding: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlStandalone = function(val) {
      if (val) {
        return "yes";
      } else {
        return "no";
      }
    };

    XMLStringifier.prototype.dtdPubID = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdSysID = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdElementValue = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdAttType = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdAttDefault = function(val) {
      if (val != null) {
        return '' + val || '';
      } else {
        return val;
      }
    };

    XMLStringifier.prototype.dtdEntityValue = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdNData = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.convertAttKey = '@';

    XMLStringifier.prototype.convertPIKey = '?';

    XMLStringifier.prototype.convertTextKey = '#text';

    XMLStringifier.prototype.convertCDataKey = '#cdata';

    XMLStringifier.prototype.convertCommentKey = '#comment';

    XMLStringifier.prototype.convertRawKey = '#raw';

    XMLStringifier.prototype.assertLegalChar = function(str) {
      var res;
      res = str.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
      if (res) {
        throw new Error("Invalid character in string: " + str + " at index " + res.index);
      }
      return str;
    };

    XMLStringifier.prototype.elEscape = function(str) {
      var ampregex;
      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
    };

    XMLStringifier.prototype.attEscape = function(str) {
      var ampregex;
      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
    };

    return XMLStringifier;

  })();

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLText.js":
/*!************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLText.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLNode, XMLText,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "./node_modules/xmlbuilder/lib/XMLNode.js");

  module.exports = XMLText = (function(superClass) {
    extend(XMLText, superClass);

    function XMLText(parent, text) {
      XMLText.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing element text");
      }
      this.value = this.stringify.eleText(text);
    }

    XMLText.prototype.clone = function() {
      return Object.create(this);
    };

    XMLText.prototype.toString = function(options) {
      return this.options.writer.set(options).text(this);
    };

    return XMLText;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/XMLWriterBase.js":
/*!******************************************************!*\
  !*** ./node_modules/xmlbuilder/lib/XMLWriterBase.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLWriterBase,
    hasProp = {}.hasOwnProperty;

  module.exports = XMLWriterBase = (function() {
    function XMLWriterBase(options) {
      var key, ref, ref1, ref2, ref3, ref4, ref5, ref6, value;
      options || (options = {});
      this.pretty = options.pretty || false;
      this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
      if (this.pretty) {
        this.indent = (ref1 = options.indent) != null ? ref1 : '  ';
        this.newline = (ref2 = options.newline) != null ? ref2 : '\n';
        this.offset = (ref3 = options.offset) != null ? ref3 : 0;
        this.dontprettytextnodes = (ref4 = options.dontprettytextnodes) != null ? ref4 : 0;
      } else {
        this.indent = '';
        this.newline = '';
        this.offset = 0;
        this.dontprettytextnodes = 0;
      }
      this.spacebeforeslash = (ref5 = options.spacebeforeslash) != null ? ref5 : '';
      if (this.spacebeforeslash === true) {
        this.spacebeforeslash = ' ';
      }
      this.newlinedefault = this.newline;
      this.prettydefault = this.pretty;
      ref6 = options.writer || {};
      for (key in ref6) {
        if (!hasProp.call(ref6, key)) continue;
        value = ref6[key];
        this[key] = value;
      }
    }

    XMLWriterBase.prototype.set = function(options) {
      var key, ref, value;
      options || (options = {});
      if ("pretty" in options) {
        this.pretty = options.pretty;
      }
      if ("allowEmpty" in options) {
        this.allowEmpty = options.allowEmpty;
      }
      if (this.pretty) {
        this.indent = "indent" in options ? options.indent : '  ';
        this.newline = "newline" in options ? options.newline : '\n';
        this.offset = "offset" in options ? options.offset : 0;
        this.dontprettytextnodes = "dontprettytextnodes" in options ? options.dontprettytextnodes : 0;
      } else {
        this.indent = '';
        this.newline = '';
        this.offset = 0;
        this.dontprettytextnodes = 0;
      }
      this.spacebeforeslash = "spacebeforeslash" in options ? options.spacebeforeslash : '';
      if (this.spacebeforeslash === true) {
        this.spacebeforeslash = ' ';
      }
      this.newlinedefault = this.newline;
      this.prettydefault = this.pretty;
      ref = options.writer || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this[key] = value;
      }
      return this;
    };

    XMLWriterBase.prototype.space = function(level) {
      var indent;
      if (this.pretty) {
        indent = (level || 0) + this.offset + 1;
        if (indent > 0) {
          return new Array(indent).join(this.indent);
        } else {
          return '';
        }
      } else {
        return '';
      }
    };

    return XMLWriterBase;

  })();

}).call(this);


/***/ }),

/***/ "./node_modules/xmlbuilder/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/xmlbuilder/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;

  ref = __webpack_require__(/*! ./Utility */ "./node_modules/xmlbuilder/lib/Utility.js"), assign = ref.assign, isFunction = ref.isFunction;

  XMLDocument = __webpack_require__(/*! ./XMLDocument */ "./node_modules/xmlbuilder/lib/XMLDocument.js");

  XMLDocumentCB = __webpack_require__(/*! ./XMLDocumentCB */ "./node_modules/xmlbuilder/lib/XMLDocumentCB.js");

  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "./node_modules/xmlbuilder/lib/XMLStringWriter.js");

  XMLStreamWriter = __webpack_require__(/*! ./XMLStreamWriter */ "./node_modules/xmlbuilder/lib/XMLStreamWriter.js");

  module.exports.create = function(name, xmldec, doctype, options) {
    var doc, root;
    if (name == null) {
      throw new Error("Root element needs a name");
    }
    options = assign({}, xmldec, doctype, options);
    doc = new XMLDocument(options);
    root = doc.element(name);
    if (!options.headless) {
      doc.declaration(options);
      if ((options.pubID != null) || (options.sysID != null)) {
        doc.doctype(options);
      }
    }
    return root;
  };

  module.exports.begin = function(options, onData, onEnd) {
    var ref1;
    if (isFunction(options)) {
      ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
      options = {};
    }
    if (onData) {
      return new XMLDocumentCB(options, onData, onEnd);
    } else {
      return new XMLDocument(options);
    }
  };

  module.exports.stringWriter = function(options) {
    return new XMLStringWriter(options);
  };

  module.exports.streamWriter = function(stream, options) {
    return new XMLStreamWriter(stream, options);
  };

}).call(this);


/***/ }),

/***/ "./src/app/company/company-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/company/company-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/company/components/company/company.component.ts");
/* harmony import */ var _services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/security/groups.resolver */ "./src/app/company/services/security/groups.resolver.ts");
/* harmony import */ var _services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security/current-user-id.resolver */ "./src/app/company/services/security/current-user-id.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"],
        resolve: {
            groups: _services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["GroupsResolver"],
            userId: _services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__["CurrentUserIdResolver"]
        },
        data: { animation: 'fadeAnimation', title: 'Главная страница' }
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                _services_security_current_user_id_resolver__WEBPACK_IMPORTED_MODULE_4__["CurrentUserIdResolver"],
                _services_security_groups_resolver__WEBPACK_IMPORTED_MODULE_3__["GroupsResolver"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/company/company.module.ts":
/*!*******************************************!*\
  !*** ./src/app/company/company.module.ts ***!
  \*******************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/company/company-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/company/components/company/company.component.ts");
/* harmony import */ var _components_birthdays_informer_birthdays_informer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/birthdays-informer/birthdays-informer.component */ "./src/app/company/components/birthdays-informer/birthdays-informer.component.ts");
/* harmony import */ var _components_feedback_informer_feedback_informer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/feedback-informer/feedback-informer.component */ "./src/app/company/components/feedback-informer/feedback-informer.component.ts");
/* harmony import */ var _components_fillwidth_news_informer_fillwidth_news_informer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/fillwidth-news-informer/fillwidth-news-informer.component */ "./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.ts");
/* harmony import */ var _components_hotline_informer_hotline_informer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hotline-informer/hotline-informer.component */ "./src/app/company/components/hotline-informer/hotline-informer.component.ts");
/* harmony import */ var _components_industry_informer_industry_informer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/industry-informer/industry-informer.component */ "./src/app/company/components/industry-informer/industry-informer.component.ts");
/* harmony import */ var _components_key_events_key_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/key-events/key-events.component */ "./src/app/company/components/key-events/key-events.component.ts");
/* harmony import */ var _components_main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main-carousel/main-carousel.component */ "./src/app/company/components/main-carousel/main-carousel.component.ts");
/* harmony import */ var _components_media_carousel_media_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/media-carousel/media-carousel.component */ "./src/app/company/components/media-carousel/media-carousel.component.ts");
/* harmony import */ var _components_new_employees_informer_new_employees_informer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/new-employees-informer/new-employees-informer.component */ "./src/app/company/components/new-employees-informer/new-employees-informer.component.ts");
/* harmony import */ var _components_news_informer_news_informer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/news-informer/news-informer.component */ "./src/app/company/components/news-informer/news-informer.component.ts");
/* harmony import */ var _components_our_publications_informer_our_publications_informer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/our-publications-informer/our-publications-informer.component */ "./src/app/company/components/our-publications-informer/our-publications-informer.component.ts");
/* harmony import */ var _components_polls_informer_polls_informer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/polls-informer/polls-informer.component */ "./src/app/company/components/polls-informer/polls-informer.component.ts");
/* harmony import */ var _components_review_informer_review_informer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/review-informer/review-informer.component */ "./src/app/company/components/review-informer/review-informer.component.ts");
/* harmony import */ var _components_thanks_informer_thanks_informer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/thanks-informer/thanks-informer.component */ "./src/app/company/components/thanks-informer/thanks-informer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"],
                _components_birthdays_informer_birthdays_informer_component__WEBPACK_IMPORTED_MODULE_8__["BirthdaysInformerComponent"],
                _components_feedback_informer_feedback_informer_component__WEBPACK_IMPORTED_MODULE_9__["FeedbackInformerComponent"],
                _components_fillwidth_news_informer_fillwidth_news_informer_component__WEBPACK_IMPORTED_MODULE_10__["FillwidthNewsInformerComponent"],
                _components_hotline_informer_hotline_informer_component__WEBPACK_IMPORTED_MODULE_11__["HotlineInformerComponent"],
                _components_industry_informer_industry_informer_component__WEBPACK_IMPORTED_MODULE_12__["IndustryInformerComponent"],
                _components_key_events_key_events_component__WEBPACK_IMPORTED_MODULE_13__["KeyEventsComponent"],
                _components_main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_14__["MainCarouselComponent"],
                _components_media_carousel_media_carousel_component__WEBPACK_IMPORTED_MODULE_15__["MediaCarouselComponent"],
                _components_new_employees_informer_new_employees_informer_component__WEBPACK_IMPORTED_MODULE_16__["NewEmployeesInformerComponent"],
                _components_news_informer_news_informer_component__WEBPACK_IMPORTED_MODULE_17__["NewsInformerComponent"],
                _components_our_publications_informer_our_publications_informer_component__WEBPACK_IMPORTED_MODULE_18__["OurPublicationsInformerComponent"],
                _components_polls_informer_polls_informer_component__WEBPACK_IMPORTED_MODULE_19__["PollsInformerComponent"],
                _components_review_informer_review_informer_component__WEBPACK_IMPORTED_MODULE_20__["ReviewInformerComponent"],
                _components_thanks_informer_thanks_informer_component__WEBPACK_IMPORTED_MODULE_21__["ThanksInformerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _company_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/company/components/birthdays-informer/birthdays-informer.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/company/components/birthdays-informer/birthdays-informer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-birthday\" [class.no-elements]=\"employees && !employees.length\">\n  <div\n    class=\"m-birthday__item\"\n    #itemRef\n    *ngFor=\"let item of employees\"\n    [class.is-disable]=\"item.birthdayDay !== currentDay\"\n  >\n    <div class=\"inner\">\n      <div class=\"avatar\">\n        <app-user-thumb\n          [photo]=\"item.photo\"\n          [height]=\"item.birthdayDay !== currentDay ? '56px' : '90px'\"\n          [width]=\"item.birthdayDay !== currentDay ? '56px' : '90px'\"\n          [route]=\"item.profileRoute\"\n          [active]=\"item.reason == null || item.reason === ''\"\n        ></app-user-thumb>\n      </div>\n      <div class=\"info\">\n        <div class=\"date\">{{ item.birthdayTitle }}</div>\n        <div class=\"name\">{{ item.fullName }}</div>\n        <div class=\"position\">{{ item.positionName }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/birthdays-informer/birthdays-informer.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/company/components/birthdays-informer/birthdays-informer.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-birthday {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 20px;\n  padding-top: 30px;\n  overflow: auto;\n  box-sizing: border-box;\n  height: 100%; }\n\n.m-birthday.no-elements {\n    background-image: url(\"/assets/banners/no-banners.svg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n\n.m-birthday__item {\n  padding-bottom: 8%;\n  position: relative;\n  font-size: 0; }\n\n.m-birthday__item:last-child {\n    padding-bottom: 0; }\n\n.m-birthday__item.is-disable {\n    opacity: 0.5; }\n\n@media screen and (min-width: 1920px) {\n      .m-birthday__item.is-disable {\n        display: block; } }\n\n.m-birthday__item.is-disable .cover {\n      display: block; }\n\n.m-birthday__item .inner {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: collapse; }\n\n.m-birthday__item .inner .avatar,\n    .m-birthday__item .inner .info {\n      box-sizing: border-box;\n      display: table-cell;\n      vertical-align: middle;\n      width: auto; }\n\n.m-birthday__item .inner .avatar {\n      width: 90px;\n      text-align: center; }\n\n.m-birthday__item .inner .info {\n      padding-left: 20px; }\n\n.m-birthday__item .inner .info .date {\n        font-size: 16px;\n        text-transform: uppercase;\n        color: #050505;\n        margin-bottom: 5px; }\n\n.m-birthday__item .inner .info .name {\n        font-size: 14px;\n        font-weight: 600;\n        color: #050505;\n        margin-bottom: 10px; }\n\n.m-birthday__item .inner .info .position {\n        display: block;\n        display: -webkit-box;\n        font-size: 14px;\n        line-height: 17px;\n        max-height: 34px;\n        -webkit-line-clamp: 2;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/company/components/birthdays-informer/birthdays-informer.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/company/components/birthdays-informer/birthdays-informer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BirthdaysInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdaysInformerComponent", function() { return BirthdaysInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BirthdaysInformerComponent = /** @class */ (function () {
    function BirthdaysInformerComponent(route, employeesFactory) {
        this.route = route;
        this.employeesFactory = employeesFactory;
        this.employees = null;
        this.currentDay = new Date().getDate();
    }
    BirthdaysInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employees = this.route.snapshot.data.birthdays;
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var start = new Date().getDate();
        var finish = new Date(year, month, 0).getDate();
        this.employeesFactory.getPagedByMonthBirthday(month)
            // .getItems({
            //   filter: `slBirthdayMonth eq ${month} and slBirthdayDay ge ${start} and slBirthdayDay le ${finish}`,
            //   orderBy: [['slBirthdayDay', true], ['slFullName', true]],
            //   top: 5000
            // })
            .subscribe(function (birthdays) { return _this.employees = birthdays.items; });
    };
    BirthdaysInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-birthdays-informer',
            template: __webpack_require__(/*! ./birthdays-informer.component.html */ "./src/app/company/components/birthdays-informer/birthdays-informer.component.html"),
            styles: [__webpack_require__(/*! ./birthdays-informer.component.scss */ "./src/app/company/components/birthdays-informer/birthdays-informer.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], BirthdaysInformerComponent);
    return BirthdaysInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/company/company.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/company/components/company/company.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__row is-1dot4fr is-height\">\n  <div class=\"content\">\n    <div class=\"l-home__columns\">\n      <div class=\"l-home__column\">\n        <div class=\"l-home__informer not-padding\">\n          <div class=\"l-home__informer-content\">\n            <div class=\"content\"><app-main-carousel></app-main-carousel></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"l-home__row is-4fr\">\n  <div class=\"content\">\n    <div class=\"l-home__columns\">\n      <div class=\"l-home__column is-2fr\">\n        <div class=\"l-home__informer not-padding transparent\">\n          <app-news-informer></app-news-informer>\n        </div>\n      </div>\n      <div class=\"l-home__column is-1fr is-height\">\n        <div class=\"l-home__informer x2-padding\">\n          <div class=\"l-home__informer-controls\">\n            <div class=\"l-home__informer-title\">В отрасли</div>\n          </div>\n          <div class=\"l-home__informer-content\">\n            <div class=\"l-home__informer\">\n              <div class=\"l-home__informer-content\">\n                <div class=\"content\">\n                  <app-review-informer></app-review-informer>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"l-home__row is-5dot88fr\" style=\"display: none\">\n  <div class=\"content\">\n    <app-fillwidth-news-informer></app-fillwidth-news-informer>\n  </div>\n</div>\n<div class=\"l-home__row is-2dot44fr\">\n  <div class=\"content\">\n    <div class=\"l-home__columns\">\n      <div class=\"l-home__column not-border transparent is-2fr\">\n        <div class=\"l-home__informers two-columns\">\n          <div class=\"l-home__informer\">\n            <div class=\"l-home__informer-controls\">\n              <div class=\"l-home__informer-title\">Медиагалерея</div>\n              <div class=\"l-home__informer-action\">\n                <a [routerLink]=\"['/media']\">Все медиа</a>\n              </div>\n            </div>\n            <div class=\"l-home__informer-content\">\n              <app-media-carousel></app-media-carousel>\n              <app-industry-informer></app-industry-informer>\n            </div>\n          </div>\n          <div class=\"l-home__informer\">\n            <div class=\"l-home__informer-controls\">\n            </div>\n            <div class=\"l-home__informer-content\">\n              <app-feedback-informer></app-feedback-informer>\n              <app-hotline-informer></app-hotline-informer>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"l-home__column is-1fr is-height\">\n        <div class=\"l-home__informers\">\n          <div class=\"l-home__informer not-border\">\n            <div class=\"l-home__informer-controls\">\n              <div class=\"l-home__informer-title\">Опрос</div>\n              <div class=\"l-home__informer-action\">\n                <a [routerLink]=\"['/polls']\">Все опросы</a>\n              </div>\n            </div>\n            <div class=\"l-home__informer-content\">\n              <div class=\"content\">\n                <app-polls-informer></app-polls-informer>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"l-home__row is-2dot91fr\">\n  <div class=\"content\">\n    <div class=\"l-home__informer-controls\">\n      <div class=\"l-home__informer-title\">\n        Наши издания\n      </div>\n    </div>\n    <div class=\"l-home__informer-content\">\n      <div class=\"content\">\n        <app-our-publications-informer></app-our-publications-informer>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/company/company.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/company/components/company/company.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-page {\n  background-color: #F7F7F7; }\n\n.l-home__row {\n  margin-bottom: 3%; }\n\n.l-home__row.is-1fr {\n    position: relative; }\n\n.l-home__row.is-1fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 20%; }\n\n.l-home__row.is-1fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2fr {\n    position: relative; }\n\n.l-home__row.is-2fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 27.02702703%; }\n\n.l-home__row.is-2fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-4fr {\n    position: relative; }\n\n.l-home__row.is-4fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 83.33333333%; }\n\n.l-home__row.is-4fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__row.is-4fr {\n        position: relative; }\n        .l-home__row.is-4fr:before {\n          display: block;\n          content: \" \";\n          width: 100%;\n          padding-bottom: 86.95652174%; }\n        .l-home__row.is-4fr > .content {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0; } }\n\n.l-home__row.is-5dot88fr {\n    position: relative; }\n\n.l-home__row.is-5dot88fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 17.00680272%; }\n\n.l-home__row.is-5dot88fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-1dot4fr {\n    position: relative; }\n\n.l-home__row.is-1dot4fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 28.57142857%; }\n\n.l-home__row.is-1dot4fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2dot44fr {\n    position: relative; }\n\n.l-home__row.is-2dot44fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 41.66666667%; }\n\n.l-home__row.is-2dot44fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row.is-2dot91fr {\n    position: relative; }\n\n.l-home__row.is-2dot91fr:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 34.36426117%; }\n\n.l-home__row.is-2dot91fr > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__row:last-child {\n    margin-bottom: 0; }\n\n.l-home__columns {\n  height: 1px;\n  min-height: 100%;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse; }\n\n.l-home__column {\n  display: table-cell;\n  vertical-align: top;\n  box-sizing: border-box;\n  height: 100%;\n  position: relative; }\n\n.l-home__column.is-2fr {\n    width: 66%; }\n\n.l-home__column.is-2fr + .is-1fr {\n      padding-left: 35px;\n      padding-right: 0; }\n\n@media screen and (max-width: 1440px) {\n        .l-home__column.is-2fr + .is-1fr {\n          padding-left: 25px; } }\n\n.l-home__column.is-2fr .x2-padding .l-home__informer-content > .content {\n      padding: 4.75%; }\n\n.l-home__column.is-1fr {\n    width: 34%;\n    padding-right: 35px; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__column.is-1fr {\n        padding-right: 25px; } }\n\n.l-home__column.is-max-height > * {\n    height: 100%;\n    display: block; }\n\n.l-home__informers {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  height: 100%; }\n\n.l-home__informer {\n  height: 100%;\n  box-sizing: border-box; }\n\n.l-home__informer + .l-home__informer {\n    margin-top: 11%; }\n\n.two-columns .l-home__informer {\n    width: 50%;\n    padding-top: 0;\n    display: table-cell;\n    vertical-align: top;\n    padding-right: 17.5px; }\n\n@media screen and (max-width: 1440px) {\n      .two-columns .l-home__informer {\n        padding-right: 12.5px; } }\n\n.two-columns .l-home__informer + .l-home__informer {\n      padding-right: 0;\n      padding-left: 17.5px; }\n\n@media screen and (max-width: 1440px) {\n        .two-columns .l-home__informer + .l-home__informer {\n          padding-left: 12.5px; } }\n\n.is-height .l-home__informer {\n    height: 100%; }\n\n.l-home__informer.align-bottom {\n    position: absolute;\n    left: 35px;\n    bottom: 0;\n    right: 0; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__informer.align-bottom {\n        left: 25px; } }\n\n.l-home__informer-controls {\n  display: table;\n  table-layout: auto;\n  width: 100%;\n  height: 45px;\n  border-collapse: collapse; }\n\n.l-home__informer-controls + .l-home__informer-content {\n    height: calc(100% - 45px); }\n\n.l-home__informer-title,\n.l-home__informer-action,\n.l-home__informer-tabs {\n  display: table-cell;\n  vertical-align: top; }\n\n.l-home__informer-title > *,\n  .l-home__informer-action > *,\n  .l-home__informer-tabs > * {\n    display: block;\n    height: 100%; }\n\n.l-home__informer-title {\n  color: #000;\n  font-size: 26px;\n  line-height: 28px; }\n\n@media screen and (max-width: 1440px) {\n    .l-home__informer-title {\n      font-size: 18px;\n      line-height: 20px; } }\n\n.l-home__informer-action {\n  text-align: right;\n  padding-right: 15px; }\n\n.l-home__informer-action a {\n    display: block;\n    text-decoration: none;\n    color: #dd1e25;\n    font-size: 16px;\n    line-height: 33px; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__informer-action a {\n        font-size: 14px;\n        line-height: 20px; } }\n\n.l-home__informer-content {\n  height: 100%;\n  position: relative; }\n\n.l-home__informer-content:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: transparent;\n    z-index: -1; }\n\n.l-home__informer-content > .content {\n    background-color: #fff;\n    border: 1px solid #EFEFF0;\n    box-sizing: border-box;\n    height: 100%; }\n\n.l-home__informer-content > .content > * {\n      height: 100%;\n      display: block; }\n\n.not-padding .l-home__informer-content > .content {\n      padding: 0; }\n\n.not-border .l-home__informer-content > .content {\n      border: none; }\n\n.transparent .l-home__informer-content > .content {\n      background-color: transparent;\n      border: none; }\n\n.vertical-padding .l-home__informer-content > .content {\n      padding: 20px 0; }\n\n.x2-padding .l-home__informer-content > .content {\n      padding: 9.5%;\n      padding-bottom: 0; }\n\n.not-fill .l-home__informer-content > .content {\n      height: auto; }\n\n.l-home__media,\n.l-home__polls {\n  width: 50%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 40px; }\n\n.l-home__feedback,\n.l-home__hotline {\n  background-color: #DEDFE0;\n  border: 1px solid #EFEFF0;\n  border-left: 3px solid #dd1e25;\n  padding: 7% 9%;\n  background-repeat: no-repeat;\n  background-position: right 10% top 20%;\n  box-sizing: border-box;\n  height: 100%;\n  position: relative; }\n\n.l-home__feedback .title,\n  .l-home__hotline .title {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 21px; }\n\n@media (min-width: 1440px) {\n      .l-home__feedback .title,\n      .l-home__hotline .title {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 3px); } }\n\n@media (min-width: 1920px) {\n      .l-home__feedback .title,\n      .l-home__hotline .title {\n        font-size: 22px;\n        line-height: 27px; } }\n\n.l-home__feedback .description,\n  .l-home__hotline .description {\n    font-size: 16px;\n    line-height: 21px; }\n\n@media (min-width: 1440px) {\n      .l-home__feedback .description,\n      .l-home__hotline .description {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 3px); } }\n\n@media (min-width: 1920px) {\n      .l-home__feedback .description,\n      .l-home__hotline .description {\n        font-size: 22px;\n        line-height: 27px; } }\n\n.l-home__feedback .send,\n  .l-home__hotline .send {\n    position: absolute;\n    left: 9%;\n    bottom: 10%; }\n\n.l-home__feedback .send input,\n    .l-home__hotline .send input {\n      font-size: 18px;\n      color: #fff;\n      background-color: #dd1e25;\n      border: none;\n      border-radius: 5px;\n      padding: 12% 24%;\n      box-sizing: border-box; }\n\n.l-review__item + .l-review__item {\n  margin-top: 20px; }\n\n.l-home__feedback {\n  padding: 5% 7%;\n  background-image: url(/assets/icons/icon-feedback-background.svg);\n  background-size: 10%;\n  background-position: right 5% top 20%; }\n\n.l-home__feedback .title {\n    margin-bottom: 20px; }\n\n.l-home__feedback .send {\n    left: 7%;\n    bottom: 10%; }\n\n.l-home__hotline {\n  background-image: url(/assets/icons/icon-hotline-background.svg);\n  background-size: 20%; }\n\n.l-home__hotline .title {\n    max-width: 75%; }\n\n.m-tabs {\n  height: 100%;\n  font-size: 0; }\n\n.m-tabs__line {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.is-inline .m-tabs__line {\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n\n.tab-size-small .m-tabs__line {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n\n.m-tabs__item {\n  height: 100%;\n  display: inline-block;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #000;\n  padding: 0 10px;\n  border: none;\n  border-bottom: 7px solid transparent;\n  box-sizing: border-box;\n  margin: 0;\n  background-color: transparent;\n  cursor: pointer; }\n\n.tab-size-small .m-tabs__item {\n    text-transform: initial;\n    color: #768692;\n    border-bottom-width: 3px; }\n\n.tab-size-small .m-tabs__item.is-current-item {\n      color: #000;\n      font-weight: 400;\n      border-color: #dd1e25; }\n\n.m-tabs__item.is-current-item {\n    font-weight: 600;\n    border-color: #fda909; }\n\n.theme-black .m-tabs__item.is-current-item {\n      border-color: #da402b; }\n\n.theme-yellow .m-tabs__item.is-current-item {\n      border-color: #ffee00; }\n\n.m-tabs__item:focus {\n    outline: none; }\n"

/***/ }),

/***/ "./src/app/company/components/company/company.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/company/components/company/company.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "./src/app/services/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.sidebarService.handleSetSettings({ showSidebar: true, bgColor: '#f7f7f7' });
    }
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/company/components/company/company.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/components/feedback-informer/feedback-informer.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/company/components/feedback-informer/feedback-informer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__feedback\">\n  <div class=\"admin-controls\">\n    <app-admin-controls [canBeDeleted]=\"false\" (create)=\"create()\" (edit)=\"create()\"></app-admin-controls>\n  </div>\n  <div class=\"title\">\n    Твой голос\n  </div>\n  <div class=\"description\">\n    Металлоинвест – компания, где все сотрудники знают, что они имеют значение\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/feedback-informer/feedback-informer.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/company/components/feedback-informer/feedback-informer.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-home__feedback {\n  background-color: #DEDFE0;\n  border-left: 3px solid #dd1e25;\n  background-repeat: no-repeat;\n  background-position: right 10% top 10%;\n  box-sizing: border-box;\n  height: 46% !important;\n  position: relative;\n  padding: 5% 7%;\n  background-image: url(/assets/icons/icon-feedback-background.svg);\n  background-size: 20%;\n  margin-bottom: 10%;\n  cursor: pointer; }\n\n.l-home__feedback .title {\n    font-weight: bold;\n    font-size: 16px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 21px;\n    max-height: 42px;\n    margin-top: 20%;\n    margin-bottom: 5%; }\n\n@media (min-width: 1440px) {\n      .l-home__feedback .title {\n        font-size: calc( 0.0125 * 100vw + -2px);\n        line-height: calc( 0.0125 * 100vw + 3px);\n        max-height: calc( 0.01458333 * 100vw + 21px);\n        -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n      .l-home__feedback .title {\n        font-size: 22px;\n        line-height: 27px;\n        max-height: 54px; } }\n\n.l-home__feedback .description {\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 17px;\n    max-height: 34px; }\n\n@media (min-width: 1440px) {\n      .l-home__feedback .description {\n        font-size: calc( 0.00833333 * 100vw + 0px);\n        line-height: calc( 0.00833333 * 100vw + 5px);\n        max-height: calc( 0.00625 * 100vw + 25px);\n        -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n      .l-home__feedback .description {\n        font-size: 16px;\n        line-height: 21px;\n        max-height: 42px; } }\n"

/***/ }),

/***/ "./src/app/company/components/feedback-informer/feedback-informer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/company/components/feedback-informer/feedback-informer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FeedbackInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackInformerComponent", function() { return FeedbackInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback/feedback.service */ "./src/app/services/feedback/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackInformerComponent = /** @class */ (function () {
    function FeedbackInformerComponent(feedbackService, sharepointService, zone) {
        this.feedbackService = feedbackService;
        this.sharepointService = sharepointService;
        this.zone = zone;
    }
    FeedbackInformerComponent.prototype.feedbackStatusUpdate = function (status) {
        var _this = this;
        this.zone.run(function () {
            if (status) {
                _this.descriptionText.nativeElement.innerText = 'Спасибо! Ваш вопрос успешно отправлен. Мы ответим в скором времени';
                _this.buttonSend.nativeElement.value = 'Написать еще';
            }
            if (!status) {
                _this.descriptionText.nativeElement.innerText = 'Ваш вопрос не удалось отправить получателю.';
            }
        });
    };
    FeedbackInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackService.emailSendEvent.subscribe(function (status) {
            _this.feedbackStatusUpdate(status);
        });
    };
    FeedbackInformerComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + '/Lists/slQuestions/NewForm.aspx?Source='
            + encodeURIComponent(window.location.href);
    };
    FeedbackInformerComponent.prototype.edit = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + "/Lists/slQuestions";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('descriptionText'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedbackInformerComponent.prototype, "descriptionText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buttonSend'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedbackInformerComponent.prototype, "buttonSend", void 0);
    FeedbackInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-informer',
            template: __webpack_require__(/*! ./feedback-informer.component.html */ "./src/app/company/components/feedback-informer/feedback-informer.component.html"),
            styles: [__webpack_require__(/*! ./feedback-informer.component.scss */ "./src/app/company/components/feedback-informer/feedback-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__["SharepointService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], FeedbackInformerComponent);
    return FeedbackInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__fullwidth-news\">\n  <div class=\"image\" style=\"background-image: url(assets/banners/news-banner-5.png)\">\n    <div class=\"content\">\n    </div>\n  </div>\n  <div class=\"info\">\n    <div class=\"title\">\n      Новое предприятие\n    </div>\n    <div class=\"description\">\n      На Первоуральском новотрубном заводе состоялось\n      открытие нового предприятия\n    </div>\n    <div class=\"goto\">\n      <input type=\"button\" value=\"Подробнее\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-home__fullwidth-news {\n  width: 100%;\n  height: 100%;\n  background-color: #DEDFE0;\n  font-size: 0px; }\n\n.l-home__fullwidth-news .image {\n    display: inline-block;\n    width: 31.5%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative; }\n\n.l-home__fullwidth-news .image:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 54.34782609%; }\n\n.l-home__fullwidth-news .image > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__fullwidth-news .image .content {\n      background: linear-gradient(to bottom, rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.l-home__fullwidth-news .info {\n    display: inline-block;\n    width: 68.5%;\n    height: 100%;\n    vertical-align: top;\n    padding: 2% 3%;\n    box-sizing: border-box;\n    position: relative; }\n\n.l-home__fullwidth-news .info .title {\n      color: #050505;\n      font-weight: bold;\n      margin-bottom: 30px;\n      font-size: 26px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 31px;\n      max-height: 31px; }\n\n@media (min-width: 1440px) {\n        .l-home__fullwidth-news .info .title {\n          font-size: calc( 0.01666667 * 100vw + 2px);\n          line-height: calc( 0.01666667 * 100vw + 7px);\n          max-height: calc( 0.01666667 * 100vw + 7px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .l-home__fullwidth-news .info .title {\n          font-size: 34px;\n          line-height: 39px;\n          max-height: 39px; } }\n\n@media screen and (max-width: 1440px) {\n        .l-home__fullwidth-news .info .title {\n          margin-bottom: 15px; } }\n\n.l-home__fullwidth-news .info .description {\n      color: #050505;\n      max-width: 70%;\n      display: block;\n      display: -webkit-box;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 21px;\n      max-height: 42px; }\n\n@media (min-width: 1440px) {\n        .l-home__fullwidth-news .info .description {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 3px);\n          max-height: calc( 0.01458333 * 100vw + 21px);\n          -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n        .l-home__fullwidth-news .info .description {\n          font-size: 22px;\n          line-height: 27px;\n          max-height: 54px; } }\n\n.l-home__fullwidth-news .info .goto {\n      position: absolute;\n      right: 5%;\n      bottom: 14%; }\n\n.l-home__fullwidth-news .info .goto input {\n        font-size: 18px;\n        color: #fff;\n        background-color: #dd1e25;\n        border: none;\n        border-radius: 3px;\n        padding: 14px 30px;\n        box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FillwidthNewsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillwidthNewsInformerComponent", function() { return FillwidthNewsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FillwidthNewsInformerComponent = /** @class */ (function () {
    function FillwidthNewsInformerComponent() {
    }
    FillwidthNewsInformerComponent.prototype.ngOnInit = function () {
    };
    FillwidthNewsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fillwidth-news-informer',
            template: __webpack_require__(/*! ./fillwidth-news-informer.component.html */ "./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.html"),
            styles: [__webpack_require__(/*! ./fillwidth-news-informer.component.scss */ "./src/app/company/components/fillwidth-news-informer/fillwidth-news-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FillwidthNewsInformerComponent);
    return FillwidthNewsInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/hotline-informer/hotline-informer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/company/components/hotline-informer/hotline-informer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__hotline\">\n  <div class=\"image\" style=\"background-image: url(assets/banners/banner-business-system.png)\">\n    <div class=\"content\"></div>\n  </div>\n  <div class=\"title\" style=\"background-image: url(assets/banners/banner-business-system-title.png)\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/company/components/hotline-informer/hotline-informer.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/company/components/hotline-informer/hotline-informer.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-home__hotline {\n  height: 46% !important;\n  position: relative;\n  cursor: pointer; }\n\n.l-home__hotline .image {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative; }\n\n.l-home__hotline .image:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 50%; }\n\n.l-home__hotline .image > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__hotline .image .content {\n      background: linear-gradient(rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0), rgba(5, 5, 5, 0.7)); }\n\n.l-home__hotline .title {\n    position: absolute;\n    left: 15px;\n    bottom: 15px;\n    width: 90%;\n    height: 50%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center; }\n"

/***/ }),

/***/ "./src/app/company/components/hotline-informer/hotline-informer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/company/components/hotline-informer/hotline-informer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HotlineInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotlineInformerComponent", function() { return HotlineInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotlineInformerComponent = /** @class */ (function () {
    function HotlineInformerComponent() {
    }
    HotlineInformerComponent.prototype.ngOnInit = function () {
    };
    HotlineInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotline-informer',
            template: __webpack_require__(/*! ./hotline-informer.component.html */ "./src/app/company/components/hotline-informer/hotline-informer.component.html"),
            styles: [__webpack_require__(/*! ./hotline-informer.component.scss */ "./src/app/company/components/hotline-informer/hotline-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HotlineInformerComponent);
    return HotlineInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/industry-informer/industry-informer.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/company/components/industry-informer/industry-informer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__industry\">\n  <div class=\"image\" style=\"background-image: url(assets/banners/banner-industry.png)\">\n    <div class=\"content\"></div>\n  </div>\n  <div class=\"title\" style=\"background-image: url(assets/banners/banner-industry-title.png)\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/industry-informer/industry-informer.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/company/components/industry-informer/industry-informer.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-home__industry {\n  height: 46% !important;\n  position: relative;\n  cursor: pointer; }\n\n.l-home__industry .image {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative; }\n\n.l-home__industry .image:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 50%; }\n\n.l-home__industry .image > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-home__industry .image .content {\n      background: linear-gradient(rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0), rgba(5, 5, 5, 0.7)); }\n\n.l-home__industry .title {\n    position: absolute;\n    left: 15px;\n    bottom: 15px;\n    width: 60%;\n    height: 50%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center; }\n"

/***/ }),

/***/ "./src/app/company/components/industry-informer/industry-informer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/company/components/industry-informer/industry-informer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IndustryInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryInformerComponent", function() { return IndustryInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndustryInformerComponent = /** @class */ (function () {
    function IndustryInformerComponent() {
    }
    IndustryInformerComponent.prototype.ngOnInit = function () {
    };
    IndustryInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-industry-informer',
            template: __webpack_require__(/*! ./industry-informer.component.html */ "./src/app/company/components/industry-informer/industry-informer.component.html"),
            styles: [__webpack_require__(/*! ./industry-informer.component.scss */ "./src/app/company/components/industry-informer/industry-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndustryInformerComponent);
    return IndustryInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/key-events/key-events.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/company/components/key-events/key-events.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-key-event\" *ngIf=\"keyEvents && keyEvents.length > 0\">\n  <div class=\"header\">Ключевые события</div>\n  <div class=\"body\">\n    <ngsl-carousel [dots]=\"false\" #ngslCarousel=\"ngsl-carousel\" [arrows]=\"false\" [(currentSlide)]=\"currentSlide\"\n      [isControl]=\"true\">\n      <ng-container *ngslCarouselControl>\n        <div class=\"admin-controls\">\n          <app-admin-controls [item]=\"keyEvents.length > currentSlide ? keyEvents[currentSlide] : null\" (create)=\"create()\"\n            (edit)=\"edit($event)\" (remove)=\"remove($event)\" [canBeDeleted]=\"keyEvents.length > currentSlide\"\n            [canBeEdited]=\"keyEvents.length > currentSlide\">\n          </app-admin-controls>\n        </div>\n      </ng-container>\n      <ng-container *ngFor=\"let item of keyEvents; let i = index\">\n        <ng-container *ngslCarouselItem>\n          <div class=\"m-key-event-card\">\n            <div class=\"date\">{{ item.eventDateTitle }}</div>\n            <div class=\"description\">{{ item.textEvent }}</div>\n          </div>\n        </ng-container>\n      </ng-container>\n    </ngsl-carousel>\n    <ng-container *ngIf=\"keyEvents && !keyEvents.length\">\n      <div class=\"m-key-event-card\">\n        <div class=\"description\">Нет ключевых событий</div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"footer\" *ngIf=\"keyEvents && keyEvents.length\">\n    <div class=\"text\">{{ ngslCarousel.currentSlide + 1 }} / {{ keyEvents.length }}</div>\n    <div class=\"arrow\" *ngIf=\"keyEvents.length > 1\">\n      <input type=\"button\" (click)=\"ngslCarousel.prev()\" />\n      <input type=\"button\" (click)=\"ngslCarousel.next()\" />\n    </div>\n  </div>\n</div>\n\n<div class=\"m-key-event\" *ngIf=\"keyEvents && keyEvents.length == 0\">\n  <div class=\"header\">Ключевые события</div>\n  <div class=\"body\">\n    <div class=\"m-key-event-card\">\n      <div class=\"admin-controls\">\n        <app-admin-controls (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\" [canBeDeleted]=\"keyEvents.length > currentSlide\"\n          [canBeEdited]=\"keyEvents.length > currentSlide\"></app-admin-controls>\n      </div>\n      <div class=\"description\">Нет ключевых событий</div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div class=\"text\"></div>\n    <div class=\"arrow\"></div>\n  </div>\n</div>\n\n<div class=\"m-key-event-skeleton\" *ngIf=\"keyEvents == null\">\n  <div class=\"header\">\n    <div class=\"line\"></div>\n  </div>\n  <div class=\"body\">\n    <div class=\"m-key-event-card-skeleton\">\n      <div class=\"date\">\n        <div class=\"line\"></div>\n      </div>\n      <div class=\"description\">\n        <div class=\"line\"></div>\n        <div class=\"line\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/key-events/key-events.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/company/components/key-events/key-events.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-key-event {\n  background-color: #fff;\n  height: 100%;\n  position: relative; }\n\n.m-key-event .header {\n    height: 25%;\n    font-size: 16px;\n    font-weight: 600;\n    padding: 5% 7%;\n    box-sizing: border-box; }\n\n@media (min-width: 1440px) {\n      .m-key-event .header {\n        font-size: 22px;\n        font-size: calc( 0.0125 * 100vw + -2px); } }\n\n@media (min-width: 1920px) {\n      .m-key-event .header {\n        font-size: 22px; } }\n\n.m-key-event .body {\n    height: 55%;\n    box-sizing: border-box;\n    background-color: #DEDFE0; }\n\n.m-key-event .footer {\n    height: 20%;\n    box-sizing: border-box;\n    font-size: 16px;\n    text-align: center;\n    position: relative; }\n\n@media (min-width: 1440px) {\n      .m-key-event .footer {\n        font-size: calc( 0.0125 * 100vw + -2px); } }\n\n@media (min-width: 1920px) {\n      .m-key-event .footer {\n        font-size: 22px; } }\n\n.m-key-event .footer .text {\n      width: 100%;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.m-key-event .footer input[type=\"button\"] {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      height: 17px;\n      width: 17px;\n      border: none;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain;\n      cursor: pointer;\n      background-color: transparent;\n      background-image: url(/assets/icons/icon-arrow-right-gray-flat.svg); }\n\n.m-key-event .footer input[type=\"button\"]:focus {\n        outline: none; }\n\n.m-key-event .footer input[type=\"button\"]:first-child {\n        left: 10%;\n        -webkit-transform: translateY(-50%) rotate(-180deg);\n            -ms-transform: translateY(-50%) rotate(-180deg);\n                transform: translateY(-50%) rotate(-180deg); }\n\n.m-key-event .footer input[type=\"button\"]:last-child {\n        right: 10%; }\n\n.m-key-event-skeleton {\n  background-color: #fff;\n  height: 100%;\n  position: relative; }\n\n.m-key-event-skeleton .header {\n    height: 25%;\n    font-weight: 600;\n    padding: 5% 7%;\n    box-sizing: border-box; }\n\n.m-key-event-skeleton .header .line {\n      width: 55%;\n      height: 16px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-key-event-skeleton .body {\n    height: 55%;\n    box-sizing: border-box;\n    background-color: #DEDFE0; }\n\n.m-key-event-skeleton .footer {\n    height: 20%;\n    box-sizing: border-box;\n    font-size: 16px;\n    text-align: center;\n    position: relative; }\n\n@media (min-width: 1440px) {\n      .m-key-event-skeleton .footer {\n        font-size: calc( 0.0125 * 100vw + -2px); } }\n\n@media (min-width: 1920px) {\n      .m-key-event-skeleton .footer {\n        font-size: 22px; } }\n\n.m-key-event-skeleton .footer .text {\n      width: 100%;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.m-key-event-skeleton .footer .text .line {\n        width: 35px;\n        height: 14px;\n        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n        background-size: 600px;\n        -webkit-animation: shine-avatar 2s infinite ease-out;\n                animation: shine-avatar 2s infinite ease-out; }\n\n.m-key-event-card {\n  background-color: #fff;\n  height: 100%;\n  padding: 5% 7%;\n  padding-bottom: 7%;\n  box-sizing: border-box;\n  background-color: #DEDFE0;\n  position: relative; }\n\n.m-key-event-card .date {\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #dd1e25;\n    margin-bottom: 3%; }\n\n.m-key-event-card .date .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-key-event-card .description {\n    font-size: 14px;\n    line-height: 24px;\n    max-height: 48px;\n    display: block;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 2;\n    overflow: hidden; }\n\n.m-key-event-card-skeleton {\n  background-color: #fff;\n  height: 100%;\n  padding: 5% 7%;\n  padding-bottom: 7%;\n  box-sizing: border-box;\n  background-color: #DEDFE0; }\n\n.m-key-event-card-skeleton .date {\n    margin-bottom: 3%; }\n\n.m-key-event-card-skeleton .date .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-key-event-card-skeleton .description {\n    font-size: 14px;\n    line-height: 24px;\n    max-height: 48px; }\n\n.m-key-event-card-skeleton .description .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.m-key-event-card-skeleton .description .line + .line {\n        margin-top: 5px;\n        width: 55%; }\n"

/***/ }),

/***/ "./src/app/company/components/key-events/key-events.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/company/components/key-events/key-events.component.ts ***!
  \***********************************************************************/
/*! exports provided: KeyEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyEventsComponent", function() { return KeyEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_services_key_events_key_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/key-events/key-events.service */ "./src/app/services/key-events/key-events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyEventsComponent = /** @class */ (function () {
    function KeyEventsComponent(sharepointService, keyeventsService) {
        this.sharepointService = sharepointService;
        this.keyeventsService = keyeventsService;
        this.keyEvents = [];
        this.currentSlide = 0;
    }
    KeyEventsComponent.prototype.ngOnInit = function () {
        this.load();
    };
    KeyEventsComponent.prototype.load = function () {
        var _this = this;
        var currentDate = new Date().toISOString();
        this.keyeventsService.getItems({
            filter: "(slShowDate le datetime'" + currentDate + "') and (slArchiveDate gt datetime'" + currentDate + "')",
            top: 3
        }).subscribe(function (keyEvents) {
            _this.currentSlide = 0;
            _this.keyEvents = keyEvents;
        });
    };
    KeyEventsComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + '/Lists/slKeyEvents/NewForm.aspx?Source='
            + encodeURIComponent(window.location.href);
    };
    KeyEventsComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + ("/Lists/slKeyEvents/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    KeyEventsComponent.prototype.remove = function (item) {
        var _this = this;
        this.keyeventsService.recycleItem(item)
            .subscribe(function () { return _this.load(); });
    };
    KeyEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-key-events',
            template: __webpack_require__(/*! ./key-events.component.html */ "./src/app/company/components/key-events/key-events.component.html"),
            styles: [__webpack_require__(/*! ./key-events.component.scss */ "./src/app/company/components/key-events/key-events.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__["SharepointService"],
            src_app_services_key_events_key_events_service__WEBPACK_IMPORTED_MODULE_2__["KeyEventsService"]])
    ], KeyEventsComponent);
    return KeyEventsComponent;
}());



/***/ }),

/***/ "./src/app/company/components/main-carousel/main-carousel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/main-carousel/main-carousel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <ngsl-carousel #ngslCarousel=\"ngsl-carousel\" [(currentSlide)]=\"currentSlide\" [isControl]=\"true\" [trackIsUp]=\"carouselIsUp\"\n    [infinity]=\"true\" [timing]=\"600\" [autoPlay]=\"true\" [autoPlayTiming]=\"10000\">\n    <ng-container *ngslCarouselControl>\n      <div class=\"admin-controls\">\n        <app-admin-controls [item]=\"banners.length > currentSlide ? banners[currentSlide] : null\" (create)=\"create()\"\n          (edit)=\"edit($event)\" (remove)=\"remove($event)\" [canBeDeleted]=\"banners.length > currentSlide\" [canBeEdited]=\"banners.length > currentSlide\"\n          (activatedControls)=\"carouselToFront($event)\">\n        </app-admin-controls>\n      </div>\n    </ng-container>\n    <ng-container *ngFor=\"let item of banners\">\n      <ng-container *ngslCarouselDot>\n        <div class=\"content\"></div>\n      </ng-container>\n      <ng-container *ngslCarouselItem>\n        <div class=\"m-carousel-card\" [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(item.imageUrl) + ')' }\">\n          <div class=\"content\">\n            <div class=\"vertical-align\">\n              <div class=\"box\">\n                <a href=\"{{item.url}}\" target=\"_blank\" class=\"title\" appNgslDotdotdot>\n                  {{ item.title }}\n                </a>\n                <a href=\"{{item.url}}\" target=\"_blank\" class=\"description\" appNgslDotdotdot>\n                  {{ item.text }}\n                </a>\n                <div class=\"goto\">\n                  <input type=\"button\" value=\"Подробнее\" (click)=\"goTo(item)\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ngsl-carousel>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/company/components/main-carousel/main-carousel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/main-carousel/main-carousel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-carousel-card {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%; }\n\n.m-carousel-card .content {\n    box-sizing: border-box !important;\n    border-bottom: 4px solid #dd1e25;\n    padding: 0 85px;\n    height: 100%;\n    background: linear-gradient(to bottom, rgba(5, 5, 5, 0.7), rgba(88, 88, 88, 0)); }\n\n.m-carousel-card .content > .vertical-align {\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      height: 100%;\n      border-collapse: collapse; }\n\n.m-carousel-card .content > .vertical-align .box {\n        display: table-cell;\n        vertical-align: middle; }\n\n.m-carousel-card .vertical-align {\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    height: 100%;\n    border-collapse: collapse; }\n\n.m-carousel-card .box {\n    display: table-cell;\n    vertical-align: middle; }\n\n.m-carousel-card .title {\n    display: block;\n    font-size: 34px;\n    line-height: 38px;\n    max-height: 76px;\n    text-decoration: none;\n    color: #fff;\n    font-weight: 600;\n    margin-bottom: 32px;\n    max-width: 90%; }\n\n@media screen and (max-width: 1440px) {\n      .m-carousel-card .title {\n        font-size: 28px;\n        line-height: 32px;\n        max-height: 64px;\n        margin-bottom: 15px; } }\n\n.m-carousel-card .description {\n    display: block;\n    font-size: 22px;\n    line-height: 26px;\n    text-decoration: none;\n    color: #F7F7F7;\n    max-width: 500px;\n    margin-bottom: 40px;\n    max-height: 78px; }\n\n@media screen and (max-width: 1440px) {\n      .m-carousel-card .description {\n        font-size: 18px;\n        line-height: 22px;\n        margin-bottom: 20px;\n        max-height: 66px; } }\n\n.m-carousel-card .goto input {\n    font-size: 18px;\n    line-height: 50px;\n    height: 50px;\n    color: #fff;\n    background-color: #dd1e25;\n    border: none;\n    border-radius: 3px;\n    padding: 0 30px;\n    box-sizing: border-box; }\n\n@media screen and (max-width: 1440px) {\n      .m-carousel-card .goto input {\n        padding: 0 20px;\n        font-size: 14px;\n        height: 35px;\n        line-height: 35px; } }\n\n.skeleton {\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n  background-color: #ededed;\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/assets/banners/no-banners.svg\");\n  background-repeat: no-repeat; }\n\n.skeleton .title {\n    display: block;\n    text-decoration: none;\n    padding: 20px 50px;\n    padding-right: 120px; }\n\n.skeleton .title .text {\n      color: #fff;\n      font-weight: 600;\n      line-height: 30px;\n      box-sizing: border-box;\n      padding-left: 20px;\n      border-left: 3px solid #dd1e25; }\n\n.skeleton .description {\n    display: block;\n    text-decoration: none;\n    opacity: 0.7;\n    color: #F7F7F7;\n    background-color: #050505;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n    box-sizing: border-box;\n    padding: 20px 50px; }\n\n.skeleton .description .line {\n      width: 75%;\n      height: 14px;\n      background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);\n      background-size: 600px;\n      -webkit-animation: shine-avatar 2s infinite ease-out;\n              animation: shine-avatar 2s infinite ease-out; }\n\n.skeleton .description .line + .line {\n        margin-top: 5px;\n        width: 50%; }\n"

/***/ }),

/***/ "./src/app/company/components/main-carousel/main-carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/company/components/main-carousel/main-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCarouselComponent", function() { return MainCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/banners/banners.service */ "./src/app/services/banners/banners.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainCarouselComponent = /** @class */ (function () {
    function MainCarouselComponent(sharepointService, bannersService, zone, router) {
        this.sharepointService = sharepointService;
        this.bannersService = bannersService;
        this.zone = zone;
        this.router = router;
        this.banners = [];
        this.carouselIsUp = false;
        this.currentSlide = 0;
    }
    MainCarouselComponent.prototype.ngOnInit = function () {
        this.load();
    };
    MainCarouselComponent.prototype.load = function () {
        var _this = this;
        this.bannersService.getItems({ filter: 'slShow eq 1' })
            .subscribe(function (banners) {
            _this.currentSlide = 0;
            _this.banners = banners;
        });
    };
    MainCarouselComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    MainCarouselComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + '/Lists/slBanners/NewForm.aspx?Source='
            + encodeURIComponent(window.location.href);
    };
    MainCarouselComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + ("/Lists/slBanners/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    MainCarouselComponent.prototype.remove = function (item) {
        var _this = this;
        this.bannersService.recycleItem(item)
            .subscribe(function () { return _this.load(); });
    };
    MainCarouselComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '%27').replace(/ /gi, '%20') || null;
    };
    MainCarouselComponent.prototype.goTo = function (item) {
        var _this = this;
        this.zone.run(function () {
            var link = item.url;
            if (window.location.href.indexOf('/PortalPages/') > 0
                && link.indexOf('/PortalPages/') >= 0
                && link.indexOf('#') >= 0) {
                _this.router.navigate([link.split('#')[1]]);
            }
            else {
                window.location.href = link;
            }
        });
    };
    MainCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-carousel',
            template: __webpack_require__(/*! ./main-carousel.component.html */ "./src/app/company/components/main-carousel/main-carousel.component.html"),
            styles: [__webpack_require__(/*! ./main-carousel.component.scss */ "./src/app/company/components/main-carousel/main-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"],
            src_app_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_3__["BannersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainCarouselComponent);
    return MainCarouselComponent;
}());



/***/ }),

/***/ "./src/app/company/components/media-carousel/media-carousel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/media-carousel/media-carousel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-media-carousel\">\n  <ngsl-carousel #ngslCarousel=\"ngsl-carousel\" [infinity]=\"false\"\n    [showArrowsLastElement]=\"false\" [trackIsUp]=\"carouselIsUp\"\n    [(currentSlide)]=\"currentSlide\"\n    [dots]=\"false\" [isControl]=\"true\">\n    <ng-container *ngslCarouselControl>\n      <div class=\"admin-controls\">\n        <app-admin-controls [item]=\"albums.length > currentSlide ? albums[currentSlide] : null\"\n          (create)=\"create(albums[currentSlide])\" (edit)=\"edit(albums[currentSlide])\" [canBeDeleted]=\"false\" [canBeEdited]=\"true\"\n          (activatedControls)=\"carouselToFront($event)\">\n        </app-admin-controls>\n      </div>\n    </ng-container>\n    <ng-container *ngFor=\"let item of albums; let i = index\">\n      <ng-container *ngslCarouselItem>\n        <div class=\"m-media-card\">\n          <div class=\"inner\" *ngIf=\"item && item.videoUrl !== undefined\">\n            <div class=\"url\" [routerLink]=\"['/media/video/item/' + item.id]\"></div>\n            <div id=\"block\" class=\"content-media\">\n              <iframe *ngIf=\"item.isIFrame\" [src]=\"item.videoUrl | iframeVideo\"></iframe>\n              <video *ngIf=\"!item.isIFrame\" src=\"{{item.videoUrl}}\"></video>\n            </div>\n          </div>\n          <div class=\"photo\" *ngIf=\"item && item.url !== undefined\">\n            <div class=\"content\"\n                 [routerLink]=\"['/media/photo/' + albumIndex + '/' + item.id]\"\n                 [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(item.url) + ')' }\"></div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"albums && albums.length\">\n      <div class=\"info-block\" *ngslCarouselItem>\n        <a [routerLink]=\"['/media']\">Перейти в медиагалерею</a>\n      </div>\n    </ng-container>\n  </ngsl-carousel>\n  <ng-container *ngIf=\"albums && !albums.length\">\n    <div class=\"info-block\">\n      Нет ни одной фотографии\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/media-carousel/media-carousel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/media-carousel/media-carousel.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-media-carousel {\n  height: 46% !important;\n  position: relative;\n  margin-bottom: 10%; }\n\n.l-media-carousel .custom-arrows {\n    position: relative;\n    position: absolute !important;\n    top: 0;\n    left: 0;\n    right: 0; }\n\n.l-media-carousel .custom-arrows:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 50%; }\n\n.l-media-carousel .custom-arrows > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"] {\n      position: absolute;\n      left: 0;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 40px;\n      height: 40px;\n      background-color: #768692;\n      opacity: .7;\n      border: 0;\n      cursor: pointer;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(\"/assets/icons/icon-carousel-arrow-right-white.svg\"); }\n\n.l-media-carousel .custom-arrows input[type=\"button\"]:hover {\n        opacity: .9; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].is-disabled {\n        background-color: #C4BCB7; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].is-disabled:hover {\n          opacity: .7; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"]:focus {\n        outline: none; }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].prev {\n        -webkit-transform: translateY(-50%) rotate(-180deg);\n            -ms-transform: translateY(-50%) rotate(-180deg);\n                transform: translateY(-50%) rotate(-180deg); }\n\n.l-media-carousel .custom-arrows input[type=\"button\"].next {\n        left: auto;\n        right: 0; }\n\n.info-block {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 100%;\n  height: 15px;\n  text-align: center; }\n\n.info-block a {\n    color: #dd1e25;\n    display: inline-block;\n    text-decoration: none;\n    font-size: 14px; }\n\n.m-media-card {\n  position: relative;\n  height: 100%; }\n\n.m-media-card .inner {\n    height: 100%; }\n\n.m-media-card .content-media,\n  .m-media-card .url {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-media-card .content-media {\n    z-index: 0; }\n\n.m-media-card .content-media iframe, .m-media-card .content-media video {\n      display: block;\n      width: 100%;\n      height: 100%; }\n\n.m-media-card .url {\n    cursor: pointer;\n    z-index: 1; }\n\n.m-media-card .photo {\n    cursor: pointer;\n    height: 100%;\n    position: relative; }\n\n.m-media-card .photo:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 55.55555556%; }\n\n.m-media-card .photo > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-media-card .photo .content {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n\n.m-media-card .body {\n    padding: 15px 10%;\n    box-sizing: border-box; }\n\n.m-media-card .body .category {\n      margin-bottom: 5px; }\n\n.m-media-card .body .category a {\n        text-decoration: none;\n        text-transform: uppercase;\n        color: #dd1e25;\n        font-size: 14px; }\n\n.m-media-card .body .title {\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 21px;\n      max-height: 42px;\n      display: block;\n      display: -webkit-box;\n      color: #403C39;\n      font-weight: 600;\n      margin-bottom: 8%; }\n\n@media (min-width: 1440px) {\n        .m-media-card .body .title {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 3px);\n          max-height: calc( 0.01458333 * 100vw + 21px);\n          -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n        .m-media-card .body .title {\n          font-size: 22px;\n          line-height: 27px;\n          max-height: 54px; } }\n\n.m-media-card .body .description {\n      display: block;\n      display: -webkit-box;\n      max-height: 96px;\n      font-size: 14px;\n      line-height: 24px;\n      -webkit-line-clamp: 4;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #403C39; }\n\n.m-media-popup {\n  position: relative; }\n\n.m-media-popup:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 71.42857143%; }\n\n.m-media-popup > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.m-media-popup .content {\n    padding: 15px;\n    box-sizing: border-box;\n    background-color: #fff; }\n\n.m-media-popup .title {\n    font-size: 14px;\n    color: #fff;\n    font-weight: 600;\n    position: absolute;\n    z-index: 10;\n    bottom: -50px;\n    height: 35px;\n    line-height: 35px;\n    display: inline-block;\n    background-color: #000;\n    padding: 0 15px;\n    border-radius: 15px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.m-media-popup .photo {\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: relative; }\n\n.m-media-popup .photo .controls {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      transition: bottom 0.3s;\n      padding: 15px 20px;\n      box-sizing: border-box;\n      height: 135px;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(46, 46, 46, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03000000', endColorstr='#cc585858', GradientType=0); }\n\n.m-media-popup .photo .controls .control {\n        position: absolute;\n        right: 20px;\n        bottom: 15px; }\n\n.m-media-popup .photo .controls .control .btn-download {\n          z-index: 100; }\n\n.m-media-popup .photo .controls .control .btn-download span {\n            text-transform: uppercase;\n            font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/company/components/media-carousel/media-carousel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/media-carousel/media-carousel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MediaCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaCarouselComponent", function() { return MediaCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo-library/photo-library.service */ "./src/app/services/photo-library/photo-library.service.ts");
/* harmony import */ var src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/videos/videos.service */ "./src/app/services/videos/videos.service.ts");
/* harmony import */ var src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/images/images.service */ "./src/app/services/images/images.service.ts");
/* harmony import */ var src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants/content-types */ "./src/app/constants/content-types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MediaCarouselComponent = /** @class */ (function () {
    function MediaCarouselComponent(sharepointService, photoLibraryService, videosService, imagesService, cookieService) {
        this.sharepointService = sharepointService;
        this.photoLibraryService = photoLibraryService;
        this.videosService = videosService;
        this.imagesService = imagesService;
        this.cookieService = cookieService;
        this.albums = [];
        this.carouselIsUp = false;
        this.currentSlide = 0;
        this.albumIndex = null;
    }
    MediaCarouselComponent.prototype.ngOnInit = function () {
        this.load();
    };
    MediaCarouselComponent.prototype.load = function () {
        var _this = this;
        this.photoLibraryService.getItems({ filter: "ContentType eq '" + encodeURI(src_app_constants_content_types__WEBPACK_IMPORTED_MODULE_8__["contentTypes"].album) + "'", top: 1 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (album) {
            _this.albumIndex = album[0].id;
            return _this.photoLibraryService.getFiles(album[0].id);
        })).subscribe({
            next: function (value) {
                for (var i = 0; i < value.length; i++) {
                    _this.albums.push(value[i]);
                }
            },
            complete: function () {
                _this.videosService.getRandomItems({ top: 10 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (album) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(album);
                })).subscribe({
                    next: function (value) {
                        for (var i = 0; i < value.length; i++) {
                            _this.albums.push(value[i]);
                        }
                    },
                    complete: function () {
                        _this.albums.sort(function () { return 0.5 - Math.random(); });
                        _this.albums.length = 10;
                    }
                });
            }
        });
    };
    MediaCarouselComponent.prototype.create = function (currentSlide) {
        this.cookieService.set('splnu', '0', 1, '/');
        if (currentSlide && currentSlide.videoUrl !== undefined) {
            window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
                + "/Lists/slVideos/NewForm.aspx?Source="
                + encodeURIComponent(window.location.href);
        }
        else if (currentSlide && currentSlide.url !== undefined) {
            window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
                + "/slPhotoLibrary/Forms/Upload.aspx?ContentTypeId=0x012000BFB863A2672645ABBEA198EF8334172D&Source="
                + encodeURIComponent(window.location.href);
        }
    };
    MediaCarouselComponent.prototype.edit = function (currentSlide) {
        if (currentSlide && currentSlide.videoUrl !== undefined) {
            window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
                + "/Lists/slVideos/AllItems.aspx";
        }
        else if (currentSlide && currentSlide.url !== undefined) {
            window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
                + "/slPhotoLibrary/Forms/Thumbnails.aspx#/company";
        }
    };
    MediaCarouselComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    MediaCarouselComponent.prototype.prepareLink = function (link) {
        return this.imagesService.prepareBackgroundUrl(link);
    };
    MediaCarouselComponent.prototype.getFileNameAndExtension = function (path) {
        var str = path
            .split('\\')
            .pop()
            .split('/')
            .pop();
        var ext = str.substr((Math.max(0, str.lastIndexOf('.')) || Infinity) + 1);
        var name = str.replace('.' + ext, '');
        return {
            ext: ext,
            name: name,
            full: name + "." + ext
        };
    };
    MediaCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-carousel',
            template: __webpack_require__(/*! ./media-carousel.component.html */ "./src/app/company/components/media-carousel/media-carousel.component.html"),
            styles: [__webpack_require__(/*! ./media-carousel.component.scss */ "./src/app/company/components/media-carousel/media-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_4__["SharepointService"],
            src_app_services_photo_library_photo_library_service__WEBPACK_IMPORTED_MODULE_5__["PhotoLibraryService"],
            src_app_services_videos_videos_service__WEBPACK_IMPORTED_MODULE_6__["VideosService"],
            src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], MediaCarouselComponent);
    return MediaCarouselComponent;
}());



/***/ }),

/***/ "./src/app/company/components/new-employees-informer/new-employees-informer.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/company/components/new-employees-informer/new-employees-informer.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-new-employees-card\" *ngIf=\"employees && employees.length\">\n  <div class=\"header\">{{ employees[currentSlide].startWorkDateTitle }}</div>\n  <div class=\"body\">\n    <div class=\"dots\">\n      <div class=\"dot\" *ngIf=\"prevSlide\">\n        <div class=\"content\" [style.backgroundImage]=\"'url(' + employees[prevSlide].photo + ')'\"></div>\n      </div>\n      <div class=\"dot is-current-item\">\n        <div class=\"content\" [style.backgroundImage]=\"'url(' + employees[currentSlide].photo + ')'\"\n          [routerLink]=\"employees[currentSlide].profileRoute\"></div>\n      </div>\n      <div class=\"dot\" *ngIf=\"nextSlide\">\n        <div class=\"content\" [style.backgroundImage]=\"'url(' + employees[nextSlide].photo + ')'\"></div>\n      </div>\n    </div>\n    <div class=\"slide-arrows\" *ngIf=\"employees && employees.length > 1\">\n      <div class=\"prev\" *ngIf=\"prevSlide\">\n        <div class=\"content\">\n          <input type=\"button\" class=\"prev\" (click)=\"ngslCarousel.prev()\" />\n        </div>\n      </div>\n      <div class=\"next\" *ngIf=\"nextSlide\">\n        <div class=\"content\">\n          <input type=\"button\" class=\"next\" (click)=\"ngslCarousel.next()\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <ngsl-carousel #ngslCarousel=\"ngsl-carousel\"\n    [infinity]=\"false\" [arrows]=\"false\" [dots]=\"false\"\n    [(currentSlide)]=\"currentSlide\" [(prevSlide)]=\"prevSlide\" [(nextSlide)]=\"nextSlide\">\n      <ng-container *ngFor=\"let item of employees\">\n        <ng-container *ngslCarouselItem>\n          <div class=\"content\">\n            <div class=\"full-name\">{{ item.fullName }}</div>\n            <div class=\"position\">{{ item.positionName }}</div>\n            <div class=\"full-name\">{{ item.rootLookupDepartmentTitle }}</div>\n          </div>\n        </ng-container>\n      </ng-container>\n    </ngsl-carousel>\n  </div>\n</div>\n<ng-container *ngIf=\"employees && !employees.length\">\n  <div class=\"info-block\">\n    <div class=\"content\"><span>Нет новых сотрудников</span></div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/company/components/new-employees-informer/new-employees-informer.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/company/components/new-employees-informer/new-employees-informer.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-new-employees-card .header {\n  height: 45px;\n  padding-left: 10%;\n  padding-top: 5%;\n  color: #dd1e25;\n  text-transform: uppercase;\n  font-size: 14px;\n  box-sizing: border-box; }\n\n.m-new-employees-card .body {\n  position: relative; }\n\n.m-new-employees-card .body .dots {\n    font-size: 0;\n    text-align: center;\n    padding: 0 10%; }\n\n.m-new-employees-card .body .dots .dot {\n      height: 100%;\n      display: inline-block;\n      vertical-align: middle;\n      width: 27%;\n      position: relative;\n      padding: 0 10px;\n      box-sizing: border-box;\n      opacity: .6;\n      position: relative; }\n\n.m-new-employees-card .body .dots .dot:before {\n        display: block;\n        content: \" \";\n        width: 100%;\n        padding-bottom: 100%; }\n\n.m-new-employees-card .body .dots .dot > .content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0; }\n\n.m-new-employees-card .body .dots .dot .content {\n        left: 10px;\n        right: 10px;\n        border-radius: 100%;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        cursor: pointer; }\n\n.m-new-employees-card .body .dots .dot.is-current-item {\n        width: 35%;\n        opacity: 1; }\n\n.m-new-employees-card .body .slide-arrows .prev,\n  .m-new-employees-card .body .slide-arrows .next {\n    position: absolute !important;\n    top: 50%;\n    left: 0;\n    width: 10%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    position: relative; }\n\n.m-new-employees-card .body .slide-arrows .prev:before,\n    .m-new-employees-card .body .slide-arrows .next:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 100%; }\n\n.m-new-employees-card .body .slide-arrows .prev > .content,\n    .m-new-employees-card .body .slide-arrows .next > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"],\n    .m-new-employees-card .body .slide-arrows .next input[type=\"button\"] {\n      z-index: 10;\n      width: 100%;\n      height: 100%;\n      background-color: #4D4E4D;\n      opacity: .7;\n      border: 0;\n      cursor: pointer;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(\"/assets/icons/icon-carousel-arrow-right-white.svg\"); }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"]:hover,\n      .m-new-employees-card .body .slide-arrows .next input[type=\"button\"]:hover {\n        opacity: .9; }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"].is-disabled,\n      .m-new-employees-card .body .slide-arrows .next input[type=\"button\"].is-disabled {\n        background-color: #C4BCB7; }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"].is-disabled:hover,\n        .m-new-employees-card .body .slide-arrows .next input[type=\"button\"].is-disabled:hover {\n          opacity: .7; }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"]:focus,\n      .m-new-employees-card .body .slide-arrows .next input[type=\"button\"]:focus {\n        outline: none; }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"].prev,\n      .m-new-employees-card .body .slide-arrows .next input[type=\"button\"].prev {\n        -webkit-transform: translateY(-50%) rotate(-180deg);\n            -ms-transform: translateY(-50%) rotate(-180deg);\n                transform: translateY(-50%) rotate(-180deg); }\n\n.m-new-employees-card .body .slide-arrows .prev input[type=\"button\"].next,\n      .m-new-employees-card .body .slide-arrows .next input[type=\"button\"].next {\n        left: auto;\n        right: 0; }\n\n.m-new-employees-card .body .slide-arrows .next {\n    right: 0;\n    left: auto; }\n\n.m-new-employees-card .footer {\n  padding: 10px 10%;\n  padding-bottom: 25px;\n  box-sizing: border-box; }\n\n.m-new-employees-card .footer .full-name {\n    color: #050505;\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 5px; }\n\n.m-new-employees-card .footer .position {\n    color: #050505;\n    display: -webkit-box;\n    display: block;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 1;\n    overflow: hidden;\n    max-height: 16px; }\n\n.info-block {\n  position: relative; }\n\n.info-block:before {\n    display: block;\n    content: \" \";\n    width: 100%;\n    padding-bottom: 50%; }\n\n.info-block > .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.info-block .content {\n    background-color: #ddd; }\n\n.info-block .content span {\n      display: block;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%);\n      text-align: center;\n      width: 100%; }\n\n.info-block .content span a {\n        color: #f13945;\n        display: inline-block;\n        text-decoration: none;\n        font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/company/components/new-employees-informer/new-employees-informer.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/company/components/new-employees-informer/new-employees-informer.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewEmployeesInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesInformerComponent", function() { return NewEmployeesInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NewEmployeesInformerComponent = /** @class */ (function () {
    function NewEmployeesInformerComponent(employeesFactory) {
        this.employeesFactory = employeesFactory;
        this.currentSlide = 0;
        this.prevSlide = null;
        this.nextSlide = null;
        this.employees = [];
    }
    NewEmployeesInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.employees = this.route.snapshot.data.newEmployees;
        var start = moment__WEBPACK_IMPORTED_MODULE_1__().startOf('quarter').toISOString();
        this.employeesFactory.search()
            // .getItems({
            //   filter: `slStartWorkDate ge datetime'${start}'`,
            //   orderBy: [['slStartWorkDate', true]],
            //   top: 100
            // })
            .subscribe(function (employees) {
            _this.employees = employees.items;
            if (_this.employees) {
                if (_this.employees.length > 0) {
                    _this.currentSlide = _this.employees.length - 1;
                }
                if (_this.employees.length > 1) {
                    _this.prevSlide = _this.employees.length - 2;
                }
            }
        });
    };
    NewEmployeesInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-employees-informer',
            template: __webpack_require__(/*! ./new-employees-informer.component.html */ "./src/app/company/components/new-employees-informer/new-employees-informer.component.html"),
            styles: [__webpack_require__(/*! ./new-employees-informer.component.scss */ "./src/app/company/components/new-employees-informer/new-employees-informer.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('EmployeesFactory')),
        __metadata("design:paramtypes", [Object])
    ], NewEmployeesInformerComponent);
    return NewEmployeesInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/news-informer/news-informer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/news-informer/news-informer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__informer-controls\">\n  <div class=\"l-home__informer-title\">В компании</div>\n  <div class=\"l-home__informer-action\">\n    <a [routerLink]=\"['/news/root']\">Все новости</a>\n  </div>\n</div>\n<div class=\"l-home__informer-content\">\n  <div class=\"content\">\n    <div class=\"l-home__news\" [class.no-items]=\"news && !news.length\">\n      <div class=\"l-home__news-item\" *ngFor=\"let item of news\">\n        <div class=\"news-card\">\n          <div class=\"header\">\n            <div class=\"admin-controls\">\n              <app-admin-controls [item]=\"item\" (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\">\n              </app-admin-controls>\n            </div>\n          </div>\n          <div class=\"photo\">\n            <div class=\"content\">\n              <div class=\"thumb\" [ngStyle]=\"{'background-image': 'url(' + prepareLink(item.imageUrl) + ')'}\"></div>\n              <div class=\"gradient\"></div>\n              <div class=\"info\">\n                <div class=\"date\">\n                  {{ item.newsPublicationDateTitle }}\n                </div>\n                <a [routerLink]=\"['/news/root/item', item.id]\" class=\"title\" appNgslDotdotdot>\n                  {{ item.title }}\n                </a>\n                <div class=\"controls\">\n                  <div class=\"views\">\n                    {{ item.viewsCount }}\n                  </div>\n                  <div class=\"share\">\n                    <app-share-link [link]=\"getNewsLink(item)\"></app-share-link>\n                  </div>\n                  <div [ngClass]=\"{'likes': !hasLike(item), 'likes-on': hasLike(item)}\" (click)=\"toggleLike(item)\">\n                    {{ item.likesCount }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"no-items\" *ngIf=\"news && !news.length\">\n        <div class=\"admin-controls\">\n          <app-admin-controls [item]=\"item\" [canBeDeleted]=\"false\" [canBeEdited]=\"false\" (create)=\"create()\">\n          </app-admin-controls>\n        </div>\n        <div class=\"text\">Новостей нет</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/news-informer/news-informer.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/news-informer/news-informer.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-home__news {\n  height: 100%;\n  font-size: 0;\n  padding-bottom: 0;\n  margin: 0 -17.5px; }\n\n@media screen and (max-width: 1440px) {\n    .l-home__news {\n      margin: 0 -12.5px; } }\n\n.l-home__news-item {\n  width: 50%;\n  display: inline-block;\n  padding: 0 17.5px;\n  box-sizing: border-box;\n  vertical-align: top;\n  margin-bottom: 4.5%; }\n\n@media screen and (max-width: 1440px) {\n    .l-home__news-item {\n      padding: 0 12.5px; } }\n\n.l-home__news-item:nth-last-child(-n + 2) {\n    margin-bottom: 0; }\n\n.no-items {\n  position: relative;\n  height: 100%;\n  background-color: #dedfe0;\n  margin: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/banners/no-banners.svg\"); }\n\n.no-items:hover .admin-controls {\n    display: block; }\n\n.no-items .admin-controls {\n    display: none; }\n\n.no-items .text {\n    width: 100%;\n    font-size: 16px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center; }\n\n.news-card {\n  box-sizing: border-box;\n  background-color: #fff;\n  height: 100%;\n  position: relative;\n  border: 1px solid #efeff0; }\n\n.news-card .photo {\n    position: relative;\n    position: relative; }\n\n.news-card .photo:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 78.74015748%; }\n\n.news-card .photo > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.news-card .photo .content:hover .gradient {\n      background: radial-gradient(at top, #4a4a4a, #000000); }\n\n.news-card .photo .content .thumb {\n      height: 100%;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      background-color: #ddd; }\n\n.news-card .photo .content .gradient {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      background: radial-gradient(at top, #343434, #050505);\n      opacity: 0.5; }\n\n.news-card .photo .content .info {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      padding: 10% 9%;\n      box-sizing: border-box; }\n\n.news-card .photo .content .info .date {\n        color: #fff;\n        font-size: 16px;\n        text-transform: uppercase;\n        margin-bottom: 10px; }\n\n.news-card .photo .content .info .title {\n        display: block;\n        font-size: 22px;\n        line-height: 30px;\n        max-height: 120px;\n        text-decoration: none;\n        color: #ffffff;\n        font-weight: bold; }\n\n@media screen and (max-width: 1440px) {\n          .news-card .photo .content .info .title {\n            font-size: 16px;\n            line-height: 24px;\n            max-height: 96px; } }\n\n.news-card .photo .content .info .controls {\n        position: absolute;\n        bottom: 9%;\n        left: 10%; }\n\n.news-card .photo .content .info .controls .views,\n        .news-card .photo .content .info .controls .likes,\n        .news-card .photo .content .info .controls .share,\n        .news-card .photo .content .info .controls .likes-on {\n          display: inline-block;\n          background-repeat: no-repeat;\n          background-position: left;\n          padding-left: 30px;\n          font-size: 16px;\n          color: #ffffff;\n          margin-right: 25px;\n          vertical-align: bottom; }\n\n.news-card .photo .content .info .controls .views {\n          background-image: url(\"/assets/icons/icon-news-eye-white.svg\");\n          background-size: 25px 13px; }\n\n.news-card .photo .content .info .controls .likes {\n          background-image: url(\"/assets/icons/icon-news-like.svg\");\n          background-size: 17px 18px;\n          padding-left: 25px;\n          cursor: pointer; }\n\n.news-card .photo .content .info .controls .likes-on {\n          background-image: url(\"/assets/icons/icon-like-red-on.svg\");\n          background-size: 17px 18px;\n          padding-left: 25px;\n          cursor: pointer; }\n\n.news-card .photo .content .info .controls .share {\n          background-image: url(\"/assets/icons/icon-news-share.svg\");\n          background-size: 20px 20px;\n          background-position: left bottom 2px;\n          padding-left: 0;\n          width: 20px;\n          height: 20px;\n          cursor: pointer; }\n\n.header:after {\n  content: '';\n  display: table;\n  clear: both; }\n\n.header .admin-controls {\n  float: right; }\n\n.l-home__informer-controls {\n  display: table;\n  table-layout: auto;\n  width: 100%;\n  height: 45px;\n  border-collapse: collapse; }\n\n.l-home__informer-controls + .l-home__informer-content {\n    height: calc(100% - 45px); }\n\n.l-home__informer-title,\n.l-home__informer-action,\n.l-home__informer-tabs {\n  display: table-cell;\n  vertical-align: top; }\n\n.l-home__informer-title > *,\n  .l-home__informer-action > *,\n  .l-home__informer-tabs > * {\n    display: block;\n    height: 100%; }\n\n.l-home__informer-title {\n  color: #000;\n  font-size: 26px;\n  line-height: 28px; }\n\n@media screen and (max-width: 1440px) {\n    .l-home__informer-title {\n      font-size: 18px;\n      line-height: 20px; } }\n\n.l-home__informer-action {\n  text-align: right;\n  padding-right: 15px; }\n\n.l-home__informer-action a {\n    display: block;\n    text-decoration: none;\n    color: #dd1e25;\n    font-size: 16px;\n    line-height: 33px; }\n\n@media screen and (max-width: 1440px) {\n      .l-home__informer-action a {\n        font-size: 14px;\n        line-height: 20px; } }\n\n.l-home__informer-content {\n  height: 100%;\n  position: relative;\n  z-index: 1; }\n\n.l-home__informer-content:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: transparent;\n    z-index: -1; }\n\n.l-home__informer-content > .content {\n    box-sizing: border-box;\n    height: 100%; }\n\n.l-home__informer-content > .content > * {\n      height: 100%;\n      display: block; }\n\n.not-padding .l-home__informer-content > .content {\n      padding: 0; }\n\n.transparent .l-home__informer-content > .content {\n      background-color: transparent;\n      border: none; }\n\n.vertical-padding .l-home__informer-content > .content {\n      padding: 20px 0; }\n\n.x2-padding .l-home__informer-content > .content {\n      padding: 5% 10%; }\n\n.not-fill .l-home__informer-content > .content {\n      height: auto; }\n"

/***/ }),

/***/ "./src/app/company/components/news-informer/news-informer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/company/components/news-informer/news-informer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsInformerComponent", function() { return NewsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
/* harmony import */ var src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news-comments/news-comments.service */ "./src/app/services/news-comments/news-comments.service.ts");
/* harmony import */ var src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/news-views/news-views.service */ "./src/app/services/news-views/news-views.service.ts");
/* harmony import */ var src_app_services_news_rubrics_news_rubrics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/news-rubrics/news-rubrics.service */ "./src/app/services/news-rubrics/news-rubrics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsInformerComponent = /** @class */ (function () {
    function NewsInformerComponent(newsService, route, sharepointService, newsCommentsService, newsViewsService, newsRubricsService) {
        this.newsService = newsService;
        this.route = route;
        this.sharepointService = sharepointService;
        this.newsCommentsService = newsCommentsService;
        this.newsViewsService = newsViewsService;
        this.newsRubricsService = newsRubricsService;
        this.rubrics = null;
        this.news = null;
        this.top = 6;
        this.userId = null;
    }
    NewsInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.data.userId;
        this.newsRubricsService.getItems().subscribe(function (rubrics) { return _this.rubrics = rubrics; });
        this.newsService.getItems({
            filter: "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'",
            top: 6
        }).subscribe(function (news) {
            _this.news = news;
            _this.loadViewsAndComments(_this.news);
        });
    };
    NewsInformerComponent.prototype.filterByRubricId = function (id) {
        var _this = this;
        var filter = (id && "slNewsRubricLookup/Id eq " + id + " and ") || '';
        this.newsService.getItems({
            filter: filter + "slNewsPublicationDate le datetime'" + new Date().toISOString() + "'",
            top: this.top
        }).subscribe(function (news) {
            _this.news = news;
            _this.loadViewsAndComments(_this.news);
        });
    };
    NewsInformerComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + '/Lists/slNews/NewForm.aspx?Source='
            + encodeURIComponent(window.location.href);
    };
    NewsInformerComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + ("/Lists/slNews/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    NewsInformerComponent.prototype.remove = function (item) {
        var _this = this;
        this.newsService.deleteItem(item)
            .subscribe(function () { return _this.news = _this.news.filter(function (i) { return i !== item; }); });
    };
    NewsInformerComponent.prototype.loadViewsAndComments = function (news) {
        var _this = this;
        var filter = '';
        if (news.length > 0) {
            for (var _i = 0, news_1 = news; _i < news_1.length; _i++) {
                var n = news_1[_i];
                filter += "slLookupNews/Id eq " + n.id + " or ";
            }
            filter = filter.slice(0, -4);
            this.newsCommentsService.getItems({ filter: filter, top: 5000 })
                .subscribe(function (comments) {
                var _loop_1 = function (n) {
                    n.commentsCount = comments.filter(function (c) { return c.newsLookupId === n.id; }).length;
                };
                for (var _i = 0, _a = _this.news; _i < _a.length; _i++) {
                    var n = _a[_i];
                    _loop_1(n);
                }
            });
            this.newsViewsService.getItems({ filter: filter, top: 5000 })
                .subscribe(function (views) {
                var _loop_2 = function (n) {
                    var view = views.filter(function (c) { return c.newsLookupId === n.id; });
                    if (view && view.length > 0) {
                        n.viewsCount = view[0].count;
                    }
                    else {
                        n.viewsCount = 0;
                    }
                };
                for (var _i = 0, _a = _this.news; _i < _a.length; _i++) {
                    var n = _a[_i];
                    _loop_2(n);
                }
            });
        }
    };
    NewsInformerComponent.prototype.toggleLike = function (item) {
        var _this = this;
        if (item.likedByIds.indexOf(this.userId) >= 0) {
            item.likedByIds = item.likedByIds.filter(function (l) { return l !== _this.userId; });
            item.likesCount--;
            this.newsService.removeLike({ id: item.id }).subscribe();
        }
        else {
            item.likedByIds.push(this.userId);
            item.likesCount++;
            this.newsService.addLike({ id: item.id }).subscribe();
        }
    };
    NewsInformerComponent.prototype.hasLike = function (item) {
        return item.likedByIds.indexOf(this.userId) >= 0;
    };
    NewsInformerComponent.prototype.prepareLink = function (link) {
        return this.prepareBackgroundUrl(link);
    };
    NewsInformerComponent.prototype.prepareBackgroundUrl = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '%27') || null;
    };
    NewsInformerComponent.prototype.getNewsLink = function (news) {
        return window.location.protocol + "//" + window.location.host
            + ("" + this.sharepointService.getCurrentUserContext().webServerRelativeUrl)
            + ("/PortalPages/home.aspx#/news/" + news.id);
    };
    NewsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-informer',
            template: __webpack_require__(/*! ./news-informer.component.html */ "./src/app/company/components/news-informer/news-informer.component.html"),
            styles: [__webpack_require__(/*! ./news-informer.component.scss */ "./src/app/company/components/news-informer/news-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_news_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"],
            src_app_services_news_comments_news_comments_service__WEBPACK_IMPORTED_MODULE_4__["NewsCommentsService"],
            src_app_services_news_views_news_views_service__WEBPACK_IMPORTED_MODULE_5__["NewsViewsService"],
            src_app_services_news_rubrics_news_rubrics_service__WEBPACK_IMPORTED_MODULE_6__["NewsRubricsService"]])
    ], NewsInformerComponent);
    return NewsInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/our-publications-informer/our-publications-informer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/company/components/our-publications-informer/our-publications-informer.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-home__our-publications\">\n  <div class=\"l-publication-card\" *ngIf=\"magazine\">\n    <div class=\"m-publication-card\">\n      <div class=\"image\" [ngStyle]=\"{'background-image': 'url(' + prepareLink(magazine.imageUrl) + ')'}\">\n        <div class=\"content\">\n        </div>\n      </div>\n      <div class=\"info\">\n        <a href=\"{{magazine.magazinelUrl}}\" class=\"title\">\n          {{magazine.title}}\n        </a>\n        <div class=\"number\">\n          {{magazine.number}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"l-publication-card\" *ngIf=\"newspaper\">\n    <div class=\"m-publication-card\">\n      <div class=\"image\" [ngStyle]=\"{'background-image': 'url(' + prepareLink(newspaper.imageUrl) + ')'}\">\n        <div class=\"content\">\n        </div>\n      </div>\n      <div class=\"info\">\n        <a href=\"{{newspaper.newspaperUrl}}\" class=\"title\">\n          {{newspaper.title}}\n        </a>\n        <div class=\"number\">\n          {{newspaper.number}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"no-items\" *ngIf=\"!(newspaper || magazine)\">\n    <div class=\"text\">Публикаций нет</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/our-publications-informer/our-publications-informer.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/company/components/our-publications-informer/our-publications-informer.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-home__our-publications {\n  height: 100%;\n  padding: 4% 7%;\n  padding-bottom: 0px;\n  box-sizing: border-box;\n  background-color: #DEDFE0;\n  font-size: 0px;\n  position: relative; }\n\n.l-home__our-publications .l-publication-card {\n    display: inline-block;\n    width: 50%;\n    height: 100%;\n    background-image: url(/assets/magazine-box-shadow.svg);\n    background-repeat: no-repeat;\n    background-size: 70% auto; }\n\n.m-publication-card {\n  position: relative; }\n\n.m-publication-card .image {\n    display: inline-block;\n    width: 42%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    border: 4px solid #dedfe0;\n    box-sizing: border-box; }\n\n.m-publication-card .image:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 136%; }\n\n.m-publication-card .image > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-publication-card .image .content {\n      z-index: 1; }\n\n.m-publication-card .info {\n    position: absolute;\n    left: 42%;\n    top: 0;\n    padding: 9% 7%;\n    box-sizing: border-box;\n    vertical-align: top;\n    max-width: 55%; }\n\n.m-publication-card .info .title {\n      display: block;\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 24px;\n      max-height: 48px;\n      font-weight: bold;\n      color: #000000;\n      margin-bottom: 17%;\n      text-decoration: none; }\n\n@media (min-width: 1440px) {\n        .m-publication-card .info .title {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 6px);\n          max-height: calc( 0.00833333 * 100vw + 36px);\n          -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n        .m-publication-card .info .title {\n          font-size: 22px;\n          line-height: 30px;\n          max-height: 60px; } }\n\n.m-publication-card .info .number {\n      font-size: 16px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 21px;\n      max-height: 42px;\n      color: #dd1e25; }\n\n@media (min-width: 1440px) {\n        .m-publication-card .info .number {\n          font-size: calc( 0.0125 * 100vw + -2px);\n          line-height: calc( 0.0125 * 100vw + 3px);\n          max-height: calc( 0.01458333 * 100vw + 21px);\n          -webkit-line-clamp: 2; } }\n\n@media (min-width: 1920px) {\n        .m-publication-card .info .number {\n          font-size: 22px;\n          line-height: 27px;\n          max-height: 54px; } }\n\n.no-items {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-image: url(\"/assets/banners/no-banners.svg\");\n  background-size: contain;\n  background-position: center; }\n\n.no-items .text {\n    width: 100%;\n    font-size: 16px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/company/components/our-publications-informer/our-publications-informer.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/company/components/our-publications-informer/our-publications-informer.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OurPublicationsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPublicationsInformerComponent", function() { return OurPublicationsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_magazines_magazines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/magazines/magazines.service */ "./src/app/services/magazines/magazines.service.ts");
/* harmony import */ var src_app_services_newspapers_newspapers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/newspapers/newspapers.service */ "./src/app/services/newspapers/newspapers.service.ts");
/* harmony import */ var src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/images/images.service */ "./src/app/services/images/images.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurPublicationsInformerComponent = /** @class */ (function () {
    function OurPublicationsInformerComponent(magazinesService, newspapersService, imagesService) {
        this.magazinesService = magazinesService;
        this.newspapersService = newspapersService;
        this.imagesService = imagesService;
        this.magazine = null;
        this.newspaper = null;
    }
    OurPublicationsInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.magazinesService.getItems({ orderBy: [['slReleaseDate', false]], top: 1 })
            .subscribe(function (items) {
            _this.magazine = items.length > 0 ? items[0] : null;
        });
        this.newspapersService.getItems({ orderBy: [['slReleaseDate', false]], top: 1 })
            .subscribe(function (items) {
            _this.newspaper = items.length > 0 ? items[0] : null;
        });
    };
    OurPublicationsInformerComponent.prototype.prepareLink = function (link) {
        return this.imagesService.prepareBackgroundUrl(link);
    };
    OurPublicationsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-publications-informer',
            template: __webpack_require__(/*! ./our-publications-informer.component.html */ "./src/app/company/components/our-publications-informer/our-publications-informer.component.html"),
            styles: [__webpack_require__(/*! ./our-publications-informer.component.scss */ "./src/app/company/components/our-publications-informer/our-publications-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_magazines_magazines_service__WEBPACK_IMPORTED_MODULE_1__["MagazinesService"],
            src_app_services_newspapers_newspapers_service__WEBPACK_IMPORTED_MODULE_2__["NewspapersService"],
            src_app_services_images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"]])
    ], OurPublicationsInformerComponent);
    return OurPublicationsInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/polls-informer/polls-informer.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/polls-informer/polls-informer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-polls-carousel\">\n  <ngsl-carousel #ngslCarousel=\"ngsl-carousel\" *ngIf=\"surveys && surveys.length > 0\" [(currentSlide)]=\"currentSlide\"\n    [isControl]=\"true\" [dots]=\"true\" [trackIsUp]=\"carouselIsUp\" [infinity]=\"false\" [arrows]=\"false\">\n    <ng-container *ngFor=\"let item of surveys\">\n      <ng-container *ngslCarouselControl>\n        <div class=\"admin-controls\">\n          <app-admin-controls [item]=\"surveys.length > currentSlide ? surveys[currentSlide] : null\" (create)=\"create()\"\n                              (edit)=\"edit($event)\" (remove)=\"remove($event)\" [canBeDeleted]=\"surveys.length > currentSlide\"\n                              [canBeEdited]=\"surveys.length > currentSlide\" (activatedControls)=\"carouselToFront($event)\">\n          </app-admin-controls>\n        </div>\n      </ng-container>\n      <ng-container *ngslCarouselDot>\n        <div class=\"content\"></div>\n      </ng-container>\n      <ng-container *ngslCarouselItem>\n        <div class=\"m-polls-card\">\n          <div class=\"admin-controls\">\n            <app-admin-controls [item]=\"item\" (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\">\n            </app-admin-controls>\n          </div>\n          <div class=\"photo\">\n            <div class=\"content\" [ngStyle]=\"{ 'background-image': 'url(' + prepareLink(item.image) + ')' }\">\n              <div class=\"slide-arrows\" *ngIf=\"surveys && surveys.length > 1\">\n                <div class=\"prev\">\n                  <div class=\"content\">\n                    <input type=\"button\" class=\"prev\" [class.is-disabled]=\"!ngslCarousel.infinity && ngslCarousel.currentSlide === 0\"\n                           (click)=\"ngslCarousel.prev()\" />\n                  </div>\n                </div>\n                <div class=\"next\">\n                  <div class=\"content\">\n                    <input type=\"button\" class=\"next\" (click)=\"ngslCarousel.next()\" [class.is-disabled]=\"\n                        !ngslCarousel.infinity && ngslCarousel.currentSlide === surveys.length - 1\n                      \" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"body\">\n            <div class=\"title\">Тема опроса</div>\n            <div class=\"description\" appNgslDotdotdot>\n              {{ item.title }}\n            </div>\n            <div class=\"send\">\n              <a href=\"#\" (click)=\"goTo(item)\">\n                Пройти\n              </a>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ngsl-carousel>\n  <div class=\"not-elements\" *ngIf=\"surveys && surveys.length == 0\">\n    <div class=\"admin-controls\">\n      <app-admin-controls (create)=\"create()\" (edit)=\"edit($event)\" (remove)=\"remove($event)\" [canBeDeleted]=\"false\"\n        [canBeEdited]=\"false\" (activatedControls)=\"carouselToFront($event)\">\n      </app-admin-controls>\n    </div>\n    <div class=\"text\">\n      В настоящий момент опрос не проводится\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/polls-informer/polls-informer.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/polls-informer/polls-informer.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.m-polls-card {\n  height: 100%; }\n\n.m-polls-card:hover .slide-arrows {\n    display: block; }\n\n.m-polls-card .photo {\n    height: 46%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-image: url(/assets/banners/no-banners.svg);\n    position: relative; }\n\n.m-polls-card .photo:before {\n      display: block;\n      content: \" \";\n      width: 100%;\n      padding-bottom: 55.55555556%; }\n\n.m-polls-card .photo > .content {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n.m-polls-card .photo::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      display: block;\n      width: 100%;\n      height: 35%;\n      background-image: linear-gradient(to top, rgba(5, 5, 5, 0.01) 0%, #585858 100%);\n      opacity: 0.8; }\n\n.m-polls-card .photo .content {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n\n.m-polls-card .body {\n    padding: 7% 10%;\n    box-sizing: border-box; }\n\n.m-polls-card .body .title {\n      font-size: 12px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 14px;\n      max-height: 14px;\n      display: block;\n      display: -webkit-box;\n      color: #050505;\n      text-transform: uppercase;\n      margin-bottom: 14px; }\n\n@media (min-width: 1440px) {\n        .m-polls-card .body .title {\n          font-size: calc( 0.00833333 * 100vw + 0px);\n          line-height: calc( 0.00833333 * 100vw + 2px);\n          max-height: calc( 0.00833333 * 100vw + 2px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .m-polls-card .body .title {\n          font-size: 16px;\n          line-height: 18px;\n          max-height: 18px; } }\n\n.m-polls-card .body .description {\n      display: block;\n      font-size: 22px;\n      line-height: 28px;\n      max-height: 84px;\n      font-weight: bold;\n      color: #050505;\n      margin-bottom: 10%; }\n\n@media screen and (max-width: 1440px) {\n        .m-polls-card .body .description {\n          font-size: 16px;\n          line-height: 22px;\n          max-height: 66px; } }\n\n.m-polls-card .body .send a {\n      text-decoration: none;\n      font-size: 18px;\n      border: 1px solid #dd1e25;\n      background-color: transparent;\n      color: #dd1e25;\n      border-radius: 3px;\n      padding: 4% 15%;\n      box-sizing: border-box; }\n\n.l-polls-carousel {\n  height: 100%;\n  position: relative; }\n\n.l-polls-carousel .slide-arrows {\n    display: none; }\n\n.l-polls-carousel .slide-arrows .prev,\n    .l-polls-carousel .slide-arrows .next {\n      position: absolute !important;\n      top: 50%;\n      left: 0;\n      width: 40px;\n      height: 40px;\n      -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"],\n      .l-polls-carousel .slide-arrows .next input[type=\"button\"] {\n        z-index: 10;\n        width: 100%;\n        height: 100%;\n        background-color: #4D4E4D;\n        opacity: .7;\n        border: 0;\n        cursor: pointer;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-image: url(\"/assets/icons/icon-carousel-arrow-right-white.svg\"); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"]:hover,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"]:hover {\n          opacity: .9; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].is-disabled,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].is-disabled {\n          background-color: #C4BCB7; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].is-disabled:hover,\n          .l-polls-carousel .slide-arrows .next input[type=\"button\"].is-disabled:hover {\n            opacity: .7; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"]:focus,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"]:focus {\n          outline: none; }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].prev,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].prev {\n          -webkit-transform: translateY(-50%) rotate(-180deg);\n              -ms-transform: translateY(-50%) rotate(-180deg);\n                  transform: translateY(-50%) rotate(-180deg); }\n\n.l-polls-carousel .slide-arrows .prev input[type=\"button\"].next,\n        .l-polls-carousel .slide-arrows .next input[type=\"button\"].next {\n          left: auto;\n          right: 0; }\n\n.l-polls-carousel .slide-arrows .next {\n      right: 0;\n      left: auto; }\n\n.not-elements {\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/banners/no-banners.svg\");\n  background-color: #dedfe0; }\n\n.not-elements:hover .admin-controls {\n    display: block; }\n\n.not-elements .admin-controls {\n    display: none; }\n\n.not-elements:after {\n    content: \"\";\n    display: block;\n    background: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 0; }\n\n.not-elements .text {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center;\n    width: 100%;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 600;\n    z-index: 1; }\n"

/***/ }),

/***/ "./src/app/company/components/polls-informer/polls-informer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/company/components/polls-informer/polls-informer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PollsInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsInformerComponent", function() { return PollsInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_surveys_surveys_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/surveys/surveys.service */ "./src/app/services/surveys/surveys.service.ts");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PollsInformerComponent = /** @class */ (function () {
    function PollsInformerComponent(surveysService, route, sharepointService) {
        this.surveysService = surveysService;
        this.route = route;
        this.sharepointService = sharepointService;
        this.surveys = [];
        this.carouselIsUp = false;
        this.currentSlide = 0;
    }
    PollsInformerComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.data.userId;
        this.load();
    };
    PollsInformerComponent.prototype.load = function () {
        var _this = this;
        var xml = "<View><Query>\n                  <Where>\n                    <And>\n                      <And>\n                        <Leq>\n                          <FieldRef Name='slNewDate' />\n                          <Value IncludeTimeValue='TRUE' Type='DateTime'>" + new Date().toISOString() + "</Value>\n                        </Leq>\n                        <NotIncludes>\n                          <FieldRef Name='LikedBy' LookupId='TRUE'/>\n                          <Value Type='Integer'>" + this.userId + "</Value>\n                        </NotIncludes>\n                      </And>\n                        <Or>\n                          <Geq>\n                              <FieldRef Name='slEndDate' />\n                              <Value IncludeTimeValue='TRUE' Type='DateTime'>" + new Date().toISOString() + "</Value>\n                          </Geq>\n                          <IsNull>\n                              <FieldRef Name='slEndDate' />\n                          </IsNull>\n                        </Or>\n                    </And>\n                  </Where>\n                  <OrderBy>\n                    <FieldRef Name='Created' Ascending='False' />\n                  </OrderBy>\n              </Query><RowLimit>3</RowLimit></View>";
        this.surveysService.getItemsByCAMLQuery({ ViewXml: xml })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (items) {
            if (items.length > 0) {
                var filter_1 = '';
                items.forEach(function (e) {
                    filter_1 += "Id eq " + e.id + " or ";
                });
                filter_1 = filter_1.slice(0, -4);
                return _this.surveysService.getItems({ filter: filter_1 });
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        })).subscribe(function (surveys) {
            _this.currentSlide = 0;
            _this.surveys = surveys;
        });
    };
    PollsInformerComponent.prototype.create = function () {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + '/Lists/slSurvey/NewForm.aspx?Source='
            + encodeURIComponent(window.location.href);
    };
    PollsInformerComponent.prototype.edit = function (item) {
        window.location.href = this.sharepointService.getCurrentUserContext().webServerRelativeUrl
            + ("/Lists/slSurvey/EditForm.aspx?ID=" + item.id + "&Source=")
            + encodeURIComponent(window.location.href);
    };
    PollsInformerComponent.prototype.remove = function (item) {
        var _this = this;
        this.surveysService.recycleItem(item)
            .subscribe(function () {
            _this.load();
        });
    };
    PollsInformerComponent.prototype.carouselToFront = function (val) {
        this.carouselIsUp = val;
    };
    PollsInformerComponent.prototype.goTo = function (survey) {
        window.open(survey.link, '_blank');
        this.addLike(survey);
    };
    PollsInformerComponent.prototype.addLike = function (item) {
        var _this = this;
        if (item.likedByIds.indexOf(this.userId) < 0) {
            this.surveysService.addLike({ id: item.id }).subscribe(function () {
                item.likedByIds.push(_this.userId);
                item.likesCount++;
            });
        }
    };
    PollsInformerComponent.prototype.prepareLink = function (link) {
        return link && link.replace(/\(/gi, '\\(').replace(/\)/gi, '\\)').replace(/'/gi, '%27').replace(/ /gi, '%20') || null;
    };
    PollsInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-polls-informer',
            template: __webpack_require__(/*! ./polls-informer.component.html */ "./src/app/company/components/polls-informer/polls-informer.component.html"),
            styles: [__webpack_require__(/*! ./polls-informer.component.scss */ "./src/app/company/components/polls-informer/polls-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_surveys_surveys_service__WEBPACK_IMPORTED_MODULE_4__["SurveysService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__["SharepointService"]])
    ], PollsInformerComponent);
    return PollsInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/review-informer/review-informer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/company/components/review-informer/review-informer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-review\">\n  <div class=\"l-review__item\" *ngFor=\"let item of items\">\n    <div class=\"m-review-card\">\n      <div class=\"header\">\n        <a href=\"{{item.url}}\" class=\"link\">\n          {{ item.source }}\n        </a>\n      </div>\n      <a href=\"{{item.url}}\" target=\"_blank\" class=\"title\" appNgslDotdotdot>\n        {{ item.title }}\n      </a>\n    </div>\n  </div>\n  <div class=\"no-items\" *ngIf=\"items && !items.length\">\n    <div class=\"text\">Новостей нет</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/review-informer/review-informer.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/company/components/review-informer/review-informer.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.no-items {\n  position: relative;\n  height: 100%;\n  margin: -12%;\n  padding-bottom: 12%;\n  background-color: #dedfe0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/banners/no-banners.svg\"); }\n\n.no-items .text {\n    width: 100%;\n    font-size: 16px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-align: center; }\n\n.l-review {\n  height: 100%; }\n\n.l-review__item {\n  border-bottom: 2px dotted #95989A;\n  padding-bottom: 9%;\n  box-sizing: border-box; }\n\n@media screen and (max-width: 1440px) {\n    .l-review__item:nth-child(5) {\n      border-bottom: none; }\n    .l-review__item:nth-child(6) {\n      display: none; } }\n\n.l-review__item + .l-review__item {\n    margin-top: 9%; }\n\n.l-review__item:last-of-type {\n    border-bottom: 0; }\n\n.m-review-card {\n  box-sizing: border-box;\n  border-bottom: 2px dotted #95989A; }\n\n.m-review-card:nth-child(1) {\n    padding-top: 0; }\n\n.m-review-card:nth-last-child(1) {\n    border-bottom: none;\n    padding-bottom: 0; }\n\n.m-review-card .header {\n    margin-bottom: 10px; }\n\n.m-review-card .header .link {\n      display: inline;\n      margin-right: 35px;\n      text-decoration: none;\n      text-transform: uppercase;\n      color: #768692;\n      font-size: 14px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 19px;\n      max-height: 19px; }\n\n@media (min-width: 1440px) {\n        .m-review-card .header .link {\n          font-size: calc( 0.00416667 * 100vw + 8px);\n          line-height: calc( 0.00416667 * 100vw + 13px);\n          max-height: calc( 0.00416667 * 100vw + 13px);\n          -webkit-line-clamp: 1; } }\n\n@media (min-width: 1920px) {\n        .m-review-card .header .link {\n          font-size: 16px;\n          line-height: 21px;\n          max-height: 21px; } }\n\n.m-review-card .title {\n    display: block;\n    font-size: 22px;\n    line-height: 27px;\n    max-height: 81px;\n    font-weight: bold;\n    color: #050505;\n    text-decoration: none;\n    cursor: pointer; }\n\n@media screen and (max-width: 1440px) {\n      .m-review-card .title {\n        font-size: 16px;\n        line-height: 21px;\n        max-height: 63px; } }\n\n.m-review-card .title:hover {\n      color: #dd1e25;\n      transition: 0.3s; }\n"

/***/ }),

/***/ "./src/app/company/components/review-informer/review-informer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/review-informer/review-informer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReviewInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewInformerComponent", function() { return ReviewInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/reviews/reviews.service */ "./src/app/services/reviews/reviews.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewInformerComponent = /** @class */ (function () {
    function ReviewInformerComponent(reviewsService) {
        this.reviewsService = reviewsService;
        this.items = null;
    }
    ReviewInformerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewsService.getItems({ top: 6 })
            .subscribe(function (items) { return _this.items = items; });
    };
    ReviewInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-informer',
            template: __webpack_require__(/*! ./review-informer.component.html */ "./src/app/company/components/review-informer/review-informer.component.html"),
            styles: [__webpack_require__(/*! ./review-informer.component.scss */ "./src/app/company/components/review-informer/review-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_1__["ReviewsService"]])
    ], ReviewInformerComponent);
    return ReviewInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/components/thanks-informer/thanks-informer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/company/components/thanks-informer/thanks-informer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-gratitude\" style=\"display: none\">\n  <div class=\"l-gratitude__item\" *ngFor=\"let item of thanksList\">\n    <div class=\"date\">{{ item.date }}</div>\n    <div class=\"body\">\n      <div class=\"container\">\n        <div class=\"author\">\n          <app-user-thumb [photo]=\"item.from.photo\"></app-user-thumb>\n          <div class=\"title\">\n            <div class=\"text\">{{ item.from.name }}</div>\n          </div>\n        </div>\n        <div class=\"reward\">\n          <div\n            class=\"icon\"\n            [style.backgroundImage]=\"'url(' + item.awardIcon + ')'\"\n          ></div>\n          <div class=\"title\">\n            <div class=\"text\">{{ item.awardName }}</div>\n          </div>\n        </div>\n        <div class=\"awarded\">\n          <app-user-thumb [photo]=\"item.to.photo\"></app-user-thumb>\n          <div class=\"title\">\n            <div class=\"text\">{{ item.to.name }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"postcard\">\n  <div class=\"year\"></div>\n  <div class=\"text\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/components/thanks-informer/thanks-informer.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/company/components/thanks-informer/thanks-informer.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#s4-bodyContainer {\n  padding: 0; }\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -30px; }\n  40%,\n  100% {\n    background-position: 210px; } }\n\n.l-gratitude__item {\n  border-bottom: 2px dotted #95989a;\n  box-sizing: border-box; }\n\n.l-gratitude__item + .l-gratitude__item {\n    padding-top: 3%; }\n\n.l-gratitude__item:last-of-type {\n    border-bottom: 0; }\n\n.l-gratitude__item .date {\n    color: #050505;\n    font-weight: 600;\n    font-size: 14px;\n    text-transform: lowercase;\n    margin-bottom: 4.5%; }\n\n.l-gratitude__item .body {\n    margin: 0 -10px;\n    padding-bottom: 5px; }\n\n.l-gratitude__item .body .container {\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      border-collapse: collapse; }\n\n.l-gratitude__item .body .container .author,\n      .l-gratitude__item .body .container .reward,\n      .l-gratitude__item .body .container .awarded {\n        position: relative;\n        text-align: center;\n        display: table-cell;\n        height: 100%;\n        vertical-align: top;\n        white-space: normal;\n        width: auto;\n        font-size: 14px;\n        color: #4d4e4d; }\n\n.l-gratitude__item .body .container .author:before,\n        .l-gratitude__item .body .container .reward:before,\n        .l-gratitude__item .body .container .awarded:before {\n          content: '';\n          position: absolute;\n          display: block;\n          background-color: #dedfe0;\n          top: 28px;\n          width: 50%;\n          left: 50%;\n          height: 1px; }\n\n.l-gratitude__item .body .container .author .title,\n        .l-gratitude__item .body .container .reward .title,\n        .l-gratitude__item .body .container .awarded .title {\n          text-align: center;\n          font-size: 0;\n          display: inline-block;\n          height: calc(100% - 56px); }\n\n.l-gratitude__item .body .container .author .title .text,\n          .l-gratitude__item .body .container .reward .title .text,\n          .l-gratitude__item .body .container .awarded .title .text {\n            font-size: 14px;\n            line-height: 18px;\n            display: -webkit-box;\n            display: block;\n            text-overflow: ellipsis;\n            -webkit-line-clamp: 2;\n            overflow: hidden;\n            max-height: 36px;\n            display: inline-block; }\n\n.l-gratitude__item .body .container .reward {\n        width: 45%; }\n\n.l-gratitude__item .body .container .reward .icon {\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: cover;\n          width: 56px;\n          height: 56px;\n          border-radius: 100%;\n          margin: 0 auto;\n          background-color: #DEDFE0;\n          position: relative;\n          z-index: 1;\n          margin-bottom: 6px; }\n\n@media screen and (max-width: 1440px) {\n          .l-gratitude__item .body .container .reward .title {\n            display: none; } }\n\n.l-gratitude__item .body .container .reward:before {\n          content: '';\n          width: 120%;\n          left: -10%; }\n\n.l-gratitude__item .body .container .awarded:before {\n        content: '';\n        left: 0; }\n\n.postcard {\n  padding: 5% 10%;\n  height: 100%;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/assets/postcard.png\");\n  position: relative; }\n\n.postcard:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 0;\n    height: 60%;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 1%, rgba(0, 0, 0, 0) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#73000000', endColorstr='#00000000',GradientType=0 ); }\n\n.postcard .year,\n  .postcard .text {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n    z-index: 1; }\n\n.postcard .year {\n    background-image: url(\"/assets/year-2019.svg\");\n    width: 75px;\n    height: 25px;\n    margin-bottom: 10px; }\n\n.postcard .text {\n    width: 165px;\n    height: 63px;\n    background-image: url(\"/assets/postcard-title.svg\"); }\n"

/***/ }),

/***/ "./src/app/company/components/thanks-informer/thanks-informer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/company/components/thanks-informer/thanks-informer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ThanksInformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksInformerComponent", function() { return ThanksInformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThanksInformerComponent = /** @class */ (function () {
    function ThanksInformerComponent() {
        this.thanksList = [
            {
                from: {
                    name: 'Аршинов',
                    photo: 'assets/photos/photo-male.png'
                },
                to: {
                    name: 'Булковец',
                    photo: 'assets/photos/photo-female.png'
                },
                date: 'Только что',
                awardIcon: 'assets/icons/icon-medal.svg',
                awardName: 'За оперативное решение вопроса'
            },
            {
                from: {
                    name: 'Птицина',
                    photo: 'assets/photos/photo-male.png'
                },
                to: {
                    name: 'Гольцман',
                    photo: 'assets/photos/photo-female.png'
                },
                date: 'Час назад',
                awardIcon: 'assets/icons/icon-heart-black.svg',
                awardName: 'За вежливость'
            },
            {
                from: {
                    name: 'Пятигорова',
                    photo: 'assets/photos/photo-male.png'
                },
                to: {
                    name: 'Толкунов',
                    photo: 'assets/photos/photo-female.png'
                },
                date: 'Вчера',
                awardIcon: 'assets/icons/icon-medal.svg',
                awardName: 'За решение нетривиальной задачи'
            }
        ];
    }
    ThanksInformerComponent.prototype.ngOnInit = function () {
    };
    ThanksInformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks-informer',
            template: __webpack_require__(/*! ./thanks-informer.component.html */ "./src/app/company/components/thanks-informer/thanks-informer.component.html"),
            styles: [__webpack_require__(/*! ./thanks-informer.component.scss */ "./src/app/company/components/thanks-informer/thanks-informer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThanksInformerComponent);
    return ThanksInformerComponent;
}());



/***/ }),

/***/ "./src/app/company/services/security/current-user-id.resolver.ts":
/*!***********************************************************************!*\
  !*** ./src/app/company/services/security/current-user-id.resolver.ts ***!
  \***********************************************************************/
/*! exports provided: CurrentUserIdResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserIdResolver", function() { return CurrentUserIdResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentUserIdResolver = /** @class */ (function () {
    function CurrentUserIdResolver(sharepointService) {
        this.sharepointService = sharepointService;
    }
    CurrentUserIdResolver.prototype.resolve = function (route, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sharepointService.getCurrentUserContext().userId);
    };
    CurrentUserIdResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_services_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_2__["SharepointService"]])
    ], CurrentUserIdResolver);
    return CurrentUserIdResolver;
}());



/***/ }),

/***/ "./src/app/company/services/security/groups.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/services/security/groups.resolver.ts ***!
  \**************************************************************/
/*! exports provided: GroupsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsResolver", function() { return GroupsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_security_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/security/security.service */ "./src/app/services/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsResolver = /** @class */ (function () {
    function GroupsResolver(securityService) {
        this.securityService = securityService;
    }
    GroupsResolver.prototype.resolve = function (route, state) {
        return this.securityService.getCurrentUserGroups();
    };
    GroupsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_services_security_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], GroupsResolver);
    return GroupsResolver;
}());



/***/ }),

/***/ "./src/app/services/key-events/key-events.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/key-events/key-events.service.ts ***!
  \***********************************************************/
/*! exports provided: KeyEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyEventsService", function() { return KeyEventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeyEventsService = /** @class */ (function (_super) {
    __extends(KeyEventsService, _super);
    function KeyEventsService(sharepointService) {
        var _this = _super.call(this) || this;
        _this.sharepointService = sharepointService;
        return _this;
    }
    KeyEventsService.prototype.getListRelativePath = function () {
        return '';
    };
    KeyEventsService.prototype.getListTitle = function () {
        return 'Ключевые события';
    };
    KeyEventsService.prototype.getSelect = function () {
        return 'Id,Title,slEventDate,slShowDate,slTextEvent,slArchiveDate,Created';
    };
    KeyEventsService.prototype.getExpand = function () {
        return null;
    };
    KeyEventsService.prototype.getOrderBy = function () {
        return [['slEventDate', true]];
    };
    KeyEventsService.prototype.getTop = function () {
        return 10;
    };
    KeyEventsService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_1__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    KeyEventsService.prototype.convertListItemToEntity = function (item) {
        var keyEvent = {
            id: item.Id,
            title: item.Title,
            eventDate: item.slEventDate && new Date(item.slEventDate),
            showDate: item.slShowDate && new Date(item.slShowDate),
            textEvent: item.slTextEvent,
            archiveDate: item.slArchiveDate && new Date(item.slArchiveDate)
        };
        if (keyEvent.eventDate != null) {
            keyEvent.eventDateTitle = moment__WEBPACK_IMPORTED_MODULE_1__(keyEvent.eventDate).calendar(null, {
                sameDay: '[Сегодня]',
                nextDay: '[Завтра]',
                nextWeek: 'DD MMMM YYYY',
                lastDay: '[Вчера]',
                lastWeek: 'DD MMMM YYYY',
                sameElse: 'DD MMMM YYYY'
            });
        }
        return keyEvent;
    };
    KeyEventsService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    KeyEventsService.prototype.getMockItems = function () {
        return [];
    };
    KeyEventsService.prototype.isMock = function () {
        return false;
    };
    KeyEventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"]])
    ], KeyEventsService);
    return KeyEventsService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/magazines/magazines.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/magazines/magazines.service.ts ***!
  \*********************************************************/
/*! exports provided: MagazinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazinesService", function() { return MagazinesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepoint/sharepoint.service */ "./src/app/services/sharepoint/sharepoint.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MagazinesService = /** @class */ (function (_super) {
    __extends(MagazinesService, _super);
    function MagazinesService(sharepointService) {
        var _this = _super.call(this) || this;
        _this.sharepointService = sharepointService;
        return _this;
    }
    MagazinesService.prototype.getListTitle = function () {
        return 'Наши издания - Журналы';
    };
    MagazinesService.prototype.getListRelativePath = function () {
        return 'lists/slMagazines';
    };
    MagazinesService.prototype.getSelect = function () {
        return 'Id,Title,slMagazinelUrl,slImageUrl,slReleaseDate,slNumber';
    };
    MagazinesService.prototype.getExpand = function () {
        return null;
    };
    MagazinesService.prototype.getOrderBy = function () {
        return [['slReleaseDate', false]];
    };
    MagazinesService.prototype.getTop = function () {
        return 1;
    };
    MagazinesService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_2__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    MagazinesService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            number: item.slNumber,
            imageUrl: item.slImageUrl,
            magazinelUrl: item.slMagazinelUrl,
            releaseDate: item.slReleaseDate && new Date(item.slReleaseDate)
        };
        return entity;
    };
    MagazinesService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    MagazinesService.prototype.getMockItems = function () {
        return [];
    };
    MagazinesService.prototype.isMock = function () {
        return false;
    };
    MagazinesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sharepoint_sharepoint_service__WEBPACK_IMPORTED_MODULE_3__["SharepointService"]])
    ], MagazinesService);
    return MagazinesService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_1__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/newspapers/newspapers.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/newspapers/newspapers.service.ts ***!
  \***********************************************************/
/*! exports provided: NewspapersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspapersService", function() { return NewspapersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-items-service */ "./src/app/services/list-items-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewspapersService = /** @class */ (function (_super) {
    __extends(NewspapersService, _super);
    function NewspapersService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewspapersService.prototype.getCachingOptions = function () {
        return {
            expiration: moment__WEBPACK_IMPORTED_MODULE_1__().add(30, 'minutes').toDate(),
            key: this.getListTitle(),
            storeName: 'session'
        };
    };
    NewspapersService.prototype.getListTitle = function () {
        return 'Наши издания - Газеты';
    };
    NewspapersService.prototype.getListRelativePath = function () {
        return 'lists/slNewspapers';
    };
    NewspapersService.prototype.getSelect = function () {
        return 'Id,Title,slNewspaperUrl,slImageUrl,slReleaseDate,slNumber';
    };
    NewspapersService.prototype.getExpand = function () {
        return null;
    };
    NewspapersService.prototype.getOrderBy = function () {
        return [['slReleaseDate', false]];
    };
    NewspapersService.prototype.getTop = function () {
        return 1;
    };
    NewspapersService.prototype.convertListItemToEntity = function (item) {
        var entity = {
            id: item.Id,
            title: item.Title,
            number: item.slNumber,
            imageUrl: item.slImageUrl,
            newspaperUrl: item.slNewspaperUrl,
            releaseDate: item.slReleaseDate && new Date(item.slReleaseDate)
        };
        return entity;
    };
    NewspapersService.prototype.convertEntityToListItem = function (entity) {
        throw new Error('Method not implemented.');
    };
    NewspapersService.prototype.getMockItems = function () {
        return [];
    };
    NewspapersService.prototype.isMock = function () {
        return false;
    };
    NewspapersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NewspapersService);
    return NewspapersService;
}(_list_items_service__WEBPACK_IMPORTED_MODULE_2__["ListItemsService"]));



/***/ }),

/***/ "./src/app/services/reviews/reviews.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/reviews/reviews.service.ts ***!
  \*****************************************************/
/*! exports provided: ReviewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsService", function() { return ReviewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/settings.service */ "./src/app/services/settings/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewsService = /** @class */ (function () {
    function ReviewsService(client, settingsService) {
        this.client = client;
        this.settingsService = settingsService;
        this.parser = new xml2js__WEBPACK_IMPORTED_MODULE_5__["Parser"]();
        this.encodings = {
            cp1252: '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u20ac\ufffd\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\ufffd\u017d\ufffd\ufffd\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u02dc\u2122\u0161\u203a\u0153\ufffd\u017e\u0178\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff',
            cp1251: '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u0402\u0403\u201a\u0453\u201e\u2026\u2020\u2021\u20ac\u2030\u0409\u2039\u040a\u040c\u040b\u040f\u0452\u2018\u2019\u201c\u201d\u2022\u2013\u2014\ufffd\u2122\u0459\u203a\u045a\u045c\u045b\u045f\xa0\u040e\u045e\u0408\xa4\u0490\xa6\xa7\u0401\xa9\u0404\xab\xac\xad\xae\u0407\xb0\xb1\u0406\u0456\u0491\xb5\xb6\xb7\u0451\u2116\u0454\xbb\u0458\u0405\u0455\u0457\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f'
        };
    }
    ReviewsService.prototype.getItems = function (params) {
        var _this = this;
        var i = 0;
        return this.settingsService.getRssLink().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (rssLink) { return _this.client.get(rssLink, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'text/xml')
                .append('Access-Control-Allow-Methods', 'GET')
                .append('Access-Control-Allow-Origin', '*')
                .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
            responseType: 'text'
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (data) { return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) { return _this.parser.parseString(data, function (err, res) { return observer.next(res); }); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (xml) { return xml.rss.channel[0].item.map(function (item) { return ({ id: i++, title: item.title, url: item.link, source: 'МЕТАЛИНФО', date: moment__WEBPACK_IMPORTED_MODULE_4__(item.pubDate).toDate() }); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reviews) { return reviews.sort(function (a, b) { return b.date.getTime() - a.date.getTime(); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reviews) { return params && params.top && (reviews.length > params.top) ? reviews.slice(0, params.top) : reviews; }));
    };
    ReviewsService.prototype.decodeBytes = function (bytes, encoding) {
        var enc = this.encodings[encoding];
        var n = bytes.length;
        var chars = new Array(n);
        for (var i = 0; i < n; i++) {
            chars[i] = enc.charAt(bytes.charCodeAt(i));
        }
        return chars.join('');
    };
    ReviewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]])
    ], ReviewsService);
    return ReviewsService;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map