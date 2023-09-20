import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Detail from './Pages/Detail';
import Detailss from './Pages/Detailss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detailss" element={<Detailss />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
