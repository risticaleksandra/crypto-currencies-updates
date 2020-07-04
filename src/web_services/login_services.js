const deleteLoginFlag = () => {
  return new Promise((resolve) => {
    localStorage.removeItem("loggedIn");
    resolve();
  });
};

const setLoginFlag = () => {
  localStorage.setItem("loggedIn", true);
};

const isLoggedIn = () => {
  console.log(localStorage.getItem("loggedIn"));
  return localStorage.getItem("loggedIn")
    ? localStorage.getItem("loggedIn")
    : false;
};

export { setLoginFlag, isLoggedIn, deleteLoginFlag };
