import "./eventList.css"
import { deleteEvent, getEvents } from "../../../utils/functions/events"
import { createPage } from "../../../utils/functions/createPage"
import EventDetail from "./eventDetail"

const EventList = async () => {
    const div = createPage("events")
    const eventList = document.createElement("div")
    eventList.className = "event-list"
    eventList.innerHTML = ""

try {
    const response = await getEvents()
    const events = await response.json()


   if (Array.isArray(events) && events.length > 0) {
    for (const event of events) {
        const eventDate = new Date(event.date)
        const formattedEventDate = eventDate.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        
        const formattedEventTime = eventDate.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        })
        const eventItem = document.createElement("div")
        eventItem.className = "event-item"
        eventItem.innerHTML = `
        <img src=${event.img} alt=${event.title}/>
        <h3>${event.title}</h3>
        <p>Dia: ${formattedEventDate}</p>
        <p>Hora: ${formattedEventTime}</p>
        <p>Lugar: ${event.location}</p>
        <div class="btn-div">
        <button data-id="${event._id}" class="detail-btn">View details</button>
        <button data-id="${event._id}" class="delete-btn">Delete</button>
        </div>
        `
        eventItem.querySelector(".detail-btn").addEventListener("click", () => {
           eventList.innerHTML = ""
           EventDetail(event._id)
        })

        eventItem.querySelector(".delete-btn").addEventListener("click", async () => {
            const token = localStorage.getItem("token")
            if (!token) {
                alert("Necesitas estar logeado para eliminar el evento")
                return
            }
            try {
                const res = await deleteEvent(event._id)
                const response = await res.json()
                if (response.error) {
                    alert("Error al eliminar el evento")
                }else {
                    const confirmation = confirm("Seguro que quieres eliminar este evento?")
                    if (confirmation){
                        alert("Evento eliminado")
                        eventItem.remove()
                        EventList()
                    }

                }
            } catch (error) {
                console.log(error);
            }
        })
        eventList.appendChild(eventItem)
    }
   } else {
    eventList.innerHTML = "<p>No se encontraron eventos.</p>"
   }
} catch (error) {
    eventList.innerHTML = "<p>Hubo un error cargando eventos.</p>"
    console.log(error);
}
    div.appendChild(eventList)

    return div
}

export default EventList