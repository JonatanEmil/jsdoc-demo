/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}


/**
 * Subtracts two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws Arguement b must be non-zero.
 */
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

/**
 * Sum or product of 2 numbers with an optional discount.
 * @param {number} value1
 * @param {number} value2
 * @param {string} operationType
 * @param {boolean} hasDiscount
 * @returns {number}
 */
function calculateWithDiscount(value1, value2, operationType, hasDiscount) {
    let result;

    if (operationType === "add") {
        result = add(value1, value2);
    } else if (operationType === "multiply") {
        result = multiply(value1, value2);
    } else {
        throw new Error("Unknown operation type");
    }

    if (hasDiscount) {
        result = result > 100 ? result * 0.9 : result * 0.95;
    }

    return result;
}

module.exports = { add, subtract, multiply, divide, calculateWithDiscount };
