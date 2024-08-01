import { createPage } from "../../../utils/functions/createPage"
import { confirmAttendance, getEventsById } from "../../../utils/functions/events"
import "./eventDetail.css"

const EventDetail = async (id) => {
    const div = createPage("events")
    const eventDetail = document.createElement("div")
    eventDetail.className = "event-detail"
try {
    
    const res = await getEventsById(id)
    const event = await res.json()

    const eventItem = document.createElement("div")
     eventItem.className = "event-item"
    eventItem.innerHTML = `
    <h1>${event.title}</h1>
    <p>${event.date}</p>
    <p>${event.location}</p>
    <p>${event.description}</p>
    <button id="confirm-attendance">Confirm Attendance</button>
    `
    eventDetail.appendChild(eventItem)

    const confirmButton = eventDetail.querySelector("#confirm-attendance")
    confirmButton.addEventListener("click", async () => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        if(!token) {
            alert("Necesitas estar logeado")
            return
        }
        try {
            const res = await confirmAttendance(user, token)
            console.log(res);
            if (res.error) {
                alert(`Error al confirmar: ${res.error}`)
            } else {
                console.log("Confirmada la asistencia")
                localStorage.setItem("attendees", )
            }
        } catch (error) {
            console.log(error);
        }
    })
} catch (error) {
    console.log(error);
}
    
    div.appendChild(eventDetail)
    return div
}

export default EventDetail