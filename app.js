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
        output = num1 + num2;
        result = output.toFixed(2);
    } else if (operator === '-'){
        output = num1 - num2;
        result = output.toFixed(2);
    } else if (operator === 'x'){
        output = num1 * num2;
        result = output.toFixed(2);
    } else if (operator === '/'){
        output = num1 / num2;
        result = output.toFixed(2);
    }
    if (result.toString() === 'NaN' || result.toString() === 'Infinity'){
        result = 'Think Again'
    }
    return result;
}
function keyPressed(data){
    console.log(data.innerText);
    var pressedkey = data.innerText;
    if (pressedkey == 'C'){
        display.textContent = '0.00';
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
        } else{
            result = operate();
            if (result === 'Think Again'){
                firstDigit = '';
                operator = '';
                secondDigit = '';
                display.textContent = result.toString();
            } else {
                firstDigit = result.toString();
                operator = pressedkey;
                secondDigit = '';
                display.textContent = firstDigit + operator + secondDigit;
            }
        }
    }
    if (pressedkey == '=' && firstDigit !== '' && secondDigit !== '' && operator !== ''){
        let result = operate();
        display.textContent = result.toString();
        firstDigit = result.toString();
        if (result === 'Think Again'){
            firstDigit = '';
        }
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