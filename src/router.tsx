import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import CasPratiqueWizdle from "./pages/CasPratiqueWizdle";
import CasPratiqueOdyssee from "./pages/CasPratiqueOdyssee";


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about-me", element: <AboutMe /> },
            { path: "/cv", element: <CV /> },
            { path: "/contact", element: <Contact /> },
            { path: "/skills", element: <Skills />},
            { path: "/projects", element: <Projects />},
            { path: "/projects/wizdle", element: <CasPratiqueWizdle />},
            { path: "/projects/portfolio", element: <CasPratiqueOdyssee />}
        ],
    },
]);