/**
 * https://www.codewars.com/kata/categorize-new-member/javascript
 */

var $ = {};

$.openOrSenior = function (data){
	return data.map(([age, handicap])=> {
		return age >= 55 && handicap > 7 ? 'Senior' : 'Open' ;
	});
};

module.exports = $;