const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // Within tests/1_unit-tests.js under the test labelled #1 in the Basic Assertions suite, change each assert to either assert.isNull or assert.isNotNull to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'this is an optional error description - e.g. null is null');
      // assert that within this call of isNull function, the first value is null and the second value is the error message 
      assert.isNotNull(1, '1 is not null');
    });

    // Within tests/1_unit-tests.js under the test labelled #2 in the Basic Assertions suite, change each assert to either assert.isDefined() or assert.isUndefined() to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #2
    test('#isDefined, #isUndefined', function () {
      assert.isDefined(null, 'null is not undefined');
      // null is categorically defined, as a no value definition rather than a missing 
      assert.isUndefined(undefined, 'undefined IS undefined');
      assert.isDefined('hello', 'a string is not undefined');
    });

    // Within tests/1_unit-tests.js under the test labelled #3 in the Basic Assertions suite, change each assert to either assert.isOk() or assert.isNotOk() to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #3
    test('#isOk, #isNotOk', function () {
      // isOk and isNotOK is truthy vs falsey 
      assert.isNotOk(null, 'null is falsey');
      // null is falsey
      assert.isOk("I'm truthy", 'a string is truthy');
      // strings are truthy
      assert.isOk(true, 'true is truthy');
      // true is truthy 
    });

    // Within tests/1_unit-tests.js under the test labelled #4 in the Basic Assertions suite, change each assert to either assert.isTrue or assert.isNotTrue to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #4
    test('#isTrue, #isNotTrue', function () {
      // this is hard true check 
      // assert.isTrue(true, 'this will pass with the boolean value true');
      // assert.isTrue('true', 'this will NOT pass with the string value 'true');
      // assert.isTrue(1, 'this will NOT pass with the number value 1');

      assert.isTrue(true, 'true is true');
      assert.isTrue(!!'double negation', 'double negation of a truthy is true');
      assert.isNotTrue({ value: 'truthy' }, 'A truthy object is NOT TRUE (neither is false...)');
    });
  });

  // -----------------------------------------------------------------------------

  suite('Equality', function () {

    // Within tests/1_unit-tests.js under the test labelled #5 in the Equality suite, change each assert to either assert.equal or assert.notEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #5
    test('#equal, #notEqual', function () {
      // ==
      assert.equal(12, '12', 'numbers are coerced into strings with == ');
      assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
      // needs a value, but the comparison is two objects and not the values therein 
      assert.equal(6 * '2', '12', 'no more hints...');
      // even in a equation, the string is coerced before error 
      assert.notEqual(6 + '2', '12', 'type your error message if you want');
    });

    // Within tests/1_unit-tests.js under the test labelled #6 in the Equality suite, change each assert to either assert.strictEqual or assert.notStrictEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #6
    test('#strictEqual, #notStrictEqual', function () {
      // ===
      assert.notStrictEqual(6, '6', "int vs string");
      assert.strictEqual(6, 3 * 2, "int v int");
      assert.strictEqual(6 * '2', 12, "coercion before comparison");
      // the equation's string coercion happens before the comparison so its comparing two ints 
      assert.notStrictEqual([1, 'a', {}], [1, 'a', {}], "array with int, string, object");
      // again, the object throws it off? 
    });

    // Within tests/1_unit-tests.js under the test labelled #7 in the Equality suite, change each assert to either assert.deepEqual or assert.notDeepEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #7
    test('#deepEqual, #notDeepEqual', function () {
      // deep equal will check inside data structures 
      assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "keys order doesn't matter");
      assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, "array elements position does matter !!");
    });
  });

  // -----------------------------------------------------------------------------

  function weirdNumbers(delta) {
    return (1 + delta - Math.random());
  }

  suite('Comparisons', function () {
    // Within tests/1_unit-tests.js under the test labelled #8 in the Comparisons suite, change each assert to either assert.isAbove or assert.isAtMost to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

    // #8
    test('#isAbove, #isAtMost', function () {
      assert.isAtMost('hello'.length, 5);
      assert.isAbove(1, 0);
      assert.isAbove(Math.PI, 3);
      assert.isAtMost(1 - Math.random(), 1);
    });
    // #9
    test('#isBelow, #isAtLeast', function () {
      assert.fail('world'.length, 5);
      assert.fail(2 * Math.random(), 0);
      assert.fail(5 % 2, 2);
      assert.fail(2 / 3, 1);
    });
    // #10
    test('#approximately', function () {
      assert.fail(weirdNumbers(0.5), 1, 0);
      assert.fail(weirdNumbers(0.2), 1, 0);
    });
  });

  // -----------------------------------------------------------------------------

  const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
  const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
  suite('Arrays', function () {
    // #11
    test('#isArray, #isNotArray', function () {
      assert.fail('isThisAnArray?'.split(''), 'String.prototype.split() returns an Array');
      assert.fail([1, 2, 3].indexOf(2), 'indexOf returns a number.');
    });
    // #12
    test('Array #include, #notInclude', function () {
      assert.fail(winterMonths, 'jul', "It's summer in july...");
      assert.fail(backendLanguages, 'javascript', 'JS is a backend language !!');
    });
  });

  // -----------------------------------------------------------------------------

  const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
  };
  suite('Strings', function () {
    // #13
    test('#isString, #isNotString', function () {
      assert.fail(Math.sin(Math.PI / 4), 'a float is not a string');
      assert.fail(process.env.PATH, 'env vars are strings (or undefined)');
      assert.fail(JSON.stringify({ type: 'object' }), 'a JSON is a string');
    });
    // #14
    test('String #include, #notInclude', function () {
      assert.fail('Arrow', 'row', "Arrow contains row...");
      assert.fail('dart', 'queue', "But a dart doesn't contain a queue");
    });
    // #15
    test('#match, #notMatch', function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
      assert.fail(formatPeople('John Doe', 35), regex);
      assert.fail(formatPeople('Paul Smith III', 'twenty-four'), regex);
    });
  });

  // ----------------------------------------------------------------------------- 

  const Car = function () {
    this.model = 'cedan';
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = '737';
    this.engines = ['left', 'right'];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();

  suite('Objects', function () {
    // #16
    test('#property, #notProperty', function () {
      assert.fail(myCar, 'wings', 'A car has not wings');
      assert.fail(airlinePlane, 'engines', 'planes have engines');
      assert.fail(myCar, 'wheels', 'Cars have wheels');
    });
    // #17
    test('#typeOf, #notTypeOf', function () {
      assert.fail(myCar, 'object');
      assert.fail(myCar.model, 'string');
      assert.fail(airlinePlane.wings, 'string');
      assert.fail(airlinePlane.engines, 'array');
      assert.fail(myCar.wheels, 'number');
    });
    // #18
    test('#instanceOf, #notInstanceOf', function () {
      assert.fail(myCar, Plane);
      assert.fail(airlinePlane, Plane);
      assert.fail(airlinePlane, Object, 'everything is an Object');
      assert.fail(myCar.wheels, String);
    });
  });

  // -----------------------------------------------------------------------------
});
