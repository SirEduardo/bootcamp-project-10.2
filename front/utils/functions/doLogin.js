
import { Header } from "../../src/components/Header/Header";
import Home from "../../src/pages/Home/home";
import { fetchWrapper } from "../api/api";

export const doLogin = async (e) => {
    e.preventDefault()

    const [emailInput, passwordInput] = e.target

    const body = {
        email: emailInput.value,
        password: passwordInput.value,
    }


    const res = await fetchWrapper({
        endpoint: "/auth/login",
        method: "POST",
        body
    })

    const dataRes = await res.json()
    if (dataRes.user && dataRes.user.userName) {
        localStorage.setItem("user", dataRes.user.userName)
        if (dataRes.token) {
            localStorage.setItem("token", dataRes.token)
            alert("login succesfull")
            Header()
            Home()
        }
    }else {
        alert("Debes registrarte primero!")
    }

}