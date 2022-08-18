/*
1. Add withdraw button event Handler
2. Get withdraw Amount by using getInputFieldValueById function
3. Get previous withdraw amount by using getTextElementValueById function
4. Calculate new withdraw total and set the value
4.1 Set new withdraw total by using setTextElementValueById function
5. Get previous balance Total by using getTextElementValueById function
6. Calculate new balance total
7. Set balance total using setTextElementValueById
*/ 


// Step:1***************


document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step: 2***************
    
    
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    
    
    // Step: 3***************

    const previousWithdrawTotal = getTextElementValueById('withdraw-total')

    // Step:4***************

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // Step:5********************

    const previousBalanceTotal = getTextElementValueById('balance-total');

    // Step:6**********************

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // Step:7*************************

    setTextElementValueById('balance-total', newBalanceTotal);

})