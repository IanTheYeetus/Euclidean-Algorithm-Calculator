document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    let x = firstNumber
    let y = secondNumber
    for (console.log("Working..."); x != y && x != 0 && y != 0;) {
    if( x > y) {
        x = x % y
        //alert("Debug Test 1");
    } else if( x < y){
        y = y % x
        //alert("Debug Test 2");
    }
    }
    console.log(firstNumber, secondNumber);
    console.log("The biggest common divider of " + firstNumber + " and " + secondNumber + " is " + x + ".")
    // Now we update the result div with the GCD result
    alert("The greatest common divisor of " + firstNumber + " and " + secondNumber + " is " + Math.max(x,y) + ".")
      //document.getElementById('result').textContent = ("The greatest common divisor of " + firstNumber + " and " + secondNumber + " is " + Math.max(x,y) + ".");
      //document.getElementById('result').textContent = ("Debug Test 3");
 });
  