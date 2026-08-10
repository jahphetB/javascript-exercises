const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arg) {
  let total = 0;
	arg.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(arg) {
  let total = 1;
  arg.forEach(element => {
    total = element * total;
  });
  return total;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
  let fact = 1;
	if (x === 0) {
    return 1;
  } else {
    while (x >= 1) {
      fact = fact * x;
      x -- ;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
