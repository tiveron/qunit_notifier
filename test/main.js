var should = require('should'),
	qnotifier = require('../lib/main');

describe('Qunit Notifier', function() {
    describe('with no arguments', function() {
        it('returns an empty array', function() {
            var result = qnotifier();
            result.should.eql([]);
        });
    });
});