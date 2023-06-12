import React, {useState} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Alert from "./components/Alert";
function App() {
  const [mode,setMode] = useState('light');
  const setAppMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2a2a2c';
      setAppAlert("Dark mode has been enabled!🌚")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAppAlert("Light mode has been enabled!🌝")
    }
  }
  const setAppAlert=(msg)=>{
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  }
  const [message, setMessage] = useState(null);
  return (
    // JSX fragments
    <>
      <BrowserRouter>
      <Navbar title="Text-Utils App" aboutUs="About-TextUtils" mode={mode} setAppMode={setAppMode}/>
      <div className="container my-3">
      {message!==null && <Alert message={message}/>}
      {message==null && <div style={{width:"100%", height:"4rem"}}></div>}
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<Textform heading="Enter the text below." mode={mode} message={message} setAppAlert={setAppAlert}/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
