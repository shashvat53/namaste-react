import React from "react";
import ReactDOM from "react-dom/client";

//  ReactElement = Object = HTML Element(render)

const heading = React.createElement(
  "div",
  { id: "heading" },
  "Namste React 🚀"
);
const JxHeading = () => {
  return <h1 className="h1">Jai Shree Ram 💖</h1>;
};

const Fun = () => {
  return (
    <>
      <JxHeading />
      <h1>Hello, World!</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fun />);
