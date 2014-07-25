/*jshint node: true */
'use strict';


module.exports = function (fQuery) {

	fQuery.fn.replace = function (rules) {

		rules = rules || [];

		var _ = require('underscore'),
			escapeStringRegexp = require('escape-string-regexp');

		return this.edit(function (blob) {

			var content = blob.content;

			rules.forEach(function (rule) {

				var sel = rule[0],
					repl = rule[1];

				if (_.isString(sel)) {
					sel = new RegExp(escapeStringRegexp(sel), 'g');
				}

				if (_.isRegExp(sel)) {
					content = content.replace(sel, repl);
				}
			});

			blob.content = content;
		});
	};

	fQuery.fn.thenReplace = function (rules) {

		return this.then(function () {

			return this.replace(rules);
		});
	};
};
