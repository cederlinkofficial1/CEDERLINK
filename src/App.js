import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Body from "./components/jsf/Body";
import Home from "./components/jsf/Home";
import About from "./components/jsf/About";
import NewsroomPage from "./components/jsf/NewsroomPage";
import Projects from "./components/jsf/Projects";
import Contact from "./components/jsf/Contact";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    // Move theme state up to AppLayout
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
    // Create toggle function here
    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => {
            const newTheme = !prevTheme;
            if (newTheme) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
            return newTheme;
        });
    };

    return(
        <div className="app">
            <Body isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <Outlet context={[isDarkTheme, toggleTheme]} />
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
                element : <Home />,  // Remove props here
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/newsroom",
                element : <NewsroomPage />,
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