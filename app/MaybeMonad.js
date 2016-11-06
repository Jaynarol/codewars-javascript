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
	return function(m){
		if(m instanceof Maybe) return typeof m.just == 'undefined' ? new Nothing : f(m.just);
		throw "Argument must be instanceof Maybe";
	}
};

Maybe.lift = function(f){
	return function(x){
		try{
			return Maybe.unit(f(x));
		}catch(ignore){
			return new Nothing;
		}
	}
};

Maybe.do = function(m){
	var fns = Array.prototype.slice.call(arguments, 1);
	for (fn of fns) {
		m = Maybe.bind(fn)(m);
	}

	return m;
};


module.exports = {
	Maybe, Nothing, Just
};
