(function (){

var type, expect;
if (typeof window === 'undefined') {
	type = require("./shy-type.js");
	expect = require("chai").expect;
} else if (typeof require === 'function' ) {
	before(function (done) {
		require(["shy-type", "chai"], function (_type, _chai) {
			type = _type; expect = _chai.expect; done();
		});
	});
} else {
	type = window.shyType;
	expect = window.chai.expect;
}

//Tests
describe("Module 'shy-type'", function () {
	"use strict";

	it("loads with AMD", function () {
		expect(type).to.exist;
	});
	
	describe("type.bool()", function () {
		
		var bool;
		before(function () {
			bool = type.bool;
		});

		it("returns the value if it is a boolean", function () {	
			var someValue = true;	
			expect(bool(someValue), "Returned value").to.equal(someValue);
		});

		it("throws TypeError if it's not a boolean", function () {
			expect(function () { bool(1) }, "Passing a number").to.throw(TypeError);
		});

		it("optionally provides a hint", function () {
			try {
				bool(undefined, "The hint");
			} catch (error) {
				expect(error.message).to.contain("The hint");
			}
		});
	});

	describe("type.fun()", function () {
		
		var fun;
		before(function () {
			fun = type.fun;
		});

		it("returns the value if it is a function", function () {	
			var someFunction = function doNothing() {};	
			expect(fun(someFunction), "Returned value").to.equal(someFunction);
		});

		it("throws TypeError if it's not a function", function () {
			expect(function () { fun(1) }, "Passing a number").to.throw(TypeError);
		});

		it("optionally provides a hint", function () {
			try {
				fun(undefined, "The hint");
			} catch (error) {
				expect(error.message).to.contain("The hint");
			}
		});
	});

	describe("type.obj()", function () {
		var obj;
		before(function () {
			obj = type.obj;
		});

		it("returns the value if it is an object", function () {	
			var someObject = {};	
			expect(obj(someObject), "Returned value").to.equal(someObject);
		});

		it("throws TypeError if it's not an object", function () {
			expect(function () { obj(1) }, "Passing a number").to.throw(TypeError);
		});

		it("throws TypeError if it's null", function () {
			expect(function () { obj(null) }, "Passing null").to.throw(TypeError);
		});

		it("optionally provides a hint", function () {
			try {
				obj(undefined, "The hint");
			} catch (error) {
				expect(error.message).to.contain("The hint");
			}
		});
	});

	describe("type.num()", function () {
		var num;
		before(function () {
			num = type.num;
		});

		it("optionally provides a hint", function () {
			try {
				num(undefined, "The hint");
			} catch (error) {
				expect(error.message).to.contain("The hint");
			}
		})
	});

	describe("type.int()", function () {
		
		var int;
		before(function () {
			int = type.int;
		});

		it("returns the value if it is an integer", function () {	
			var value = 10;
			expect(int(value), "Returned value").to.equal(value);
		});

		it("throws TypeError if it's not a Number", function () {
			expect(function () { int("10") }, "Passing a string").to.throw(TypeError);
		});

		it("throws TypeError if it's not an integer", function () {
			expect(function () { int(10.2) }, "Passing a a decimal number").to.throw(TypeError);
		});

		it("optionally provides a hint", function () {
			try {
				int(1.2, "The int hint")
			} catch (error) {
				expect(error.message).to.contain("The int hint");
			}

			try {
				int(undefined, "The num hint")
			} catch (error) {
				expect(error.message).to.contain("The num hint");
			}
		})
	});



	describe("type.arr()", function () {
		
		var arr;
		before(function () {
			arr = type.arr;
		});

		it("returns the value if it is an array", function () {	
			var value = [];
			expect(arr(value), "Returned value").to.equal(value);
		});

		it("throws TypeError if it's not an array", function () {
			expect(function () { arr("Not an array") }, "Passing a string").to.throw(TypeError);
		});

		it("optionally provides a hint", function () {
			try {
				arr(undefined, "The hint");
			} catch (error) {
				expect(error.message).to.contain("The hint");
			}
		});

	});
});
}());