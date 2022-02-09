import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/layout/Home";
import Destination from "./components/layout/Destination";
import Planet from "./components/Planet";
import Crew from "./components/layout/Crew";
import Biography from "./components/Biography";
import Technology from "./components/layout/Technology";
import Procedure from "./components/Procedure";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="destination" element={<Destination />}>
          <Route path=":id/:planet" element={<Planet />} />
        </Route>
        <Route path="crew" element={<Crew />}>
          <Route path=":id" element={<Biography />} />
        </Route>
        <Route path="technology" element={<Technology />}>
          <Route path=":id" element={<Procedure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
