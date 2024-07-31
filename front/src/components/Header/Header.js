import { navigate } from "../../../utils/functions/navigate"
import { routes } from "../../../utils/routes/routes"
import "./Header.css"

export const Header = () => {
    const header = document.querySelector("header")
    
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")

    for (const route of routes) {
        const li = document.createElement("li")
        const a = document.createElement("a")

        a.addEventListener("click", (e) => navigate(e, route))

        a.textContent = route.text
        a.href = route.path
        li.appendChild(a)
        ul.appendChild(li)
    }
    header.appendChild(nav)
    nav.appendChild(ul)
}