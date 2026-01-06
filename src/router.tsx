import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Home";
import AboutMe from "./pages/AboutMe";



export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about-me", element: <AboutMe /> },
        ],
    },
]);