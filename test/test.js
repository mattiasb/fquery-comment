/*jshint node: true */
/*global describe, before, beforeEach, it */
'use strict';


var assert = require('assert');
var fQuery = require('fquery');


describe('fQuery.fn.replace()', function () {

    before(function () {

        fQuery.plugin(require('../'));
    });

    beforeEach(function () {

        this.fquery1 = fQuery([
            fQuery.Blob.fromContent('#1', 'a'),
            fQuery.Blob.fromContent('#2', 'b'),
            fQuery.Blob.fromContent('#3', 'c')
        ]);

        this.fquery2 = fQuery([
            fQuery.Blob.fromContent('#1', 'xaxax'),
            fQuery.Blob.fromContent('#2', 'xbxbx'),
            fQuery.Blob.fromContent('#3', 'xcxcx')
        ]);

        this.fquery3 = fQuery([
            fQuery.Blob.fromContent('#1', '_a_b_c_')
        ]);
    });

    it('is function', function () {

        assert.ok(fQuery._.isFunction(fQuery.fn.replace));
    });

    it('expects 2 parameters', function () {

        assert.strictEqual(fQuery.fn.replace.length, 2);
    });

    it('works with no parameter', function () {

        fQuery().replace();
    });

    it('returns this, is chainable', function () {

        var x = fQuery();
        var y = x.replace();
        assert.strictEqual(x, y);
    });

    it('test #1', function () {

        this.fquery1.replace();
        assert.strictEqual(this.fquery1.get(0).content, 'a');
        assert.strictEqual(this.fquery1.get(1).content, 'b');
        assert.strictEqual(this.fquery1.get(2).content, 'c');
    });

    it('test #2', function () {

        this.fquery2.replace();
        assert.strictEqual(this.fquery2.get(0).content, 'xaxax');
        assert.strictEqual(this.fquery2.get(1).content, 'xbxbx');
        assert.strictEqual(this.fquery2.get(2).content, 'xcxcx');
    });

    it('test #3', function () {

        this.fquery1.replace('0', '1');
        assert.strictEqual(this.fquery1.get(0).content, 'a');
        assert.strictEqual(this.fquery1.get(1).content, 'b');
        assert.strictEqual(this.fquery1.get(2).content, 'c');
    });

    it('test #4', function () {

        this.fquery2.replace('0', '1');
        assert.strictEqual(this.fquery2.get(0).content, 'xaxax');
        assert.strictEqual(this.fquery2.get(1).content, 'xbxbx');
        assert.strictEqual(this.fquery2.get(2).content, 'xcxcx');
    });

    it('test #5', function () {

        this.fquery1.replace('a', 'x');
        assert.strictEqual(this.fquery1.get(0).content, 'x');
        assert.strictEqual(this.fquery1.get(1).content, 'b');
        assert.strictEqual(this.fquery1.get(2).content, 'c');
    });

    it('test #6', function () {

        this.fquery2.replace('a', 'x');
        assert.strictEqual(this.fquery2.get(0).content, 'xxxax');
        assert.strictEqual(this.fquery2.get(1).content, 'xbxbx');
        assert.strictEqual(this.fquery2.get(2).content, 'xcxcx');
    });

    it('test #9', function () {

        this.fquery1.replace(/0/, '1');
        assert.strictEqual(this.fquery1.get(0).content, 'a');
        assert.strictEqual(this.fquery1.get(1).content, 'b');
        assert.strictEqual(this.fquery1.get(2).content, 'c');
    });

    it('test #10', function () {

        this.fquery2.replace(/0/, '1');
        assert.strictEqual(this.fquery2.get(0).content, 'xaxax');
        assert.strictEqual(this.fquery2.get(1).content, 'xbxbx');
        assert.strictEqual(this.fquery2.get(2).content, 'xcxcx');
    });

    it('test #11', function () {

        this.fquery1.replace(/a/, 'x');
        assert.strictEqual(this.fquery1.get(0).content, 'x');
        assert.strictEqual(this.fquery1.get(1).content, 'b');
        assert.strictEqual(this.fquery1.get(2).content, 'c');
    });

    it('test #12', function () {

        this.fquery2.replace(/a/, 'x');
        assert.strictEqual(this.fquery2.get(0).content, 'xxxax');
        assert.strictEqual(this.fquery2.get(1).content, 'xbxbx');
        assert.strictEqual(this.fquery2.get(2).content, 'xcxcx');
    });

    it('test #15', function () {

        this.fquery3.replace(/a/, 'x');
        assert.strictEqual(this.fquery3.get(0).content, '_x_b_c_');
    });

    it('test #16', function () {

        this.fquery3.replace(/_/, 'x');
        assert.strictEqual(this.fquery3.get(0).content, 'xa_b_c_');
    });

    it('test #17', function () {

        this.fquery3.replace(/_/g, 'x');
        assert.strictEqual(this.fquery3.get(0).content, 'xaxbxcx');
    });

    it('test #18', function () {

        this.fquery3.replace(/[abc]/, 'x');
        assert.strictEqual(this.fquery3.get(0).content, '_x_b_c_');
    });

    it('test #19', function () {

        this.fquery3.replace(/[abc]/g, 'x');
        assert.strictEqual(this.fquery3.get(0).content, '_x_x_x_');
    });
});
