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
    }
    if (dataRes.token) {
        localStorage.setItem("token", dataRes.token)
        alert("login succesfull")
    }
    console.log(dataRes.user.userName);
}