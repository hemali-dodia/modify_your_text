import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [textMode,setTextMode] = useState('dark');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setTextMode('light');
      document.body.style.backgroundColor = '#718190';
    }
    else{
      setMode('light');
      setTextMode('dark');
      document.body.style.backgroundColor = '#f0f0f6';
    }
  }
  
  return (
    <>    
    <BrowserRouter>
      <NavBar title='My-App' aboutText='About us' mode={mode} textMode={textMode} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path="/" element={<TextForm />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>      
    </BrowserRouter>
    </>
  );
}

export default App;
