import { fetchWrapper } from "../api/api"


export const getAttendees = () => {
    return fetchWrapper({ endpoint: "/attendees" })
}

export const getAttendeeById = (id) => {
    return fetchWrapper({ endpoint: `/attendees/${id}` })
}

export const confirmAttendance = (eventId, token) => {
    return fetchWrapper({
        endpoint: `/attendees/${eventId}`, 
        method: "POST",
        token: token
    })
}

export const removeAttendance = (eventId, token) => {
    return fetchWrapper({
        endpoint: `/attendees/${eventId}`,
        method: "DELETE",
        token: token
    })
}