var asset = require("assert");
var Maybe = require("../app/MaybeMonad").Maybe;
var Just = require("../app/MaybeMonad").Just;
var Nothing = require("../app/MaybeMonad").Nothing;

describe("Solution", function(){
	it("unit test", function(){
		asset.equal(Maybe.unit("x") instanceof Maybe, true);
	});

	it("bind  test", function(){
		function mDup(str) {
			return new Just(str+str);
		}
		asset.equal(mDup("abc").toString(), new Just("abcabc").toString());

		var bmDup = Maybe.bind(mDup);
		asset.equal(bmDup(new Nothing).toString(), new Nothing().toString());
		asset.equal(bmDup(new Just("abc")).toString(), new Just("abcabc").toString());
	});

	it("lift test", function(){
		function nonnegative(x) {
			if (isNaN(x) || 0 <= x) {
				return x;
			} else {
				throw "Argument " + x + " must be non-negative";
			}
		}
		var mNonnegative = Maybe.lift(nonnegative);

		asset.equal(mNonnegative(2), new Just(2).toString());
		asset.equal(mNonnegative(-1), new Nothing().toString());
		asset.equal(mNonnegative(undefined).just, new Just(undefined).just);
	});

	it("do  test", function(){
		var mDup = Maybe.lift( function (s) { return  s+s; } );
		var mTrim = Maybe.lift( function (s) { return s.replace(/\s+$/, ''); } );

		asset.equal(Maybe.do( Maybe.unit("abc "), mDup, mTrim, mDup ), new Just("abc abcabc abc").toString());
	});
});