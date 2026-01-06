import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Home";


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
        ],
    },
]);