import {
  getAttendeeById,
  confirmAttendance,
  removeAttendance,
} from "../../../utils/functions/attendees";
import { createPage } from "../../../utils/functions/createPage";
import { getEventsById } from "../../../utils/functions/events";
import { createLoading } from "../../components/loading/loading";
import "./eventDetail.css";

const EventDetail = async (id) => {
  const div = createPage("events");
  const eventDetail = document.createElement("div");
  eventDetail.className = "event-detail";

  const loadingElement = createLoading()
  
  try {
    div.appendChild(loadingElement)
    const res = await getEventsById(id);
    const event = await res.json();
    div.removeChild(loadingElement)
    const token = localStorage.getItem("token");

    const eventDate = new Date(event.date);
    const formattedEventDate = eventDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedEventTime = eventDate.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const eventItem = document.createElement("div");
    eventItem.className = "event-item";
    eventItem.innerHTML = `
    <img src=${event.img} alt=${event.title}/>
    <h1>${event.title}</h1>
    <p>Dia: ${formattedEventDate}</p>
    <p>Hora: ${formattedEventTime} H</p>
    <p>Lugar: ${event.location}</p>
    <p> Info: ${event.description}</p>
    <button id="confirm-attendance">Confirm Attendance</button>
    `;
    eventDetail.appendChild(eventItem);

    const checkAttendance = async () => {
      try {
        div.appendChild(loadingElement)
        const attendeeRes = await getAttendeeById(id);
        const attendeeData = await attendeeRes.json();
        div.removeChild(loadingElement)

        if (attendeeData.events && attendeeData.events.includes(id)) {
          const confirmButton = eventDetail.querySelector(
            "#confirm-attendance"
          );
          confirmButton.textContent = "Eliminar Asistencia";
          confirmButton.addEventListener("click", async () => {
            try {
              div.appendChild(loadingElement)
              const res = await removeAttendance(id, token);
              div.removeChild(loadingElement)
              if (res.error) {
                alert(`Error al eliminar asistencia: ${res.message}`);
              } else {
                alert("Asistencia eliminada.");
              }
            } catch (error) {
              div.removeChild(loadingElement)
              console.log(error);
              alert("Hubo un errror al eliminar la asistencia");
            }
          });
        } else {
          const confirmButton = eventDetail.querySelector(
            "#confirm-attendance"
          );
          confirmButton.addEventListener("click", async () => {
            try {
              div.appendChild(loadingElement)
              const res = await confirmAttendance(event._id, token);
              const response = await res.json();
              div.removeChild(loadingElement)
              if (token && response.message === "Asistencia ya confirmada") {
                alert("Ya has confirmado tu asistencia a este evento.");
              } else if (response.error) {
                alert(`Error al confirmar: ${response.message}`);
              } else if (!token) {
                alert("Necesitas estar logeado");
              } else {
                alert("Asistencia confirmada.");
              }
            } catch (error) {
              div.removeChild(loadingElement)
              console.log("Error del servidor al confirmar asistencia", error);
            }
          });
        }
      } catch (error) {
        div.removeChild(loadingElement)
        console.error("Error al verificar asistencia:", error);
        alert("Hubo un error al verificar la asistencia.");
      }
    };

    checkAttendance();
  } catch (error) {
    div.removeChild(loadingElement)
    console.log(error);
    eventDetail.innerHTML = "<p>Error al cargar los detalles del evento.</p>";
  }

  div.appendChild(eventDetail);
  return div;
};

export default EventDetail;
