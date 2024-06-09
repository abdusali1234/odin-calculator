
const display = document.getElementById("display");
//const equalsBtn = document.getElementById("equalsBtn");
clearDisplay();

function appendToDisplay(input){

    display.value += input;
let equationComponents = display.value.match(/[^\d()]+|[\d.]+/g);
    if (equationComponents.length > 3){
        calculate();
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    let equationComponents = display.value
                                .match(/[^\d()]+|[\d.]+/g)
                                .slice(0,3);
    const firstOperand = equationComponents[0];
    const operator = equationComponents[1].slice(0,1);
    const secondOperand = equationComponents[2];

    if (operator == "+"){
        try {display.value = Number(firstOperand) + Number(secondOperand);}
        catch(error){display.value = "Error";}
    } 
    else if (operator == "*"){
        try {display.value = Number(firstOperand) * Number(secondOperand);}
        catch(error){display.value = "Error";}
    }
    else if (operator == "-"){
        try {display.value = Number(firstOperand) - Number(secondOperand);}
        catch(error){display.value = "Error";}
    } 
    else if (operator == "/"){
        try {display.value = Number(firstOperand) / Number(secondOperand);}
        catch(error){display.value = "Error";}
    } 

    console.log(firstOperand, operator, secondOperand);
}