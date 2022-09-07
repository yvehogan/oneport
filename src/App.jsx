import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/wrapper/PageWrapper';
import Shipment from './components/pages/Shipment';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" exact element={<PageWrapper><Shipment /></PageWrapper>} />
        {/* <Route path="/resources" exact element={<ComingSoon />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
