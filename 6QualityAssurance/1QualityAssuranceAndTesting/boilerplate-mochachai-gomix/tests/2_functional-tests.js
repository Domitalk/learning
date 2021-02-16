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

    // Within tests/2_functional-tests.js, alter the 'send {surname: "Colombo"}' test (// #3):

    // Send the following JSON response as a payload:
    
    // {
    //   "surname": "Colombo"
    // }
    // Check for the following, within the request.end callback:
    
    // status
    // type
    // body.name
    // body.surname
    // Follow the assertion order above - we rely on it. Be sure to remove assert.fail(), once complete.

    // #3
    test('send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .put("/travellers")
        // put/get as the req type
        .send({ surname: 'Colombo' })
        // the body of the fetch 
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.equal(res.body.name, 'Cristoforo');
          assert.equal(res.body.surname, 'Colombo');
          done();
        });
    });

    // Within tests/2_functional-tests.js, alter the 'send {surname: "da Verrazzano"}' test (// #4):

    // Send the following JSON response as a payload to the /travellers route:

    // {
    //   "surname": "da Verrazzano"
    // }
    // Check for the following, within a request.end callback:

    // status
    // type
    // body.name
    // body.surname
    // Follow the assertion order above - we rely on it. Be sure to remove assert.fail(), once complete.

    // #4
    test('send {surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .put("/travellers")
        // put/get as the req type
        .send({ surname: 'da Verrazzano' })
        // the body of the fetch 
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.equal(res.body.name, 'Giovanni');
          assert.equal(res.body.surname, 'da Verrazzano');
          done();
        });
    });
  });
});

// In the next challenges we are going to simulate the human interaction with a page using a device called 'Headless Browser'.

// A headless browser is a web browser without a graphical user interface. This kind of tool is particularly useful for testing web pages, as it is able to render and understand HTML, CSS, and JavaScript the same way a browser would.

// For these challenges we are using Zombie.JS. It's a lightweight browser which is totally based on JS, without relying on additional binaries to be installed. This feature makes it usable in an environment such as Repl.it. There are many other (more powerful) options.

// Mocha allows you to prepare the ground running some code before the actual tests. This can be useful for example to create items in the database, which will be used in the successive tests.

// With a headless browser, before the actual testing, we need to visit the page we are going to inspect. The suiteSetup 'hook' is executed only once at the suite startup. Other different hook types can be executed before each test, after each test, or at the end of a suite. See the Mocha docs for more information.

const Browser = require("zombie");

Browser.localhost('example.com', process.env.PORT || 3000);

suite("Functional Tests with Zombie.js", function () {

  // Within tests/2_functional-tests.js, at the root level of the 'Functional Tests with Zombie.js' suite, instantiate a new instance of the Browser object with the following code:

  // const browser = new Browser();
  // Then, use the suiteSetup hook to direct the browser to the / route with the following code:
  
  // suiteSetup(function(done) {
  //   return browser.visit('/', done);
  // });    

  const browser = new Browser();

  suiteSetup(function(done) {
    return browser.visit('/', done);
  });  

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
