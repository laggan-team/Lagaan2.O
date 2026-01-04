import React from "react";
import { Link } from "react-router-dom";

const body = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-14 pt-[82px]">
        {/* TEXT SECTION */}
        <div className="text-center lg:text-left">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white drop-shadow-xl sm:pt-23">
            LAGAAN
          </h1>

          <div className="flex justify-center lg:justify-start gap-4 mt-2">
            <span className="text-red-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide drop-shadow-md">
              CRICKET
            </span>
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide drop-shadow-md">
              TEAM
            </span>
          </div>

          <p className="mt-6 max-w-xl text-gray-300 text-lg leading-relaxed">
            Where passion meets performance. Representing strength, unity, and
            the spirit of cricket.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition transform hover:scale-105"
          >
            About Us
          </Link>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end">
          {/* GLOW EFFECT */}
          <div className="absolute w-[70%] h-[70%] bg-yellow-500/30 blur-3xl rounded-full"></div>

          <img
            src="/Cup.png"
            alt="Laggan Trophy"
            className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default body;
