import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./Home";
import AnatomyHeartStructure from "./Anatomy/AnatomyHeartStructure";
import AnatomyHeartLocation from "./Anatomy/AnatomyHeartLocation";
import ECG from "./Physiology/ECG/ECG";
import MI from "./Case/MI";

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

        <Route path="/Case/MI" element={<MI />} />

        <Route path="/Physiology/ECG/ECG" element={<ECG />} />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
