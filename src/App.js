import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

function App() {
 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>This is Hello World.</p>
    <a
     className="App-link"
     href="https://reactjs.org"
     target="_blank"
     rel="noopener noreferrer"
    >
     Learn React
    </a>
   </header>
  </div>
 );
}

// export default App;
export default withAuthenticator(App);
