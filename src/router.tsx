import { createBrowserRouter } from "react-router";
import App from "./App";
import HeroSection from "./components/HeroSection";
import Home from "./Home";



export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/section", element: <HeroSection /> },
        ],
    },
]);