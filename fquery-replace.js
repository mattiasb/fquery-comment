/*jshint node: true */
'use strict';


module.exports = function (fQuery) {

    fQuery.fn.replace = function (arg1, arg2) {

        return this.edit(function (blob) {

            try {
                blob.content = blob.content.replace(arg1, arg2);
            } catch (e) {
                fQuery.report({
                    type: 'err',
                    method: 'replace',
                    message: e.message,
                    fquery: this,
                    blob: blob,
                    err: e
                });
            }
        });
    };

    fQuery.fn.thenReplace = function (arg1, arg2) {

        return this.then(function () {

            return this.replace(arg1, arg2);
        });
    };
};
