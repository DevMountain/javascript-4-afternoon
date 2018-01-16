/* 
  Once you complete a problem, refresh ./constructors.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create a constructor function called CarFactory that will build car objects with make and model properties.
  The values for the make and model will come from two parameters, make and model (in that order).
*/

// Code here



////////// PROBLEM 2 //////////

// Do not edit the code below.
function Employee(name, email, hireDate) {
  this.name = name;
  this.email = email;
  this.hireDate = hireDate;
}
// Do not edit the code above.

/* 
  Invoke the constructor function above and pass in 'Bob', 'bob@gmail.com', and '01-02-98' as arguments.
  Assign the result of the invocation to a variable called bob.
*/

// Code here



////////// PROBLEM 4 //////////

// Do not edit the code below.
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);
prius.moveCar(); // Increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); // Increments mustang' move property by 10. Returns the new move property.
// Do not edit the code above.

/*
  Write a constructor function, including method definitions, which will make the above function invocations function properly.

  Hint: you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10.
  The move property will be added to every object that is being returned from the Car function.
  You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).
*/

// Code here


