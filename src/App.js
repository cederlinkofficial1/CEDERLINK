import React from "react";
import ReactDom from "react-dom/client";
import Body from "./components/jsf/Body";
import Home from "./components/jsf/Home";
import About from "./components/jsf/About";
import Newsroom from "./components/jsf/Newsroom";
import Projects from "./components/jsf/Projects";
import Contact from "./components/jsf/Contact";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return(
        <div className="app">
            <Body />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Home/>,
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/newsroom",
                element : <Newsroom />,
            },
            {
                path : "/projects",
                element : <Projects />,
            },
            {
                path : "/contact",
                element : <Contact />,
            },
        ],
        errorElement : <Error />,
    },
]);

const root1 = ReactDom.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router = {appRouter} />);