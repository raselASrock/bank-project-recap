/*
1.  Add event Listener to the diposit Button
2. Get deposit amount from the deposit input field.
2.1 Make sure conver the string into number
3. Clear the deposit field after getting the value.
4. Get the previous deposit total.
5. Calculate new deposit total and set the value to the deposit total.
*/ 




// Step 1*********************** 


document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit Button Clicked')



// Step 2************************

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount)



// Step: 3*******************


    depositField.value = '';

// Step: 4*****************


const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// Step: 5******************

const newDepositTotal =  previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = newDepositTotal;



})