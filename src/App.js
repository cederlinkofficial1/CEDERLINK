import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Articles from "./Articles";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import Contact from "./Contact";
import About from "./About";
import BlogLayout from "./BlogLayout";

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
    path: "/blogs",
    element: <BlogLayout />,
    children: [
      {
        path: "",
        element: <Blogs />
      },
      {
        path: ":blogId",
        element: <BlogDetail />
      }
    ]
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);