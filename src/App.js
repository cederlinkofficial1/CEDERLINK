import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
//import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Articles from "./Articles";
import Blogs from "./Blogs";
import Contact from "./Contact";
import About from "./About";

const AppLayout = () => {
  return(
    <div className="App">
      <Body />
      <div className="route-content">
        <Outlet />
      </div>
    </div> 
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/articles",
        element : <Articles />,
      },
      {
        path : "/blogs",
        element : <Blogs />,
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/about",
        element : <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);