/**
 * https://www.codewars.com/kata/monads-the-maybe-monad/javascript
 * very very hard to understand, but I can do it!!!
 */

/////////////////////////////////////////////////////////////////
function Maybe () {
	Object.freeze(this);
}

/////////////////////////////////////////////////////////////////
function Just (x) {
	this.toString = function () { return "Just " + x.toString(); };
	this.just = x;
	Object.freeze(this);
}
Just.prototype = new Maybe();
Just.prototype.constructor = Just;

/////////////////////////////////////////////////////////////////
function Nothing () {
	this.toString = function () { return "Nothing"; };
	Object.freeze(this);
}
Nothing.prototype = new Maybe();
Nothing.prototype.constructor = Nothing;

/////////////////////////////////////////////////////////////////
Maybe.unit = function (x) {
	return new Just(x);
};

Maybe.bind = function(f){
	return function(){
		var m = arguments[0];
		if(m instanceof Maybe) return typeof m.just == 'undefined' ? new Nothing : f(m.just);
		throw "Argument must be instanceof Maybe";
	}
};

Maybe.lift = function(f){
	return function(){
		try{
			return Maybe.unit(f(arguments[0]));
		}catch(ignore){}
		return new Nothing;
	}
};

Maybe.do = function(m){
	var result = arguments[0];
	var fns = Array.prototype.slice.call(arguments, 1);
	for (fn of fns) {
		if( typeof result.just == 'undefined' ) return new Nothing;
		result = fn(result.just);
	}

	return result;
};


module.exports = {
	Maybe, Nothing, Just
};
