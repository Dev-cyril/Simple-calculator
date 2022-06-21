while(true){
  let firstNum = prompt("Enter first number: ");
  let operator = prompt ("Enter any of operators(*, -, +, /): ");
  let secondNum = prompt("Enter second number: ");
  
  if (operator == "+"){
  let result = (firstNum*1) + (secondNum*1);
  alert("First Number = " + firstNum + "\n" + "second Number = " + secondNum + "\n" + "Result = " + result);
  console.log("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
  }
  else if (operator == "-"){
    let result = (firstNum*1) - (secondNum*1);
    alert("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
    console.log("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
  }
  else if (operator == "*"){
    let result = (firstNum*1) * (secondNum*1);
    alert("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
    console.log("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
  }
  else if (operator == "÷" || operator == "/"){
    let result = (firstNum*1) / (secondNum*1);
    alert("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
    console.log("First Number = " + firstNum + "\n" + "secondNum = " + secondNum + "\n" + "Result = " + result);
  }
  else{
    alert("Invalid operator or Number. Pleae try again");
  }
  let cont = prompt ("Do you wish to perform another operation?\n1. Yes\n2. No");
  if (cont == "1" || cont == "Yes" || cont == "yes"){
    continue;
  }
  else{
    break;
  }
}
