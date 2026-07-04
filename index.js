/**
 * CSE 310 - Applied Programming
 * Week 01 - Hello World
 * Author: Isaac Pasapera
 *
 * Prints a greeting to the console. This is the entry point of the program
 * and demonstrates the basic run workflow used across the course.
 */

/**
 * Builds the greeting message.
 * @param {string} name - Who to greet.
 * @returns {string} The full greeting.
 */
function buildGreeting(name) {
  return `Hello, ${name}!`;
}

function main() {
  const message = buildGreeting('World');
  console.log(message);
}

main();
