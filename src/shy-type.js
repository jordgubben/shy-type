(function (global, factory){
	// https://github.com/umdjs/umd/blob/master/templates/returnExports.js 
	if (typeof define == 'function' && define.amd ) {
		define([], factory);
	} else if (typeof module == 'object' && module.exports) {
		module.exports = factory();
	} else {
		global.shyType = factory();
	}
})(this, function() {
	"use strict";

	/**
	 * Verify that a value is a boolean.
	 */
	function bool(value, hint) {
		if(typeof value == "boolean") {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - ": "") +
				"Expected \'" + value + "\' to be a boolean"
				);
		}
	}

	/**
	 * Verify that a value is a number.
	 */
	function num(value, hint) {
		//Value has type number, but is not NaN
		if(typeof value == "number" && value * 0 === 0) {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - " : "") +
				"Expected \'" + value + "\' to be a number"
				);
		}
	}

	/**
	 * Verify that a value is an integer.
	 */
	function int(value, hint) {
		if(num(value, hint) == Math.round(value)) {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - " : "") +
				"Expected \'" + value + "\' to be an integer"
				);			
		}
	}

	/**
	 * Verify that a value is a string.
	 */
	function str(value, hint) {
		if(typeof value == "string") {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - " : "") + 
				"Expected \'" + value + "\' to be a string"
				);
		}
	}


	/**
	 * Verify that a value is an object.
	 */
	function obj(value, hint) {
		if(typeof value == "object" && value !== null) {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - " : "") + 
				"Expected \'" + value + "\' to be an object"
				);
		}
	}

	/**
	 * Verify that a value is a function.
	 */
	function fun(value, hint) {
		if(typeof value == "function") {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - ": "") +
				"Expected \'" + value + "\' to be a function"
				);
		}
	}

	/**
	 * Is this value an array?
	 */
	function isArr(value) {
		return Object.prototype.toString.call(value) === Object.prototype.toString.call([])
	}

	/**
	 * Verify that a value is an array.
	 */
	function arr(value, hint) {
		if(isArr(value)) {
			return value;
		} else {
			throw new TypeError(
				(hint ? hint + " - " : "") + 
				"Expected \'" + value + "\' to be an array"
				);
		}
	}

	return {
			bool: bool,
			int: int,
			num: num,
			str: str,
			obj: obj,
			fun: fun,
			arr: arr
		}

});