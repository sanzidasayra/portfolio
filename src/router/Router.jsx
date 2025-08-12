import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Skills from "../components/pages/Skills";
import Contact from "../components/pages/ContactForm";
import Intro from "../components/Intro";
import ProjectDetails from "../components/pages/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: '/intro',
        element: <Intro />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])