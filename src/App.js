import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/layout/Home";
import Destination from "./components/layout/Destination";
import Planet from "./components/Planet";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="destination" element={<Destination />}>
          {/* <Route path="destination/:id" element={<Destination />} /> */}
          <Route path=":id/:planet" element={<Planet />} />
        </Route>
        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
