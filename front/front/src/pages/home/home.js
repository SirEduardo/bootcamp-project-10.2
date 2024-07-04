import "./home.css"
const tarifas = [
    {
        texto: "MENSUAL",
        precio: "40 €",
    },
    {
        texto: "TRIMESTRAL",
        precio: "110 €",
    },
    {
        texto: "ANUAL",
        precio: "420 €",
    }
]


export const Home = () => {
    const main = document.querySelector("main")

    main.innerHTML = `
    <section id="home">
    <h2>TARIFAS</h2>
    <div id="divsContainer">
    </section>`

    for (const tarifa of tarifas){
        const tarifaDiv = document.createElement("div")
        const tarifaP = document.createElement("h3")
        const price = document.createElement("p")
        tarifaP.textContent = tarifa.texto
        price.textContent = tarifa.precio

        tarifaDiv.appendChild(tarifaP)
        tarifaDiv.appendChild(price)
        document.querySelector("#divsContainer").appendChild(tarifaDiv)
    }
    
}