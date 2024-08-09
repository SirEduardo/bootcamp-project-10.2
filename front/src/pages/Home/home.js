
import { createPage } from "../../../utils/functions/createPage"
import { sports } from "../../components/sports/sports"
import "./home.css"

const allSports = sports

const Home = () => {
    const div = createPage("home")
    div.innerHTML = `<img src="https://imagenesnetytec.blob.core.windows.net/simg/imgf/2014/06/img_41210.jpg">
    <div class="text">
    <h1>Gestión de eventos deportivos Salamanca</h1>
    <section>
        <p>Eventos deportivos grupales para diferentes niveles:</p>
        <ul id="sports-list"></ul>
    </section>
    </div>
    `
    const sportsList = div.querySelector("#sports-list")

    allSports.forEach(sport => {
        const li = document.createElement("li")
        li.textContent = sport
        sportsList.appendChild(li)
    })

}

export default Home