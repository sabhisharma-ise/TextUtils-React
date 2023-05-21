import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1B2430';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);   // For showing various alerts

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text for analysis" mode={mode} />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
