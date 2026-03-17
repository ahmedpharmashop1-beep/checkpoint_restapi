import React from 'react';
import './App.css';
import Home from "./Pages/Home/Home";
import ContactList from "./components/ContactList/ContactList";
import Edit from "./components/Edit/Edit";
import Add from "./components/Add/Add";
import Error from "./Pages/Error/Error";
import { Routes, Route } from "react-router-dom";
import Navbarss from './components/NavBar/NavBarss';


function App() {
  console.log("App component is rendering");
  return (
    <div className="App">
      <Navbarss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactlist" element={<ContactList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
