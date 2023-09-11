const url = "https://dummyjson.com/auth/login";
import React from "react";

export const Autenticacion = async ({ username, password }) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
