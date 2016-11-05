var assert = require("assert");
var DI = require("../app/DependencyInjection");

var deps = {
	'dep1': function () {return 'this is dep1';},
	'dep2': function () {return 'this is dep2';},
	'dep3': function () {return 'this is dep3';},
	'dep4': function () {return 'this is dep4';},
	'app': function () {return 'this is app';},
	'login': function () {return 'this is login';},
	'i18n': function () {return 'this is i18n';}
};

var di = new DI(deps);

describe('App', function(){

	it('should match array', function(){
		var myFunc = di.inject(function (dep3, dep1, dep2) {
			return [dep1(), dep2(), dep3()].join(' -> ');
		});
		assert.equal(myFunc(), 'this is dep1 -> this is dep2 -> this is dep3');

	});

	it('should return 3', function(){
		var myFunc = di.inject(function (app, login, i18n) {
			function nested(d, e, f){};
			var args = Array.prototype.slice.call(arguments, 0);
			return args.length;
		});
		assert.equal(myFunc(), 3);
	});

});

