// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
const createHelloWorld = () => {
	return function () {
		return "Hello World";
	};
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
