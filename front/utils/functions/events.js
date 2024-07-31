import { fetchWrapper } from "../api/api"


export const getEvents = () => {
    return fetchWrapper({ endpoint: "/events" })
}

export const getEventsById = (id) => {
    return fetchWrapper({ endpoint: `/events/${id}` })
}

export const createEvent = (event, token) => {
    return fetchWrapper({
        endpoint: "/events", 
        method: "POST", 
        body: event, 
        token: token,
        isJson: true
    })
}

export const confirmAttendance = (eventId, token) => {
    return fetchWrapper({
        endpoint: `/users/attendees/${eventId}`, 
        method: "POST",
        token: token
    })
}