var assert = require("assert"); // node.js core module

describe('First', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
		})
	})

	describe('App', function(){
		var first = require("../app/First");
		it('should return 1', function(){
			assert.equal(10, first.multiple(5, 2));
		})
	})
});