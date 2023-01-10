const auth = () => {

  // ------------------- Авторизация ---------------------------

  const authButton = document.querySelector("#auth-button");
  const modalAuth = document.querySelector(".modal-auth");
  const closeAuthButton = document.querySelector(".close-auth");

  authButton.addEventListener("click", () => {
    modalAuth.style.display = "flex";
  });
  closeAuthButton.addEventListener("click", () => {
    modalAuth.style.display = "none";
  });

  // authButton.addEventListener('click', toggleModalAuth);
  // closeAuthButton.addEventListener('click', toggleModalAuth);

  // function toggleModalAuth () {
  //   modalAuth.classList.toggle('is-open');
  // }

  const logInForm = document.getElementById("logInForm");
  const inputLogin = document.getElementById("login");
  const inputPassword = document.getElementById("password");
  const buttonOut = document.querySelector(".button-out");
  const userName = document.querySelector(".user-name");
  const buttonCart = document.querySelector(".button-card");

  buttonOut.addEventListener("click", () => {
    logout();
  });

  const login = (user) => {
    authButton.style.display = "none";
    buttonOut.style.display = "flex";
    userName.style.display = "flex";
    buttonCart.style.display = "flex";
    userName.textContent = user.login;
    modalAuth.style.display = "none";
  };

  const logout = () => {
    authButton.style.display = "flex";
    buttonOut.style.display = "none";
    userName.style.display = "none";
    buttonCart.style.display = "none";
    userName.textContent = "";

    localStorage.removeItem("user");
  };

  logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(inputLogin.value);
    console.log(inputPassword.value);
    const user = {
      login: inputLogin.value,
      password: inputPassword.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    login(user);
  });

  if (localStorage.getItem("user")) {
    login(JSON.parse(localStorage.getItem("user")));
  }

  // ------------------- Инициализация WOW ---------------------------
  new WOW().init();
};

auth();
