import "./App.css";
import Alert from "./components/alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.color = 'white';
      document.body.style.backgroundColor= '#22262b';

  } 
  else {
    setMode('light')
    document.body.style.color = 'black';
    document.body.style.backgroundColor = '#f1f2f4';
  }
}

   return (
    <>
      <Navbar title= "TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert></Alert>
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here..." mode={mode}/>
      </div>
    </>
  );
}

export default App;
