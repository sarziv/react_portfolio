import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from './router/Router';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Main/>
    </BrowserRouter>
  );
}
export default App;
