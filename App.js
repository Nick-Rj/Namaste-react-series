import React from "react";
import ReactDOM from "react-dom/client";

// Creating an element is done with the help of React Core.
// The curly braces holds the attributes to the tag.
const heading = React.createElement(
  "h1",
  { id: "heading", className: "headerSection", abc: "xyz" },
  "Hello World from React!"
);
console.log(heading);

/**
 *
 * <div id ="parent">
 *      <div id = "child1">
 *          <h1>Heading 1</h1>
 *          <h2>Heading 2</h2>
 *      </div>
 *      <div id= "child2">
 *          <h1>Heading 1</h1>
 *          <h2>Heading 2</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// For adding a single child element.
// const child = React.createElement("div", { id: "child" }, heading);

//For adding multiple child elements
const child1 = React.createElement("div", { id: "child1" }, [
  heading,
  React.createElement("h2", { id: "subHeading" }, "This is the h2 tag!"),
]);
const child2 = React.createElement("div", { id: "child2" }, [
  heading,
  React.createElement("h2", { id: "subHeading" }, "This is the h2 tag!"),
]);
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
console.log(parent);
// Creating a root and rendering elements inside it on a browser is done with the help of React DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(() => {
  root.render(parent);
}, 4000);
