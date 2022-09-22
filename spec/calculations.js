const chai = require("chai");
const calculations = require("../app/calculations");

chai.should();

describe("Add two numbers", () => {
  it("Equals 4", () => {
    const total = calculations.add(2, 2);
    total.should.equal(4);
  });
  it("Equals -4", () => {
    const total = calculations.add(-8, 4);
    total.should.equal(-4);
  });
});

describe("Substract two numbers", () => {
  it("Equals 5", () => {
    const total = calculations.substract(7, 2);
    total.should.equal(5);
  });
  it("Equal 0", () => {
    const total = calculations.substract(0, 0);
    total.should.equal(0);
  });
});

describe("Divide two numbers", () => {
  it("Equals 5", () => {
    const total = calculations.divide(40, 8);
    total.should.equal(5);
  });
  it("Equals 0", () => {
    const total = calculations.divide(10, 0);
    total.should.not.equal(0);
  });
});

describe("Multiply two numbers", () => {
  it("Equals 0", () => {
    const total = calculations.multiply(17, 0);
    total.should.equal(0);
  });
  it("Equal 100", () => {
    const total = calculations.multiply(10, 10);
    total.should.equal(100);
  });
});
