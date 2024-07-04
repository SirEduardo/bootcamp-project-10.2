import { Header } from './src/header/header'
import { Home } from './src/pages/home/home'
import './style.css'


const Main = () => {
  const app = document.querySelector("#app")
  
  app.innerHTML= `
  <header></header>
  <main></main>`
}

Main()
Header()
Home()