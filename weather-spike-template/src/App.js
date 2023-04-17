import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import Main from "./components/MainComponent";
import UserPanel from "./components/UserSelect/UserPanel"
import Home from "./components/HomePage"
import UserPage from "./components/UserPage";
import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(sessionStorage.getItem("currentUser"));


  return (
    <div>
      {/************************ TODO ************************
            Routing for pages here
      */}

    </div>
  );
}

export default App;
