document
  .getElementById('signUpButton')
  .addEventListener('click', signUpHandler);

async function signUpHandler() {
  let realName = document.getElementById('realName');
  let username = document.getElementById('username');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let nameAlertMessage = document.getElementById('nameAlertMessage');
  let usernameAlertMessage = document.getElementById('usernameAlertMessage');
  let emailAlertMessage = document.getElementById('emailAlertMessage');
  let passwordAlertMessage = document.getElementById('passwordAlertMessage');

  if (realName.value.length < 3) {
    nameAlertMessage.style.display = 'block';
  }

  let userNameValidator = /[A-Za-z]/;
  //   console.log(userNameValidator.test(username.value));
  if (!userNameValidator.test(username.value)) {
    usernameAlertMessage.style.display = 'block';
  }
  let emailValidator = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  if (!emailValidator.test(email.value)) {
    emailAlertMessage.style.display = 'block';
  }

  if (password.value.length < 4) {
    passwordAlertMessage.style.display = 'block';
  }

  if (
    realName.value.length > 3 &&
    userNameValidator.test(username.value) &&
    emailValidator.test(email.value) &&
    password.value.length > 4
  ) {
    // here when the condition is correct

    let url = 'https://666061a45425580055b3a3d4.mockapi.io/users';

    let res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        realName: realName.value,
        userName: username.value,
        email: email.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    let data = await res.json();
    window.location.href = 'login.html';
  }
}
