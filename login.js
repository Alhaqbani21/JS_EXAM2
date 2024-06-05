document.getElementById('loginButton').addEventListener('click', async () => {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let usernameAlertMessage = document.getElementById('usernameAlertMessage');
  let passwordAlertMessage = document.getElementById('passwordAlertMessage');

  let url = 'https://666061a45425580055b3a3d4.mockapi.io/users';

  let res = await fetch(url, { method: 'GET' });
  let data = await res.json();
  console.log(data);

  let dataFound = data.find((element) => {
    if (
      element.userName === username.value &&
      element.password == password.value
    ) {
      return element;
    }
  });

  if (dataFound) {
    window.location.href = 'home.html';
    localStorage.setItem('name', dataFound.realName);
  } else {
    usernameAlertMessage.style.display = 'block';
    passwordAlertMessage.style.display = 'block';
  }
  //   if (!dataFound) {
  //     usernameAlertMessage.style.display = 'block';
  //     passwordAlertMessage.style.display = 'block';
  //   }
});
