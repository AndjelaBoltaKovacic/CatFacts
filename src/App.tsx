import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Bla from './bla';
import Truc from './truc';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bla" element={<Bla />} />
        <Route path="/truc" element={<Truc />} />
        <Route path="*" element={<Bla />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
