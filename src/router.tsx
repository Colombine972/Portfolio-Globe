import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Home";
import AboutMe from "./pages/AboutMe";
import CV from "./pages/CV";



export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about-me", element: <AboutMe /> },
            { path: "/cv", element: <CV /> },
        ],
    },
]);