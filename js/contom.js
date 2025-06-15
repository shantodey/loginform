document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userNumber = document.getElementById("number").value;
  const userPassword = document.getElementById("password").value;
  const errorMessage = document.getElementById("error");

  const validNumber = /^01[0-9]{9}$/;
  const validPassword = /^[A-Za-z0-9]{4,10}$/;

  if (!validNumber.test(userNumber)) {
    errorMessage.textContent = "Please input a valid phone number";
    return;
  }

  if (!validPassword.test(userPassword)) {
    errorMessage.textContent = "Password must be 4-10 alphanumeric characters";
    return;
  }

  errorMessage.textContent = "";
  document.getElementById("number").value = "";
  document.getElementById("password").value = "";

  window.location.href = "dashbord.html";
});
