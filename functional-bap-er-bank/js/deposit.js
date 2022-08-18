/*
1. Get the element by id
2. Get the value from the element
3. Convert string value to a number

*/ 

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ''
    return inputFieldValue;
}

function getElementValueById(elementId){
const element = document.getElementById(elementId)
const elementValueString = element.innerText;
const value = parseFloat(elementValueString);
return value;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    console.log('Deposit Button Clicked');


const newDepositAmount = getInputFieldValueById('deposit-field')


})