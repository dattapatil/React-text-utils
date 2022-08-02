// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";


function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert = (type, message)=>{
  setAlert({
    type:type,
    message:message
  })
  setTimeout(()=>{
    setAlert(null);
  },1500); 
}

const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = "gray"
    showAlert("success","You are enable dark mode");
  }else{
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("success","You are enable light mode");
  }
}
  return (
    <>   
    
      <Navbar title="Company Logo" aboutMenu="LSAC menu" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar  />    default props here work */}
      <div className="container">
      <Alert alert={alert} />
      </div>
      <div className="container">   
        <Routes>
        <Route path="/" element={<TextForm heading="Try TextUtils Word, Character Counter, Rmove extra space" /> } />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
     
    </>
  );
}

export default App;
