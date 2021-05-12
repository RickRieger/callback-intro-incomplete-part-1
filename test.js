const chai = require("chai");
const expect = chai.expect;

const {
  identity,
  first,
  last,
  each,
  indexOf,
  map
} = require("./functions");

describe("identity", function () {
  var uniqueObject = {};

  it("should return whatever value is passed into it", function () {
    expect(identity(1)).to.equal(1);
    expect(identity("string")).to.equal("string");
    expect(identity(false)).to.be.false;
    expect(identity(uniqueObject)).to.equal(uniqueObject);
  });
});

//////////

describe("first", function () {
  it("should be able to pull out the first element of an array", function () {
    expect(first([1, 2, 3])).to.equal(1);
  });

  it("should accept an index argument", function () {
    expect(first([1, 2, 3], 2)).to.eql([1, 2]);
  });

  it("should return empty array if zero is passed in as the index", function () {
    expect(first([1, 2, 3], 0)).to.eql([]);
  });

  it("should return all the array's elements if the index argument is larger than the length of the array", function () {
    expect(first([1, 2, 3], 5)).to.eql([1, 2, 3]);
  });
});

// // //////////

describe("last", function () {
  it("should pull the last element from an array", function () {
    expect(last([1, 2, 3])).to.equal(3);
  });

  it("should accept an index argument", function () {
    expect(last([1, 2, 3], 2)).to.eql([2, 3]);
  });

  it("should return empty array if zero is passed in as the index", function () {
    expect(last([1, 2, 3], 0)).to.eql([]);
  });

  it("should return all the array's elements if the index argument is larger than the length of the array", function () {
    expect(last([1, 2, 3], 5)).to.eql([1, 2, 3]);
  });
});

// // ///////////

describe("each", function () {
  it("should iterate over arrays, providing access to the element, index, and array itself", function () {
    var animals = ["ant", "bat", "cat"];
    var iterationInputs = [];

    each(animals, function (animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });

    expect(iterationInputs).to.eql([
      ["ant", 0, animals],
      ["bat", 1, animals],
      ["cat", 2, animals],
    ]);
  });

  it("should only iterate over the array elements, not properties of the array", function () {
    var animals = ["ant", "bat", "cat"];
    var iterationInputs = [];

    animals.shouldBeIgnored = "Ignore me!";

    each(animals, function (animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });

    expect(iterationInputs).to.eql([
      ["ant", 0, animals],
      ["bat", 1, animals],
      ["cat", 2, animals],
    ]);
  });

  it("should iterate over objects, providing access to the element, index, and object itself", function () {
    var animals = { a: "ant", b: "bat", c: "cat" };
    var iterationInputs = [];

    each(animals, function (animal, key, object) {
      iterationInputs.push([animal, key, object]);
    });

    expect(iterationInputs).to.eql([
      ["ant", "a", animals],
      ["bat", "b", animals],
      ["cat", "c", animals],
    ]);
  });
});

describe("indexOf", function () {
  it("should find 40 in the list", function () {
    var numbers = [10, 20, 30, 40, 50];

    expect(indexOf(numbers, 40)).to.equal(3);
  });

  it("should be able to compute indexOf even when the native function is undefined", function () {
    var numbers = [10, 20, 30];

    expect(indexOf(numbers, 20)).to.equal(1);
  });

  it("returns -1 when the target cannot be found not in the list", function () {
    var numbers = [10, 20, 30, 40, 50];

    expect(indexOf(numbers, 35)).to.equal(-1);
  });

  it("returns the first index that the target can be found at when there are multiple matches", function () {
    var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

    expect(indexOf(numbers, 40)).to.equal(1);
  });
});

describe("map", function () {
  it("should apply a function to every value in an array", function () {
    var doubledNumbers = map([1, 2, 3], function (num) {
      return num * 2;
    });

    expect(doubledNumbers).to.eql([2, 4, 6]);
  });

  it("should produce a brand new array instead of modifying the input array", function () {
    var numbers = [1, 2, 3];
    var mappedNumbers = map(numbers, function (num) {
      return num;
    });

    expect(mappedNumbers).to.not.equal(numbers);
  });
});