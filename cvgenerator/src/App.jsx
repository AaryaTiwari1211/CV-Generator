import MainForm from './components/MainForm';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CV from './components/CV/CV';
import SOPForm from './components/SOP/SOPForm';
import logo from './assets/logo.png';
import SOP from './components/SOP/SOP';
function App() {
  const [result, setResult] = useState({});
  const [sop, setSop] = useState({});
  const [sopQuestions, setSopQuestions] = useState({});
  return (
    <BrowserRouter>
      <div className='bg-[#333]'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainForm setResult={setResult} />} />
          <Route path="/cv" element={<CV result={result} />} />
          <Route path='/sopform' element={<SOPForm setSopQuestions={setSopQuestions}/>} />
          <Route path='/sop' element={<SOP sopQuestions={sopQuestions}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;