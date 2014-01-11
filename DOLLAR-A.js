/*jslint browser: true, sloppy: true */
//-----------------------------------------------------------------------------
// Lines above are for jslint, the JavaScript verifier.  http://www.jslint.com/
//-----------------------------------------------------------------------------

// https://github.com/sstephenson/prototype/blob/e3d5200cef3236b257ddcfb1eb3eabc5c586bedd/src/prototype/lang/array.js#L60
function $A(iterable) {
	var length, results;
	if (!iterable) {
		return [];
	}
	// Safari <2.0.4 crashes when accessing property of a node list with property accessor.
	// It nevertheless works fine with `in` operator, which is why we use it here
	if ('toArray' in Object(iterable)) {
		return iterable.toArray();
	}
	length = iterable.length || 0;
	results = new Array(length);
	while (length--) {
		results[length] = iterable[length];
	}
	return results;
}

