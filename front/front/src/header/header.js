import "./header.css"
import { Home } from "../pages/home/home"
import Login from "../pages/login/login"



const routes = [
    {
        texto: "Home",
        function: Home
    }, 
    {
        texto: "Login",
        function: Login
    }
]
 export const Header = () => {
    const header = document.querySelector("header")
    const nav = document.createElement("nav")

    header.innerHTML = "<h1> Charro Gym</h1>"

    for (const route of routes){
        const a = document.createElement("a")
        a.href = "#"
        a.textContent = route.texto
        a.addEventListener("click", route.function)

        nav.appendChild(a)
    }
    header.appendChild(nav)
}

