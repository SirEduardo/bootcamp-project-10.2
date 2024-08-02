import { doLogout } from "../../../utils/functions/doLogout";
import { navigate } from "../../../utils/functions/navigate";
import { routes } from "../../../utils/routes/routes";
import "./Header.css";

export const Header = () => {
  const header = document.querySelector("header");

  if (!header) return;

  header.innerHTML = "";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");


    for (const route of routes) {
      if (route.path === "/login") {
        const isLoggedIn = !!localStorage.getItem("token");
        if (!isLoggedIn) {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.addEventListener("click", (e) => navigate(e, route));
          a.textContent = route.text;
          a.href = route.path;
          li.appendChild(a);
          ul.appendChild(li);
        }
      } else if (route.path !== "/login") {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.addEventListener("click", (e) => navigate(e, route));
        a.textContent = route.text;
        a.href = route.path;
        li.appendChild(a);
        ul.appendChild(li);
      }
    }

    const isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      const logoutLi = document.createElement("li");
      const logoutButton = document.createElement("a");
      logoutButton.href = "/doLogout"
      logoutButton.textContent = "Logout";
      logoutButton.addEventListener("click", (e) => {
        e.preventDefault()
        doLogout()
      })
      logoutLi.appendChild(logoutButton)
      ul.appendChild(logoutLi)
    }
  


  header.appendChild(nav)
  nav.appendChild(ul)

}

Header()