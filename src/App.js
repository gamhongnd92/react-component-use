import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello there</h1>
//     </div>
//   );
// }

// function App() {
//   return React.createElement(
//     "div" /* type */,
//     {} /* [props] */,
//     React.createElement("h1", {}, "Hello there") /* [children] */
//   );
// }

function App() {
  return (
    <div>
      <Header firstName="Bob" />
      <Header firstName="Gam" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
      <h1>Hello there</h1>
    </div>
  );
}

export default App;
