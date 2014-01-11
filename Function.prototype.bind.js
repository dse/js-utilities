/*jslint browser: true, sloppy: true */
//-----------------------------------------------------------------------------
// Lines above are for jslint, the JavaScript verifier.  http://www.jslint.com/
//-----------------------------------------------------------------------------

// based on
// https://github.com/sstephenson/prototype/blob/e3d5200cef3236b257ddcfb1eb3eabc5c586bedd/src/prototype/lang/function.js
if (!Function.prototype.bind) {
	Function.prototype.bind = function (context) {
		var nop, __method, args, bound;
		if (arguments.length < 2 && typeof arguments[0] === "undefined") {
			return this;
		}
		// if (!Object.isFunction(this)) {
		if (Object.prototype.toString.call(object) !== '[object Function]') {
			throw new TypeError("The object is not callable.");
		}
		nop = function() {};
		__method = this;
		args = Array.prototype.slice.call(arguments, 1);
		bound = function() {
			var a, c;
			a = merge(args, arguments);
			// Ignore the supplied context when the bound function is called with
			// the "new" keyword.
			c = this instanceof bound ? this : context;
			return __method.apply(c, a);
		};
		nop.prototype   = this.prototype;
		bound.prototype = new nop();
		return bound;
	};
}

