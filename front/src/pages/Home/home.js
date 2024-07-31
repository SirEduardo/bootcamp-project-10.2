
import { createPage } from "../../../utils/functions/createPage"
import "./home.css"


const Home = () => {
    const div = createPage("home")
    div.innerHTML = `<h1>Home</h1>`
}

export default Home