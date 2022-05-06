// Assignment code here
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lowercase');
const upperEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbercase');
const symbolEl = document.getElementById('symbolcase');
const generateEl = document.getElementById('generate');
const passwordEl = document.getElementById('password');

const randomPass = 
{
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


generateEl.addEventListener('click', () =>{
  const length = +lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

function generatePassword(lower, upper, number, symbol, length)
{
  let generatedPassword ='';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{upper }, {lower }, {number }, {symbol }].filter(item => Object.values(item)[0]) ;

  console.log('typesArr ', typesArr);
  if(typesCount === 0)
  {
    return 'Enter a Valid Response.';
  }

  for(let i = 0; i < length; i += typesCount)
  {
    typesArr.forEach(type =>{
      const passName = Object.keys(type)[0];
      console.log('function: ', passName);

      generatedPassword += randomPass[passName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword

}


function getRandomLower()
{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper()
{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber()
{
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol()
{
  const symbols = '!@#$%^&*(){}[]=+-/_<>,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}






