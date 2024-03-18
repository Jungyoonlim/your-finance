import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalFinanceDashboard from './components/PersonalFinanceDashboard';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<PersonalFinanceDashboard/>} />
  </Routes>
);

export default App;