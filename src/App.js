import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/layout/Home";
import Destination from "./components/layout/Destination";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
