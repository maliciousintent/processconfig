/*jshint node:true */

module.exports = function _get(key) {
	if (typeof process.config[key] !== 'undefined' && process.config[key] !== '') {
		return process.config[key];
	} else {
		throw new Error('Undefined environment key: `' + key  + '`');
	}
};


module.exports.weak = function _getWeak(key) {
	return process.config[key];
};


module.exports.read = function _read(source) {
	Object.keys(source).forEach(function (key) {
		process.config[key] = process.env[key];
	});
};

