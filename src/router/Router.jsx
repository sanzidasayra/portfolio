import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Skills from "../components/pages/Skills";
import Contact from "../components/pages/Contact";
import Intro from "../components/Intro";

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