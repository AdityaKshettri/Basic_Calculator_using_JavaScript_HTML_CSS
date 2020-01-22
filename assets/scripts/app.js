const defaultResult=0;
let currentResult=defaultResult;
let logEntries=[];

function getUserNumberInput()
{
    return parseInt(userInput.value);
}

function createAndWriteLog(operator,resultBeforeCalc,calcNumber)
{
    const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);//from vendor.js file
}

function writeToLog(operationIdentifier,previousResult,operationNumber,newResult)
{
    const logEntry = {
        operation: operationIdentifier,
        prevResult: previousResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType)
{
    const enteredNumber=getUserNumberInput();
    if(!enteredNumber||calculationType!=='ADD'&&calculationType!=='SUB'&&calculationType!=='MUL'
    &&calculationType!=='DIV'&&calculationType!=='MOD'&&calculationType!=='EXP')
    {
        return;
    }
    const initialResult=currentResult;
    let mathOperator;
    if(calculationType==='ADD')
    {
        currentResult+=enteredNumber;
        mathOperator='+';
    }
    else if(calculationType==='SUB')
    {
        currentResult-=enteredNumber;
        mathOperator='-';
    }
    else if(calculationType==='MUL')
    {
        currentResult*=enteredNumber;
        mathOperator='*';
    }
    else if(calculationType==='DIV')
    {
        currentResult/=enteredNumber;
        mathOperator='/';
    }
    else if(calculationType==='MOD')
    {
        currentResult%=enteredNumber;
        mathOperator='%';
    }
    else
    {
        currentResult**=enteredNumber;
        mathOperator='**';
    }
    createAndWriteLog(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}

function addition()
{
    calculateResult('ADD');
}

function subtract()
{
    calculateResult('SUB');
}

function multiply()
{
    calculateResult('MUL');
}

function divide()
{
    calculateResult('DIV');
}

function modulus()
{
    calculateResult('MOD');
}

function exponent()
{
    calculateResult('EXP');
}

additionBtn.addEventListener('click',addition);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
modulusBtn.addEventListener('click',modulus);
exponentBtn.addEventListener('click',exponent);

