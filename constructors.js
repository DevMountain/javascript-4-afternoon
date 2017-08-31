// ======================
// Problem 1
// ======================

// Create a constructor function called CarFactory that will build car objects with make and model properties. 

// The values for the make and model will come from two parameters, make and model (in that order). 

// Code here







// ======================
// Problem 2
// ======================

// Invoke the constructor function below and pass in 'Bob', 'bob@gmail.com', and '01-02-98' as arguments. Assign the result of the invocation to a variable called bob.


function Employee(name, email, hireDate) {
    this.name = name;
    this.email = email;
    this.hireDate = hireDate;
}

// Code here








// ======================
// Problem 3
// ======================

// Write a constructor function, including method definitions, which will make the following function invocations function properly.

// Code here




  //Function Invocations Here

  var prius = new Car('Toyota', 'Prius', 2011);
  var mustang = new Car('Ford', 'Mustang', 2013);
  
  //Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).
  
  prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
  mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.




// =======================
// Problem 4
// =======================  







// =======================
// Problem 5
// =======================  


  
  
  
  
  



