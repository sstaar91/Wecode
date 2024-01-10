const loginForm = document.querySelector(".loginForm");

const idInput = document.getElementById("id");
const pwInput = document.getElementById("pw");

const signinBtn = document.getElementById("signinBtn");
const signUpBtn = document.getElementById("signUpBtn");

const handleInput = () => {
  const isInputValid = checkValid(idInput.value, pwInput.value);
  changeSigninBtn(isInputValid);
};

const checkValid = (id, pw) => {
  return id.includes("@") && pw.length >= 5;
};

const changeSigninBtn = (status) => {
  signinBtn.disabled = !status;
  signinBtn.style.opacity = status ? 1 : 0.5;
  signinBtn.style.cursor = status ? "pointer" : "not-allowed";
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("환영합니다!");
  location.replace("../Main/index.html");
});

for (let el of loginForm) {
  el.addEventListener("input", handleInput);
}
