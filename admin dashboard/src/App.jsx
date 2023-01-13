import React from "react";
import Introbar from "./components/introbar/Introbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";
import './app.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
  <Router>
    <Introbar />
    <div className="container">
      <Sidebar />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/users" element={<Contacts/>}/>
      </Routes>
    </div>
  </Router>
  );
};

export default App;