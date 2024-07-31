import EventList from "../../src/pages/AllEvents/eventList";
import CreateEvent from "../../src/pages/CreateEvent/createEvent";
import Home from "../../src/pages/Home/home";
import Login from "../../src/pages/Login/login";

export const routes = [
    {
        path: "/",
        text: "Home",
        page: Home
    },
    {
        path: "/events",
        text: "Events",
        page: EventList
    },
    {
        path: "/create-event",
        text: "Create your Event",
        page: CreateEvent
    },
    {
        path: "/login",
        text: "Login",
        page: Login
    }
]