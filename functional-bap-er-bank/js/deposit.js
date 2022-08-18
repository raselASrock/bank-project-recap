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
const textElement = document.getElementById(elementId)
const textElementValueString = textElement.innerText;
const textElementValue = parseFloat(textElementValueString);
return textElementValue;
}

function setTextElementValueById ()



document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit Button Clicked');


const newDepositAmount = getInputFieldValueById('deposit-field')
/*
1. get previous deposit total by id


*/ 

const previousDepositTotal = getTextElementValueById('deposit-total')

// Calculate new deposit total 

const newDepositTotal = previousDepositTotal + newDepositAmount ;
balanceTotalElement.innerText = newBalanceTotal;

})