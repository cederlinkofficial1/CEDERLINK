import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Header";
import Body from "./Body";


const AppLayout = () => {
  return(
    <div className="App">
      <Body />
      </div> 
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path : "/",
//     element : <AppLayout />,
//     children : [
//       {
//         path : "/",
//         element : <Body />,
//       }
//     ]
//   }
// ]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);