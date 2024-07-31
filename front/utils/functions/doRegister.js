import Login from "../../src/pages/Login/login";
import { fetchWrapper } from "../api/api";

export const doRegister = async (e) => {
  e.preventDefault();

  const [userNameInput, emailInput, passwordInput] = e.target;

  const body = {
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  const res = await fetchWrapper({
    endpoint: "/auth/register",
    method: "POST",
    body,
  });

  console.log(res);
};
