import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;