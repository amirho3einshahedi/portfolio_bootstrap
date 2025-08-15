let userWeb = [
    { id: 1, userName: 'amirhossein shahedi', password: '09362645011' },
    { id: 2, userName: 'mohsen khakestari', password: '11111111' },
    { id: 3, userName: 'ali shahedi', password: '09150075916' },
    { id: 4, userName: 'zahra lhakestari', password: '09019527028' },
    { id: 5, userName: 'hossein khakestari', password: '09388385876' },
    { id: 6, userName: 'kosar shahidinia', password: '0935432454' },
    { id: 7, userName: 'vahid khorsandi', password: '09362345211' },
    { id: 8, userName: 'fatemeh shahedi', password: '09362243411' },
    { id: 9, userName: 'mahdi shahidinia', password: '0936344211' },
    { id: 10, userName: 'setayesh shahedi', password: '034342645011' }
]

let userNameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let modalLogin = document.querySelector('.modal');
let formLogin = document.querySelector('.form')
let formReg = document.querySelector('.form-reg')
let userNameReg = document.querySelector('#username-reg');
let passwordReg = document.querySelector('#password-reg');


function submitHandler(event) {
    event.preventDefault();
    dataValidation();
}

function dataValidation() {
    let userNameValue = userNameInput.value;
    let passwordValue = passwordInput.value;
    let isInLog = userWeb.some(function (userLog) {
        return userLog.userName.toLowerCase() === userNameValue.toLowerCase() && userLog.password === passwordValue
    })
    if (isInLog) {
        modalLogin.style.display = 'block';
        modalLogin.style.backgroundColor = 'green';
        modalLogin.textContent = 'Welcome! 😊';
        setTimeout(function () {
            window.location.href = 'home.html'
        }, 2000)
    } else {
        modalLogin.style.display = 'block';
        modalLogin.textContent = 'You can’t sign in. Please check your username and password.';
        modalLogin.style.backgroundColor = '#FF7043';

    }
    setTimeout(function () {
        modalLogin.style.display = 'none';
    }, 3000);

}
function showRegister() {
    formLogin.style.display = 'none'
    formReg.style.display = 'block'
}
function showLogin() {
    formLogin.style.display = 'block'
    formReg.style.display = 'none'
}
function dataValidationReg() {
    let userNameRegValue = userNameReg.value
    let passwordRegValue = passwordReg.value
    let newUser = {
        id: userWeb.length + 1,
        userName: userNameRegValue,
        password: passwordRegValue
    }

    userWeb.push(newUser)
}
console.log(userWeb);
