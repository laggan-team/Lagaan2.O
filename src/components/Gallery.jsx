import React from "react";

const Gallery = () => {
  // Yahan aap apni images ke links daal sakte hain
  const winningMoments = [
    {
      id: 1,
      src: "sonaharcup.jpeg",
      title: "Runner Up Trophy",
      victory: "BHADRASHILA",
    },
    {
      id: 2,
      src: "doriyao cup.jpeg",
      title: "Runner Up Trophy",
      victory: "DORIAWAN",
    },
    {
      id: 3,
      src: "2023CUP.jpeg",
      title: "Runner Up Trophy",
      victory: "GHORGHAT",
    },
  ];

  const memories = [
    {
      id: 4,
      src: "doriyao.jpeg",
      title: "Award Night",
    },
    {
      id: 5,
      src: "Ashishtr.jpeg",
      title: "Ashish",
    },
    {
      id: 6,
      src: "Groupphoto.jpeg",
      title: "Group Photo",
    },
    {
      id: 7,
      src: "Rajatr.jpeg",
      title: "Raja",
    },
    {
      id: 8,
      src: "2023team.jpeg",
      title: "Anup ",
    },
    {
      id: 9,
      src: "Prince.jpeg",
      title: "Prince",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] pt-28 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-green-500">Memories</span>
          </h1>
          <div className="h-1.5 w-24 bg-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A glimpse into our journey, from winning trophies to creating
            lifelong bonds on and off the field.
          </p>
        </div>

        {/* --- SECTION 1: WINNING MOMENTS --- */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
              🏆 Team Trophy
            </h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winningMoments.map((img) => (
              <div
                key={img.id}
                className="group relative overflow-hidden rounded-3xl bg-black border border-white/10 shadow-2xl h-80"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-fill transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-green-500 font-bold text-sm uppercase mb-1">
                    {img.victory}
                  </p>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: MANY MEMORIES (Grid Layout) --- */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
              📸 Many Memories
            </h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {memories.map((img) => (
              <div
                key={img.id}
                className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-lg border border-white/5"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover rounded-2xl transition duration-500 group-hover:brightness-75 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full border border-white/20 uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
