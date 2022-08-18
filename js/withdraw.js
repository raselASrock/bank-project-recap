/*
1. Add event handler with the withdraw button
2. Get the withdraw amount
3. Clear the withdraw input field
4. Get previous Withdraw total
5. Calculate Total. and set it to the withdraw total element
6. Get previous balance
7. Calculate total balance and set it to the  balance total element

*/ 

// Step: 1***************

document.getElementById('btn-withdeaw').addEventListener('click', function(){


    // Step:2************
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step: 3********************

    withdrawField.value = ''

    // Step: 4*****************

    const withdrawTotalElement = document.getElementById('withdraw-total');

    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step: 5*********************

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;

    withdrawTotalElement.innerText = newWithdrawTotal;

    // Step: 6**********************

    const balanceElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step:7*******************

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    balanceElement.innerText  = newBalanceTotal;



})