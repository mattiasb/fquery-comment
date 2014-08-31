# fQuery.replace

[![license][license-img]][github] [![github][github-img]][github] [![npm][npm-img]][npm]  
[![version][npm-v-img]][npm] [![downloads][npm-dm-img]][npm] [![dependencies status][gemnasium-img]][gemnasium] [![build status][travis-img]][travis]

[fQuery][fquery] plugin to apply [String.prototype.replace()][replace] to a file's content.


## Install

    > npm install fquery-replace


## Usage

    fQuery.plugin('fquery-replace');
    fQuery(selector).replace(regexp|substr, newSubStr|function);


## License
The MIT License (MIT)

Copyright (c) 2014 Lars Jung (http://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[github]: https://github.com/lrsjng/fquery-replace
[npm]: https://www.npmjs.org/package/fquery-replace
[gemnasium]: https://gemnasium.com/lrsjng/fquery-replace
[travis]: https://travis-ci.org/lrsjng/fquery-replace

[license-img]: http://img.shields.io/badge/license-MIT-a0a060.svg?style=flat-square
[github-img]: http://img.shields.io/badge/github-lrsjng/fquery--replace-a0a060.svg?style=flat-square
[npm-img]: http://img.shields.io/badge/npm-fquery--replace-a0a060.svg?style=flat-square

[npm-v-img]: http://img.shields.io/npm/v/fquery-replace.svg?style=flat-square
[npm-dm-img]: http://img.shields.io/npm/dm/fquery-replace.svg?style=flat-square
[gemnasium-img]: http://img.shields.io/gemnasium/lrsjng/fquery-replace.svg?style=flat-square
[travis-img]: http://img.shields.io/travis/lrsjng/fquery-replace.svg?style=flat-square

[fquery]: https://github.com/lrsjng/fquery
[replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
