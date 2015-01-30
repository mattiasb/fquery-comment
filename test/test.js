/*jshint node: true */
/*global describe, before, beforeEach, it */
'use strict';

var assert = require('assert');
var fQuery = require('fquery');

describe('fQuery.fn.comment()', function () {

    before(function () {
        fQuery.plugin(require('../'));
    });

    beforeEach(function () {
        this.fquery = fQuery([
            fQuery.Blob.fromContent('#1', 'a'),
            fQuery.Blob.fromContent('#2', ['a', 'b'].join('\n')),
            fQuery.Blob.fromContent('#3', ['a', 'b', 'c'].join('\n'))
        ]);
    });

    it('is function', function () {
        assert.ok(fQuery._.isFunction(fQuery.fn.comment));
    });

    it('expects 3 parameters', function () {
        assert.strictEqual(fQuery.fn.comment.length, 3);
    });

    it('works with no parameter', function () {
        fQuery().comment();
    });

    it('returns this, is chainable', function () {
        var x = fQuery();
        var y = x.comment();
        assert.strictEqual(x, y);
    });

    it('test #1 ()', function () {
        this.fquery.comment();
        assert.strictEqual(this.fquery.get(0).content,
                           'a');
        assert.strictEqual(this.fquery.get(1).content,
                           ['a', 'b'].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           ['a', 'b', 'c'].join('\n'));
    });
    it('test #2 (pre)', function () {
        this.fquery.comment("/*");
        assert.strictEqual(this.fquery.get(0).content,
                           ['/*','a'].join('\n'));
        assert.strictEqual(this.fquery.get(1).content,
                           ['/*','a','b'].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           ['/*','a','b','c'].join('\n'));
    });
    it('test #3 (pre, body)', function () {
        this.fquery.comment('/*', ' * ');
        assert.strictEqual(this.fquery.get(0).content,
                           ['/*',' * a'].join('\n'));
        assert.strictEqual(this.fquery.get(1).content,
                           ['/*',' * a',' * b'].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           ['/*',' * a',' * b',' * c'].join('\n'));
    });
    it('test #4 (pre, body, post)', function () {
        this.fquery.comment('/*', ' * ', ' */');
        assert.strictEqual(this.fquery.get(0).content,
                           ['/*',' * a',' */'].join('\n'));
        assert.strictEqual(this.fquery.get(1).content,
                           ['/*',' * a',' * b',' */'].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           ['/*',' * a',' * b',' * c',' */'].join('\n'));
    });

    it('test #5 (body)', function () {
        this.fquery.comment('', ';; ');
        assert.strictEqual(this.fquery.get(0).content,
                           ';; a');
        assert.strictEqual(this.fquery.get(1).content,
                           [';; a',';; b'].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           [';; a',';; b',';; c'].join('\n'));
    });

    it('test #6 (body, post)', function () {
        this.fquery.comment('', ' * ', ' */');
        assert.strictEqual(this.fquery.get(0).content,
                           [' * a',' */'].join('\n'));
        assert.strictEqual(this.fquery.get(1).content,
                           [' * a',' * b',' */'].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           [' * a',' * b',' * c',' */'].join('\n'));
    });

    it('test #7 (post)', function () {
        this.fquery.comment('', '', '=======');
        assert.strictEqual(this.fquery.get(0).content,
                           ['a','======='].join('\n'));
        assert.strictEqual(this.fquery.get(1).content,
                           ['a','b','======='].join('\n'));
        assert.strictEqual(this.fquery.get(2).content,
                           ['a','b','c','======='].join('\n'));
    });
});
