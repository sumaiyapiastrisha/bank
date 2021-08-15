
// login-site--------------------------

const submit_button = document.getElementById('submit');
submit_button.addEventListener('click', function () {

    const emailFeild = document.getElementById('user-email').value;
    console.log(emailFeild);
    const passFeild = document.getElementById('user-password').value;
    console.log(passFeild);
    if (emailFeild == 'abc@gmail.com' && passFeild == 12345) {
        window.location.href = 'banking.html';
    }


})



