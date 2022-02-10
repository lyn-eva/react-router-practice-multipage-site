import { lazy, Fragment, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";

const Home = lazy(() => import("./components/layout/Home"));
const Destination = lazy(() => import("./components/layout/Destination"));
const Planet = lazy(() => import("./components/Planet"));
const Crew = lazy(() => import("./components/layout/Crew"));
const Biography = lazy(() => import("./components/Biography"));
const Technology = lazy(() => import("./components/layout/Technology"));
const Procedure = lazy(() => import("./components/Procedure"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p className='fixed left-1/2 top-1/2 -translate-x-1/2 text-2xl'>Loading ...</p>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
