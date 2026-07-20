import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import HeartCanvas from "./HeartCanvas";
import AnatomyGrid from "./Anatomy/AnatomyGrid";
import PhysiologyGrid from "./Physiology/PhysiologyGrid";
import GameGrid from "./Game/GameGrid";
import CaseGrid from "./Case/CaseGrid";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/next";

function App(): React.JSX.Element {
  return (
    <div className="relative min-h-screen overflow-visible bg-[#FDF8F5] font-sans">
      {/* Background Shape */}

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative  max-w-7xl mx-auto px-6 lg:px-10 pt-18">
        {/* HERO */}
        <main className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[82vh] gap-10">
          {/* LEFT */}
          <div className="flex justify-center lg:justify-start lg:-mt-10">
            <Header />
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center  md:-mt-10 h-[300px] md:h-[600px]  overflow=visible ">
            <HeartCanvas />

            {/* Shadow under heart */}
            <div
              className="
                absolute
                bottom-10
                w-75
                h-20
                rounded-full
                bg-red-900/25
                blur-2xl
                pointer-events-none
              "
            />
          </div>
        </main>

        {/* Anatomy Section */}
        <section>
          <div className="items-center py-10">
            <AnatomyGrid />
          </div>
        </section>

        {/* Physiology Section */}
        <section>
          <div className="items-center py-10">
            <PhysiologyGrid />
          </div>
        </section>

        {/* Game Section */}
        <section>
          <div className="items-center py-10">
            <GameGrid />
          </div>
        </section>

        {/* Case Section */}
        <section>
          <div className="items-center py-10">
            <CaseGrid />
          </div>
        </section>
      </div>
      <section>
        {/* footer Section */}
        <div className="items-center ">
          <Footer />
        </div>
      </section>
      <Analytics />
    </div>
  );
}

export default App;
