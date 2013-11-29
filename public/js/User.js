if (module && module.exports) {
	jQuery = require('jquery');
	Backbone = require('Backbone');
	Backbone.$ = jQuery;
}

var User = Backbone.Model.extend({
	doSync: function(callback) {
		console.log('%s do something sync', this.get('name'));
		callback();
	}
});

if (module && module.exports) {
	module.exports.User = User;
}
