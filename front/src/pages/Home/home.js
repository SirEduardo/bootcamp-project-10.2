
import { createPage } from "../../../utils/functions/createPage"
import "./home.css"


const Home = () => {
    const div = createPage("home")
    div.innerHTML = `<img src="https://imagenesnetytec.blob.core.windows.net/simg/imgf/2014/06/img_41210.jpg">
    <div class="text">
    <h1>Gestión de eventos deportivos Salamanca</h1>
    <section>
    <p>Eventos deportivos grupales para diferentes niveles:</p>
    </section>
    </div>
    `

}

export default Home