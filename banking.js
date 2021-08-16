// deposite_function------------------------
function adinput(input) {

    const addAmount = document.getElementById(input);
    const addAmount1 = addAmount.value;
    const addAmount2 = parseFloat(addAmount1);

    return addAmount2;

}
// total function---------------------------
function totalvalue(inputamount, addAmount2) {
    const current = document.getElementById(inputamount);
    const current1 = current.innerText;
    const current2 = parseFloat(current1);


    const total = current2 + addAmount2;
    return total;

}

// depositmethod---------------------------------

const depositeButton = document.getElementById('deposite_button');
depositeButton.addEventListener('click', function () {

    const addAmount2 = adinput('deposite')
    const total = totalvalue('currentAmount', addAmount2)

    currentAmount.innerText = total;
    deposite.value = '';

    const balance1 = document.getElementById('balance');
    const balance2 = balance1.innerText;
    const balance3 = parseFloat(balance2);

    const total_balance = balance3 + addAmount2;
    balance.innerText = total_balance;
})

// withdraw-------------------------------------------------
const withdrawButton = document.getElementById('withdraw_button');
withdrawButton.addEventListener('click', function () {



    const withdraw3 = adinput('withdraw')
    const total = totalvalue('withdrawAmmount', withdraw3)
    withdrawAmmount.innerText = total;
    withdraw.value = '';



    const balance1 = document.getElementById('balance');
    const balance2 = balance1.innerText;
    const balance3 = parseFloat(balance2);

    const total_balance = balance3 - withdraw3;
    balance.innerText = total_balance;


})
