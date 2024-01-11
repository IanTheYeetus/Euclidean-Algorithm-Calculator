document.getElementById('numberForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const firstNumber = parseInt(document.getElementById('firstNumber').value, 10);
  const secondNumber = parseInt(document.getElementById('secondNumber').value, 10);

  // Perform the desired operation with the numbers
  // Here, we find the greatest common divisor (GCD)
  let gcd = function(a, b) {
    return !b ? a : gcd(b, a % b);
  };

  let resultGCD = gcd(firstNumber, secondNumber);

  // Displaying the GCD result in the result div
  document.getElementById('result').textContent = "The greatest common divisor of " + firstNumber + " and " + secondNumber + " is " + resultGCD + ".";

  // Additional functionality for interval calculations
  let pole = [4, 1, 12, 8, 9, 3, 10];
  let polePrefix = [];
  let y = 0;

  for(let i = 0; i < pole.length; i++){
      y += pole[i];
      polePrefix.push(y);
  }

  function intervalise(a, b) {
    if (a < 1 || b > polePrefix.length || a >= b) {
      return 'Invalid interval'; // Or some other error handling.
    } else {
      let intervalSum = polePrefix[b - 1] - (a > 1 ? polePrefix[a - 2] : 0);
      return intervalSum;
    }
  }

  // Assuming that firstNumber and secondNumber are used as interval indices
  let resultInterval = intervalise(firstNumber, secondNumber);

  // Appending the interval calculation result to the result div
  document.getElementById('result').textContent += " The interval sum from position " + firstNumber + " to " + secondNumber + " is " + resultInterval + ".";
});
  
