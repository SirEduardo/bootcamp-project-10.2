import { fetchWrapper } from "../api/api"


export const getAttendees = () => {
    return fetchWrapper("/attendees")
}

export const getAttendeeById = (id) => {
    return fetchWrapper(`/attendees/${id}`)
}