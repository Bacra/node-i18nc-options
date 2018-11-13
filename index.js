'use strict';

var utils = require('./lib/utils');
var globalDefaults = require('./lib/defaults');


utils.freeze(globalDefaults);
exports.extend = function(defaults, obj)
{
	if (arguments.length < 2)
	{
		obj = defaults;
		defaults = globalDefaults;
	}

	return utils.extend(defaults, obj);
};

exports.defaults = globalDefaults;
