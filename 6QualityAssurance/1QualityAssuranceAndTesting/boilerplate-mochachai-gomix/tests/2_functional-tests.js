const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);


// Mocha allows testing asyncronous operations. There is a small (BIG) difference. Can you spot it?

// We can test our API endpoints using a plugin, called chai-http. Let's see how it works. And remember, API calls are asynchronous.

// The following is an example of a test using chai-http for the 'GET /hello?name=[name] => "hello [name]"' suite. The test sends a name string in a url query string (?name=John) using a GETrequest to the server. In the end method's callback function, the response object (res) is received and contains the status property. The first assert.equal checks if the status is equal to 200. The second assert.equal checks that the response string (res.text) is equal to "hello John".

// suite('GET /hello?name=[name] => "hello [name]"', function () {
//   test("?name=John", function (done) {
//     chai
//       .request(server)
//       .get("/hello?name=John")
//       .end(function (err, res) {
//         assert.equal(res.status, 200, "response status should be 200");
//         assert.equal(
//           res.text,
//           "hello John",
//           'response should be "hello John"'
//         );
//         done();
//       });
//   });
// Notice the done parameter in the test's callback function. Calling it at the end without an argument is necessary to signal successful asynchronous completion.

suite("Functional Tests", function () {
  suite("Integration tests with chai-http", function () {

    // Within tests/2_functional-tests.js, alter the 'Test GET /hello with no name' test (// #1) to assert the status and the text response to make the test pass. Do not alter the arguments passed to the asserts.

    // There should be no name in the query; the endpoint responds with hello Guest.

    // #1
    test("Test GET /hello with no name", function (done) {
      chai
        .request(server)
        .get("/hello")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "hello Guest");
          done();
        });
    });

    // Within tests/2_functional-tests.js, alter the 'Test GET /hello with your name' test (// #2) to assert the status and the text response to make the test pass.

    // Send your name in the query, appending ?name=<your_name> to the route. The endpoint responds with 'hello <your_name>'.
    
    // #2
    test("Test GET /hello with your name", function (done) {
      chai
        .request(server)
        .get("/hello?name=Dom")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "hello Dom");
          done();
        });
    });
    // #3
    test('send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .put("/travellers")

        .end(function (err, res) {
          assert.fail();

          done();
        });
    });
    // #4
    test('send {surname: "da Verrazzano"}', function (done) {
      assert.fail();

      done();
    });
  });
});

const Browser = require("zombie");

suite("Functional Tests with Zombie.js", function () {

  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('submit "surname" : "Colombo" - write your e2e test...', function (done) {
      browser.fill("surname", "Colombo").pressButton("submit", function () {
        assert.fail();

        done();
      });
    });
    // #6
    test('submit "surname" : "Vespucci" - write your e2e test...', function (done) {
      assert.fail();

      done();
    });
  });
});
