import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Home";
import HeroSection from "./components/HeroSection";



export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/section", element: <HeroSection /> },
        ],
    },
]);