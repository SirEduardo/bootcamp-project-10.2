import { Home } from "../home/home"

const template = () => `
    <section id="login">
    <form>
    <input type="text" placeholder="Username" id="username">
    <input type="email" placeholder="email@gmail.com" id="email">
    <input type="password" placeholder="Password" id="password">
    <button id="loginbtn">Login</button>
    </form>
    </section>`
    

const loginSubmit = async () => {

    const userName = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const data = await fetch("http://localhost:5000/api/v1/users/login", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST", 
        body: JSON.stringify({
            userName: userName,
            email: email,
            password: password,
        })

    })
    
    const dataRes = await data.json()

    if (data.status === 400){
        const error = document.createElement("p")
        error.textContent = "Usuario o contraseña incorrectos"
        document.querySelector("form").appendChild(error)
    }else{
        localStorage.setItem("users", JSON.stringify(dataRes))
        Home()
    }
}


const Login = () => {
    document.querySelector("main").innerHTML = template()
    document.querySelector("#loginbtn").addEventListener("click", (e) => {
        e.preventDefault()
        loginSubmit()
    })
}

export default Login