import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    }
])