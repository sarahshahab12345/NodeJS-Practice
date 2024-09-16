//=====================Login Authentication=======================

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Sarah" && password === "123") {
        resolve("User Authenticated");
      } else {
        reject("User not Authenticated");
      }
    }, 3000);
  });
};

const goToHome = (authStatus) => {
  return Promise.resolve(`Go To Home ${authStatus}`);
};

login("Sarah", "123")
  .then((e) => {
    console.log("User Authenticated");
    return goToHome(e);
  })
  .catch((err) => {
    console.log("Authentication Failed");
  });
