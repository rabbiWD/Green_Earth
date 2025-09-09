1. What is the difference between var, let, and const?
Ans: The main differences between var, let, and const in JavaScript relate to their scope, hoisting, reassignment, and re-declaration capabilities.
var is function-scoped, can be re-declared and reassigned, and is initialized with undefined but is subject to hoisting.
let variables can be reassigned after initialization.
const variables cannot, though the properties of an object or array declared with const can still be modified. 

2. What is the difference between map(), forEach(), and filter()?
Ans: The methods map(), forEach(), and filter() are all array iteration methods in JavaScript, but they serve different purposes and have distinct return values.

# forEach():
Return Value: undefined. forEach() does not return a new array or any value; it simply iterates.
Chainability: Not chainable with other array methods because it returns undefined.

# map():
Return Value: A new array containing the results of calling the provided function on every element. The original array remains unchanged.
Chainability: Highly chainable, as it returns a new array, allowing for subsequent array methods like filter() or reduce() to be applied.

# filter():
Return Value: A new array containing only the elements for which the provided function returned true. If no elements satisfy the condition, an empty array is returned. The original array remains unchanged.
Chainability: Highly chainable, as it returns a new array, allowing for subsequent array methods to be applied.

3. What are arrow functions in ES6?
Ans: Arrow functions were introduced in ES6. Arrow functions allows a shorter syntax for function expressions. They offer a shorter and more elegant way to define functions compared to traditional function expressions.

4. How does destructuring assignment work in ES6?
Ans: Destructuring assignment in ES6 is a JavaScript expression that allows for the unpacking of values from arrays or properties from objects into distinct variables

# How it works:
Array Destructuring:
Values are extracted from an array based on their position.
The syntax uses square brackets [] on the left-hand side of the assignment operator, mimicking an array literal.

Object Destructuring:
Properties are extracted from an object based on their key names.
The syntax uses curly braces {} on the left-hand side of the assignment operator, mimicking an object litera

5. Explain template literals in ES6. How are they different from string concatenation?
Ans: Template literals, introduced in ECMAScript 2015 (ES6), provide a more flexible and powerful way to work with strings in JavaScript compared to traditional string concatenation or single/double quotes.
Multi-line Strings: Template literals allow for the creation of multi-line strings without the need for escape characters like \n.
String Interpolation (Embedded Expressions): Template literals enable embedding expressions directly within the string using the ${expression} syntax.
Tagged Templates: This advanced feature allows a function to "tag" a template literal. The tag function receives the string parts and the embedded expressions as arguments, enabling custom processing and manipulation of the template literal's content before it becomes a final string.

Differences from String Concatenation:

# Readability and Syntax:
String Concatenation: Relies on the + operator to join strings and variables, which can become verbose and less readable, especially with many variables or complex expressions.
Template Literals: Provide a cleaner syntax by embedding expressions directly within the backticks, making the code more intuitive and easier to read.

# Multi-line Support:
String Concatenation: Requires explicit \n characters for line breaks, or breaking the string into multiple parts and concatenating them.
Template Literals: Allow you to write multi-line strings directly, preserving the formatting within the backticks.

# Expression Embedding:
String Concatenation: Requires converting non-string values to strings before concatenation, or relies on automatic type coercion.
Template Literals: Allow embedding any valid JavaScript expression, which is then evaluated and its result is inserted into the string.