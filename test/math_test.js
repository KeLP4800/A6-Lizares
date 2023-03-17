//using Mocha library to conduct tests
var assert = require('assert');

//simple division function
function divide(a, b) {
    return (int)(a / b);
}

//simple subtraction function
function subtract(a, b) {
    return a - b;
}

//describe for the functions collectively
describe('Calculations', function() {
    //describe for the divide function
    describe('Integer division', function() {
        //test cases
        it('should be 2 for 4 / 2', function(){
            var result = divide(4, 2);
            assert.equal(result, 2);
        })
        it('should be 3 for 9 / 3', function(){
            var result = divide(9, 3);
            assert.equal(result, 3);
        })

    });
    //describe for the subtract function
    describe('Subtraction', function() {
        //test cases
        it('should be 9 for 15 - 6', function(){
            var result = subtract(15, 6);
            assert.equal(result, 9);
        })
        it('should be 7 for 14 - 7', function(){
            var result = subtract(14, 7);
            assert.equal(result, 7);
        })
    });
});