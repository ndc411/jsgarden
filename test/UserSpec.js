var assert = require('assert');
var jQuery = require('jquery');
var User = require('../public/js/User.js').User;


describe('User', function() {

	before(function() {
		user = new User({name: 'lv'});
	});
	after(function() {
	
	});

	it('should have name', function() {
		assert.equal('lv', user.get('name'));
	});
	
	it('should sucess when call doSync()' ,function(done) {
		user.doSync(done);
	});
});
