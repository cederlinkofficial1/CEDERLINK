import React from "react";
import ReactDom from "react-dom/client";
import Body from "./components/jsf/Body";

const AppLayout = () => {
    return(
        <div className="app">
            <Body />
        </div>
    );
};

const root1 = ReactDom.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);