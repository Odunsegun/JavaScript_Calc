function appendToDisplay(){
    let num1, num2, num3;

    

    while (true) {
        num1 = window.prompt("Enter first number");
        num1 = parseFloat(num1);
        
        if (!isNaN(num1) && num1 !== "") break;
        alert("Please enter a valid number!");
    }

    while (true) {
        num2 = window.prompt("Enter second number");
        num2 = parseFloat(num2);
        
        if (!isNaN(num2) && num2 !== "") break;
        alert("Please enter a valid number!");
    }

    while (true) {
        sym1 = window.prompt("Enter an operator (+, -, *, /, %, **)");
        
        if (["+", "-", "*", "/", "%", "**"].includes(sym1)) break;
        alert("Please enter a valid operator!");
    }

    
    document.write("<button onclick='appendToDisplay()'>Run Calculator </button>");
    
    switch(sym1){
        case "+":
            document.write(num1 + num2);
            break;
        case "-":
            document.write(num1 - num2);
            break;  
        case "/":
            document.write(num1 / num2);
            break;
        case "*":
            document.write(num1 * num2);
            break;
        case "%":
            document.write(num1 % num2);
            break;
        case "**":
            document.write(num1 ** num2);
            break;
    }
    




    

            
    
}

