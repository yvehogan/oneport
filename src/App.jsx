import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import PageWrapper from './components/wrapper/PageWrapper';
import Shipment from './components/pages/Shipment';
import Customers from './components/pages/Customers';
import ShipmentDetails from './components/pages/ShipmentDetails';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageWrapper><Customers /></PageWrapper>} />
          <Route path="/shipment" exact element={<PageWrapper><Shipment /></PageWrapper>} />
          <Route path="/shipment-details" exact element={<PageWrapper><ShipmentDetails /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
