/**
 * https://www.codewars.com/kata/dependency-injection/javascript
 * Very Hard!!, This is new knowledge for me :)
 */

var DI = function(dependency){
	this.dependency = dependency;
};

DI.prototype.inject = function(func){
	var params = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '').split(',').filter(n => n.length > 0);
	var dependency = this.dependency;
	return function() {
		return func.apply(this, params.map(function(name) {
			return dependency[name];
		}));
	};
};

module.exports = DI;