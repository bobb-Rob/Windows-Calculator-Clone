const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operatorEl = document.querySelectorAll(".operator");
const equalEl = document.querySelector(".equal-to");
const clearEl = document.querySelector(".clear-all");
const clearLastEntryEl = document.querySelector(".last-entry-clear");


let disNum1 = '';
let disNum2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;


numbersEl.forEach(num => {
    num.addEventListener("click", (e) =>{
    if(e.target.innerText === '.' && !haveDot){
        haveDot = true;
    }else if (e.target.innerText === '.' && haveDot){
    return;
    } 
    disNum2 += e.target.innerText;
    display2El.innerText = disNum2
    })
})

operatorEl.forEach(operation => {
    operation.addEventListener('click', (e)=> {
    if(disNum2) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if(disNum1 && disNum2 && lastOperation){
        mathOperation();
    }else{
        result = parseFloat(disNum2)
        
    }
    clearVar(operationName);
    lastOperation = operationName;
   })
})


function clearVar(name = ''){
disNum1 += disNum2 + ' ' + name + ' ';
display1El.innerText = disNum1;
display2El.innerText = '';
disNum2 = '';
tempResultEl.innerText = result;
}


function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(disNum2);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(disNum2);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(disNum2);    
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(disNum2);
    } else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(disNum2);
    }
}

equalEl.addEventListener('click', (e) =>{
if(!disNum1 || !disNum2) return;
haveDot = false;
mathOperation();
clearVar();
display2El.innerText = result;
tempResultEl.innerText = '';
disNum2 = result;
disNum1 = '';
})


clearEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    disNum1 = '';
    disNum2 = '';
    result = '';
    tempResultEl.innerText = '0';
})

clearLastEntryEl.addEventListener('click', (e) =>{
    display2El.innerText = '';
    disNum2 = '';
    
    console.log(display2El.innerText)
})
