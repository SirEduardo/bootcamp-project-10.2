import "./eventList.css"
import { getEvents } from "../../../utils/functions/events"
import { createPage } from "../../../utils/functions/createPage"
import EventDetail from "./eventDetail"

const EventList = async () => {
    const div = createPage("events")
    const eventList = document.createElement("div")
    eventList.className = "event-list"

try {
    const res = await getEvents()
    const events = await res.json()
   if (Array.isArray(events) && events.length > 0) {
    for (const event of events) {
        const eventItem = document.createElement("div")
        eventItem.className = "event-item"
        eventItem.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <p>${event.location}</p>
        <button data-id="${event._id}">View details</button>
        `
        eventItem.querySelector("button").addEventListener("click", () => {
           eventList.innerHTML = ""
           EventDetail(event._id)
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