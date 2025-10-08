import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // Fixed capitalization
import Header from "./components/jsf/Header";
import Home from "./components/jsf/Home";
import About from "./components/jsf/About";
import NewsroomPage from "./components/jsf/NewsroomPage";
import Projects from "./components/jsf/Projects";
import Contact from "./components/jsf/Contact";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./components/jsf/Body.css"; // Import your styles if needed

const AppLayout = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
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
        <div className={`app ${isDarkTheme ? 'dark-theme' : ''}`}>
            {/* Header with navigation */}
            <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            
            {/* Main content area */}
            <main className="main-content">
                <Outlet context={[isDarkTheme, toggleTheme]} />
            </main>
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
                element : <Home />,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);