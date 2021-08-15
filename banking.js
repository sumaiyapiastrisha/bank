// deposite_function------------------------

const depositeButton = document.getElementById('deposite_button');


depositeButton.addEventListener('click', function () {

    const addAmount = document.getElementById('deposite');
    const addAmount1 = addAmount.value;
    const addAmount2 = parseFloat(addAmount1);
    console.log(addAmount2);

    const current = document.getElementById('currentAmount');
    const current1 = current.innerText;
    const current2 = parseFloat(current1);
    console.log(current2);

    const total = current2 + addAmount2;
    currentAmount.innerText = total;
    deposite.value = '';

    // balance------------------
    const balance1 = document.getElementById('balance');
    const balance2 = balance1.innerText;
    const balance3 = parseFloat(balance2);
    console.log(balance3);
    const total_balance = balance3 + addAmount2;
    balance.innerText = total_balance;
})

// withdraw-------------------------------------------------
const withdrawButton = document.getElementById('withdraw_button');
withdrawButton.addEventListener('click', function () {
    const withdraw1 = document.getElementById('withdraw');
    const withdraw2 = withdraw1.value;
    const withdraw3 = parseFloat(withdraw2);
    withdraw_button.value = '';

    const pwithdraw1 = document.getElementById('withdrawAmmount');
    const pwithdraw2 = pwithdraw1.innerText;
    const pwithdraw3 = parseFloat(pwithdraw2);
    const totalwidthdraw = withdraw3 + pwithdraw3;
    withdrawAmmount.innerText = totalwidthdraw;

    const balance1 = document.getElementById('balance');
    const balance2 = balance1.innerText;
    const balance3 = parseFloat(balance2);
    console.log(balance3);
    const total_balance = balance3 - withdraw3;
    balance.innerText = total_balance;

})
