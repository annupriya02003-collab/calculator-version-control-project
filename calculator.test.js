const { add, subtract, multiply, divide } = require("./calculator");

test("adds two numbers", () => {
  expect(add(10, 5)).toBe(15);
});

test("subtracts two numbers", () => {
  expect(subtract(10, 5)).toBe(5);
});

test("multiplies two numbers", () => {
  expect(multiply(10, 5)).toBe(50);
});

test("divides two numbers", () => {
  expect(divide(10, 5)).toBe(2);
});

test("does not allow division by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
