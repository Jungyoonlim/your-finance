import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PersonalFinanceDashboard from './components/PersonalFinanceDashboard';     <Route path="/" element={<PersonalFinanceDashboard/>} />

const HelloWorld = () => <h1>Hello, World!</h1>;

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<HelloWorld />} />
  </Routes>
);

export default App;