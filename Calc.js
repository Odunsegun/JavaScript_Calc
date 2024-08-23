document.addEventListener("DOMContentLoaded", function(){
    function createButton(){
        const button = document.createElement("button");
        button.textContent = "Run Calculator";
        button.addEventListener("click", appendToDisplay);
        document.body.appendChild(button);
    }

    function appendToDisplay() {
        document.body.innerHTML = ""; 
    
        createButton();
    
        let num1 = getValidNumber("Enter first number");
        if (num1 === null) {
            return;
        } 
    
        let num2 = getValidNumber("Enter second number");
        if (num2 === null) {
            return;
        } 
    
        let sym1 = getValidOperator("Enter an operator (+, -, *, /, %, **)");
        if (sym1 === null) {
            return;
        }  
    
       
        
        switch(sym1) {
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
    
    function getValidNumber(message) {
        let num = prompt(message);
        num = parseFloat(num);
        
        if (isNaN(num)) {
            alert("Please enter a valid number!");
            return null; 
        }
        
        return num;
    }
    
    function getValidOperator(message) {
        let operator = prompt(message);
        
        if (!["+", "-", "*", "/", "%", "**"].includes(operator) ) {
            alert("Please enter a valid operator!");
            return null; 
        }
        
        return operator;
    }
    createButton();
    
});




