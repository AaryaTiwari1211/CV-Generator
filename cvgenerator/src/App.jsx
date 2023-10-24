import MainForm from './components/MainForm';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CV from './components/CV/CV';
function App() {
  const [result, setResult] = useState({});
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainForm setResult={setResult} />} />
          <Route path="/cv" element={<CV result={result} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;