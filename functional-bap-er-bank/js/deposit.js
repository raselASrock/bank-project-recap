/*
1. Get the element by id
2. Get the value from the element
3. Convert string value to a number

*/ 





document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit Button Clicked');


const newDepositAmount = getInputFieldValueById('deposit-field')
/*
1. get previous deposit total by id


*/ 

const previousDepositTotal = getTextElementValueById('deposit-total')

// Calculate new deposit total 

const newDepositTotal = previousDepositTotal + newDepositAmount ;
// set deposit total value 


setTextElementValueById('deposit-total', newDepositTotal);

// Get previous Balance by using the function 

const previousBalanceTotal = getTextElementValueById('balance-total')
const newBalanceTotal = previousBalanceTotal + newDepositAmount ;
setTextElementValueById('balance-total', newBalanceTotal);



})