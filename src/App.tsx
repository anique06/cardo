import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./Home";
import AnatomyHeartStructure from "./Anatomy/AnatomyHeartStructure";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Anatomy/AnatomyHeartStructure"
          element={<AnatomyHeartStructure />}
        />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
