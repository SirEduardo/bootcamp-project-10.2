import { createEvent } from "../../../utils/functions/events";
import { createPage } from "../../../utils/functions/createPage";
import "./createEvent.css";
import EventList from "../AllEvents/eventList";

const CreateEvent = () => {
  const div = createPage("create-events")
  div.id = "createEvent-container"
  const createEventForm = document.createElement("form");

  const titleInpunt = document.createElement("input");
  titleInpunt.type = "text";
  titleInpunt.placeholder = "Title";

  const dateInput = document.createElement("input");
  dateInput.type = "date";

  const locationInput = document.createElement("input");
  locationInput.type = "text";
  locationInput.placeholder = "Location";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create Event";
  submitButton.id = "submit-btn"

  createEventForm.id = "create-event"
  createEventForm.appendChild(titleInpunt);
  createEventForm.appendChild(dateInput);
  createEventForm.appendChild(locationInput);
  createEventForm.appendChild(descriptionInput);
  createEventForm.appendChild(submitButton)
  

  createEventForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const response = await createEvent(
      {
        title: titleInpunt.value,
        date: dateInput.value,
        location: locationInput.value,
        description: descriptionInput.value,
      },
      token
    );
    if (response.ok) {
      EventList()
    } else {
      console.log(response);
    }
  });
  div.appendChild(createEventForm)
 

};


export default CreateEvent