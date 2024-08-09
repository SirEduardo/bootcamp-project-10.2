import { createLoading } from "../../src/components/loading/loading";
import { fetchWrapper } from "../api/api";

export const doRegister = async (e) => {
  e.preventDefault();

  const [userNameInput, emailInput, passwordInput] = e.target;

  const body = {
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  const loadingElement = createLoading()
  document.body.appendChild(loadingElement)
try {
  const res = await fetchWrapper({
    endpoint: "/auth/register",
    method: "POST",
    body,
  });

  const response = await res.json()
  alert(response);
} catch (error) {
  console.error("Error durante el registro", error);
  alert("Ha ocurrido un error haciendo el registro")
}finally {
  document.body.removeChild(loadingElement)
}
};
