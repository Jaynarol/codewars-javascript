var assert = require("assert");

describe('OpenOrSenior', function(){
	var $ = require("../app/OpenOrSenior");
	it('should be match', function(){
		assert.deepEqual(['Open', 'Senior', 'Open', 'Senior'], $.openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
		assert.deepEqual(['Open', 'Open', 'Open', 'Open'], $.openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]));
		assert.deepEqual(['Senior', 'Open', 'Open', 'Open'], $.openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));
	})
});