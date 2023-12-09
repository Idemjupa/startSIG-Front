// const url = "https://dummyjson.com/auth/login";
const url = "http://localhost:5000/user/login"

export const Autenticacion = async ({ username, password }) => {
  const login = username
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  };

  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
