# fQuery.replace

[![Version](http://img.shields.io/npm/v/fquery-replace.svg?style=flat)](https://www.npmjs.org/package/fquery-replace)
[![Downloads](http://img.shields.io/npm/dm/fquery-replace.svg?style=flat)](https://www.npmjs.org/package/fquery-replace)
[![License](http://img.shields.io/npm/l/fquery-replace.svg?style=flat)](https://www.npmjs.org/package/fquery-replace)
[![Dependencies Status](http://img.shields.io/david/lrsjng/fquery-replace.svg?style=flat)](https://www.npmjs.org/package/fquery-replace)

[fQuery](https://github.com/lrsjng/fquery) plugin to replace file content via String or RegExp match with new content.
To report a bug or make a feature request please create [a new issue](https://github.com/lrsjng/fquery-replace/issues/new).

References: [GitHub](https://github.com/lrsjng/fquery-replace), [npm](https://www.npmjs.org/package/fquery-replace)


## Install

    > npm install fquery-replace


## Usage

    fQuery.plugin('fquery-replace');
    fQuery(selector).replace([['foo', 'bar'], [/^foo/, 'bar']]);


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
