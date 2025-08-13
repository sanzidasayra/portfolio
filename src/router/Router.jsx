import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/pages/Home";
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
            }
        ]
    }
])