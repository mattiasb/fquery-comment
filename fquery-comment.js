/*jshint node: true */
'use strict';

module.exports = function (fQuery) {
    fQuery.fn.comment = function (pre, body, post) {
        return this.edit(function (blob) {
            try {
                blob.content = fQuery.comment(blob.content, pre, body, post);
            } catch (e) {
                fQuery.report({
                    type: 'err',
                    method: 'comment',
                    message: e.message,
                    fquery: this,
                    blob: blob,
                    err: e
                });
            }
        });
    };
    
    fQuery.fn.thenComment = function (pre, body, post) {
        return this.then(function () {
            return this.comment(pre, body, post);
        });
    };

    fQuery.prepend = function prepend(pre, str) {
        return (pre || "") + str;
    };

    fQuery.comment = function (str, pre, body, post) {
        var ret = "";
        ret += pre ? pre + "\n" : "";
        ret += str
            .split("\n")
            .map(fQuery.prepend.bind(null, body))
            .join("\n");
        ret += (post ? "\n" + post : "");
        
        return ret;
    };
};

