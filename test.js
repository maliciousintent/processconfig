
// Set config

process.config = {
	'foo': 'bar',
	'fooz': 'bars',
	'zoo': '',
};

var assert = require('assert');
var config = require('./');

describe('processconfig', function () {
	
	describe('#(key)', function () {

		it('should return the value of an existing key', function () {
			assert.equal(config('foo'), 'bar');
		});

                it('should throw if a key does not exist', function () {
                        assert.throws(function () { console.log(config('faa')); });
                });

                it('should throw if a key is empty', function () {
                        assert.throws(function () { console.log(config('zoo')); });
                });

	});
	

        describe('#weak(key)', function () {

                it('should return the value of an existing key', function () {
                        assert.equal(config.weak('foo'), 'bar');
                });

                it('should return undefined if key does not exist', function () {
                        assert.equal(config.weak('faa'), null);
                });

                it('should return empty string if a key is empty', function () {
                        assert.equal(config.weak('zoo'), '');
                });

        });


});


