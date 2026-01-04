
import Card from "./Card";

const Players = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* --- BACKGROUND GLOW (Body ki tarah) --- */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full"></div>

      {/* Main Container: 
          - Mobile (default): px-4 (choti screen par cards chipkenge nahi)
          - Desktop (lg): px-12 (wide screen ke liye)
          - pt-28: Navbar ke niche se shuru hone ke liye
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-28 pb-20">
        {/* Page Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter uppercase">
            Our <span className="text-green-500">Squad</span>
          </h1>
          <div className="h-1 w-20 bg-green-500 mt-2 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        {/* Card Component */}
        <div className="w-full">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Players;
