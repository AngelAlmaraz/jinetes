export const getUser = function () {
  const user = sessionStorage.getItem("user");
  if (user === undefined || !user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};
export const getToken = function () {
  return sessionStorage.getItem("token");
};
const user = sessionStorage.getItem("user");
export const setUserSession = function (user: object, token: string) {
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("token", token);
};
export const resetUserSession = function () {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
};

export const reloadUserSession = function () {
  const user = getUser();
  const token = getToken();

  if (user && token) {
    console.log("user&token", user);
    console.log("user&token", token);
    resetUserSession();
    setUserSession(user, token);
  }
};
