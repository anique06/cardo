import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./Home";
import AnatomyHeartStructure from "./Anatomy/AnatomyHeartStructure";
import AnatomyHeartLocation from "./Anatomy/AnatomyHeartLocation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Anatomy/AnatomyHeartStructure"
          element={<AnatomyHeartStructure />}
        />
        <Route
          path="/Anatomy/AnatomyHeartLocation"
          element={<AnatomyHeartLocation />}
        />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
