var expect = require('chai').expect;
var sayHello = require('./../src/helloworld');

describe('say Hello', function () {
    it('should say "Hello World"', function () {
        expect(sayHello()).to.equal('Hello World');
    });
});