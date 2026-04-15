import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<Home />} />
        
        {/* Editör Sayfası (public klasöründeki editor.html'i açar) */}
        <Route path="/editor" element={
          <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <iframe 
              src="/editor.html" 
              title="Market Etiket Editörü"
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;