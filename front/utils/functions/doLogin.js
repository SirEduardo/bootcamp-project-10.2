import { Header } from "../../src/components/Header/Header";
import { createLoading } from "../../src/components/loading/loading";
import Home from "../../src/pages/Home/home";
import { fetchWrapper } from "../api/api";

export const doLogin = async (e) => {
  e.preventDefault();

  const [emailInput, passwordInput] = e.target;

  const body = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  const loadingElement = createLoading();
  document.body.appendChild(loadingElement)

try {
    const res = await fetchWrapper({
        endpoint: "/auth/login",
        method: "POST",
        body,
      });
    
      const dataRes = await res.json();
      if (dataRes.user && dataRes.user.userName) {
        localStorage.setItem("user", dataRes.user.userName);
        if (dataRes.token) {
          localStorage.setItem("token", dataRes.token);
          alert("login succesfull");
          Header();
          Home();
        }
      } else {
        alert("Debes registrarte primero!");
      }
} catch (error) {
    console.error("Error durante el login", error);
    alert("Ha ocurrido un error durante el login, porfavor vuelve a intentarlo")
}finally {
    document.body.removeChild(loadingElement)
}
};
