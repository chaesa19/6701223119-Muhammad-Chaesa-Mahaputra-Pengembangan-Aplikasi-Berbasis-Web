// proses.js
function calculate() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    let result;
    
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      result = num1 / num2;
    }
    alert("Hasil: " + result);
  }
  