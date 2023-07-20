
let numbers =document.querySelectorAll('#btnNumber');
let operator =document.querySelectorAll('#sign');
let decimalNumber =document.querySelector('#decimal');
let solution =document.querySelector('#solution');
let monitor =document.querySelector('#monitor');
let clear =document.querySelector('#clear');
let delet =document.querySelector('#delete');

let number1 ='';
let anOperator='';
let number2 ='';

numbers.forEach(numbers=>
  {
      
    numbers.addEventListener('click',()=>{
      monitor.textContent +=numbers.textContent;
    });
  });
  operator.forEach(operator=>
    {
        
      operator.addEventListener('click',()=>{
        number1=monitor.textContent;
        anOperator=operator.textContent;
        monitor.textContent='';
      });
    });

    solution.addEventListener('click',()=>{
     number2=monitor.textContent;
     number1=parseFloat(number1);
     number2=parseFloat(number2);
     let res = operate(anOperator,number1,number2);
     monitor.textContent= res;
     number2='';
     anOperator='';
    
    });

    clear.addEventListener('click',()=>{
      monitor.textContent='';
    });
    delet.addEventListener('click',()=>{
      monitor.textContent=monitor.textContent.slice(0,-1);
    });
    decimalNumber.addEventListener('click',()=>{

      if(!monitor.textContent.includes('.')){
        monitor.textContent+=decimalNumber.textContent;
      }   
    });

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case '+':
      return add(x, y);
      break;
    case '-':
      return subtract(x, y);
      break;
    case '*':
      return multiply(x, y);
      break;
    case '/':
      if(y!=0){
        return divide(x, y);
        break;
      }
      else{
        return "null";
        break;
      }
    default:
      return null;
  }
}

