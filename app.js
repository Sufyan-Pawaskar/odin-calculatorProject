let firstDigit = '';
let operator = '';
let secondDigit = '';
const operands = ['x','+','/','-']
const digits = ['1','2','3','4','5','6','7','8','9','0'];
// const display = document.querySelector('#display');
function operate(){
    let num1 = parseFloat(firstDigit);
    let num2 = parseFloat(secondDigit);
    let result = ''
    if (operator === '+'){
        result = num1 + num2;
    } else if (operator === '-'){
        result = num1 - num2;
    } else if (operator === 'x'){
        result = num1 * num2;
    } else if (operator === '/'){
        result = num1 / num2;
    }
    return result;
}
function keyPressed(data){
    console.log(data.innerText);
    var pressedkey = data.innerText;
    if (pressedkey == 'C'){
        display.textContent = '';
        firstDigit ='', operator = '', secondDigit = '';
    }
    if (digits.includes(pressedkey)){
        if(firstDigit == ''){
            firstDigit = pressedkey;
            display.textContent = firstDigit + operator + secondDigit;
        } else if(firstDigit !== '' && operator == '' && secondDigit ==''){
            firstDigit += pressedkey;
            display.textContent = firstDigit + operator + secondDigit;
        } else if(secondDigit == ''){
            secondDigit = pressedkey;
            display.textContent = firstDigit + operator + secondDigit;
        } else if(secondDigit !== '' && operator !== '' && secondDigit !==''){
            secondDigit += pressedkey;
            display.textContent = firstDigit + operator + secondDigit;
        }
    } else if(operands.includes(pressedkey)){
        if(operator == ''){
            operator = pressedkey;
            display.textContent = firstDigit + operator + secondDigit;
        }
    }
    if (pressedkey == '=' && firstDigit !== '' && secondDigit !== '' && operator !== ''){
        let result = operate();
        display.textContent = result.toString();
        firstDigit = result.toString();
        operator = '';
        secondDigit = '';
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const display = document.querySelector('#display');
    let keys = document.querySelectorAll('.key')
    keys.forEach((key)=>{
        // console.log(key);
        key.addEventListener('click',(event)=>{
            keyPressed(event.target);
        })
    })
  });