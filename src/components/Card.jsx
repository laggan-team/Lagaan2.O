import React from "react";
import {
  Shield,
  Sword,
  Zap,
  Facebook,
  Instagram,
  MessageCircle, // WhatsApp ke liye correct icon
  Crown,
  Star,
  Target,
} from "lucide-react";

/* ================= PLAYERS DATA ================= */
const players = [
  {
    id: 1,
    name: "ASHISH",
    lastName: "KUMAR TIWARY",
    role: "BOWLER",
    style: "RIGHT ARM MEDIUM",
    jerseyimg: "jersy7.jpeg",
    jerseyBg: "bg-yellow-500",
    tag: "C",
    image: "teamjersey.png",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100085657555471",
      instagram: "https://www.instagram.com/a.__k__t?igsh=eTZqZ2J1MnV0OWc2",
      whatsapp: "916204507394", // Sirf number likhein
    },
  },
  {
    id: 2,
    name: "AMAN",
    lastName: "TIWARI",
    role: "BATSMAN",
    style: "RIGHT HAND BATSMAN",
    jerseyimg: "jersy27.jpeg",
    jerseyBg: "bg-red-500",
    tag: "VC",
    image: "Aman.jpeg",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100038367846305",
      instagram:
        "https://www.instagram.com/pandit_aman.27?igsh=ZGd2cmtwM3E1cHdt",
      whatsapp: "916200067331",
    },
  },
  {
    id: 3,
    name: "RAJA",
    lastName: "CHAUDHARY",
    role: "BATSMAN",
    style: "RIGHT HAND BATSMAN",
    jerseyimg: "jersy32.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "rajas.jpeg",
    social: {
      facebook: "https://www.facebook.com/raja.ranjeet.5201",
      instagram:
        "https://www.instagram.com/raja_5201_?igsh=MWpqa3VqdzU3bzA1Mw==",
      whatsapp: "916204398138",
    },
  },
  {
    id: 4,
    name: "SHREEOM",
    lastName: "TIWARY",
    role: "Wicket keeper batsman",
    style: "RIGHT HAND BATSMAN",
    jerseyimg: "jersy39.jpeg",
    jerseyBg: "bg-orange-500",
    tag: "WK",
    effect: "RED",
    image: "Shreeom.jpeg",
    social: {
      facebook: "https://www.facebook.com/shreeom.tiwary.2025",
      instagram: "https://www.instagram.com/tiwary_ji_9?igsh=b2VrZ2x5MHBrdHFh",
      whatsapp: "919264404720",
    },
  },
  {
    id: 5,
    name: "UJJWAL",
    lastName: "KUMAR TIWARI",
    role: "BATSMAN",
    style: "RIGHT HAND BATSMAN",
    jerseyimg: "jersy18.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "",
    social: { facebook: "", instagram: "#", whatsapp: "919229967592" },
  },
  {
    id: 6,
    name: "PRINCE",
    lastName: "TIWARI",
    role: "ALLROUNDER",
    style: "RHB | RAM FAST",
    jerseyimg: "jersy33.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "PrinceT.jpeg",
    social: {
      facebook: "#",
      instagram:
        "https://www.instagram.com/princetiwari9901?igsh=MXkwdm8wZzFtZmV4cQ==",
      whatsapp: "917079640890",
    },
  },
  {
    id: 7,
    name: "AKASH",
    lastName: "PASWAN",
    role: "BOWLER",
    style: "SPINNER",
    jerseyimg: "jersy3.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "Akash.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "919798229482" },
  },
  {
    id: 8,
    name: "PAWAN",
    lastName: "PASWAN",
    role: "BATSMAN",
    style: "RIGHT ARM BATSMAN",
    jerseyimg: "jersy1.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "Pawan.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "919798640509" },
  },
  {
    id: 9,
    name: "SONU",
    lastName: "SUNNY",
    role: "BOWLER",
    style: "RHB | RIGHT ARM MEDIUM",
    jerseyimg: "jersy17.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "Noor.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "916209601787" },
  },
  {
    id: 10,
    name: "ANUP",
    lastName: "TIWARI",
    role: "BOWLER",
    style: " RIGHT ARM FAST",
    jerseyimg: "jersy10.jpeg",
    jerseyBg: "bg-green-500",
    effect: "ORANGE",
    image: "Anup.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "919214708343" },
  },
  {
    id: 11,
    name: "SHUBHAM",
    lastName: "TIWARI",
    role: "BOWLER",
    style: " LEFT ARM FAST",
    jerseyimg: "jersy45.jpeg",
    jerseyBg: "bg-blue-500",
    effect: "ORANGE",
    image: "Shubham.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "917369947588" },
  },
  {
    id: 12,
    name: "RANJEET",
    lastName: "TIWARI",
    role: "BOWLER",
    style: " RIGHT ARM MEDIUM",
    jerseyimg: "jersy47.jpeg",
    jerseyBg: "bg-blue-500",
    effect: "ORANGE",
    image: "ranjeet.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "917970439095" },
  },
  {
    id: 13,
    name: "AMIT",
    lastName: "TIWARI",
    role: "BATSMAN",
    style: " RIGHT ARM BATSMAN",
    jerseyimg: "jersy25.jpeg",
    jerseyBg: "bg-blue-500",
    effect: "ORANGE",
    image: "Amit.jpeg",
    social: { facebook: "#", instagram: "#", whatsapp: "917667470104" },
  },
  {
    id: 13,
    name: "AVINASH",
    lastName: "KUMAR TIWARI",
    role: "BATSMAN",
    style: " LEFT ARM BATSMAN",
    jerseyimg: "jersy72.jpeg",
    jerseyBg: "bg-blue-500",
    effect: "ORANGE",
    image: "",
    social: { facebook: "#", instagram: "#", whatsapp: "917667470104" },
  },
];

/* ================= PLAYER CARD ================= */
const PlayerCard = ({ player }) => {
  const role = player.role.toUpperCase();

  let cardTheme =
    "from-orange-600 via-orange-400 to-transparent shadow-[0_0_25px_rgba(255,165,0,0.4)]";

  if (player.tag === "C") {
    cardTheme =
      "from-yellow-500 via-yellow-200 to-yellow-600 shadow-[0_0_35px_rgba(234,179,8,0.6)]";
  } else if (player.tag === "VC") {
    cardTheme =
      "from-slate-400 via-slate-100 to-slate-500 shadow-[0_0_35px_rgba(226,232,240,0.5)]";
  } else if (player.effect === "RED" || player.tag === "WK") {
    cardTheme =
      "from-red-600 via-red-400 to-red-800 shadow-[0_0_35px_rgba(220,38,38,0.7)]";
  }

  return (
    <div
      className={`relative w-full max-w-md p-[2px] rounded-3xl bg-gradient-to-br ${cardTheme} transition-all duration-500 group`}
    >
      <div className="bg-[#0b132b] rounded-[22px] p-6 text-white relative h-full">
        {/* ---- ROLE ICON ---- */}
        <div className="absolute -top-1 -right-1 z-20">
          {role === "BOWLER" && (
            <div className="w-12 h-12 bg-red-600 rounded-full border-2 border-red-400 flex items-center justify-center rotate-12">
              <Target size={20} />
            </div>
          )}
          {role === "BATSMAN" && (
            <div className="w-12 h-12 bg-yellow-500 rounded-full border-2 border-yellow-200 flex items-center justify-center -rotate-12">
              <Sword size={22} className="text-black" />
            </div>
          )}
          {role === "ALLROUNDER" && (
            <div className="w-12 h-12 bg-purple-600 rounded-full border-2 border-purple-300 flex items-center justify-center">
              <Zap size={22} className="animate-pulse" />
            </div>
          )}
          {(role === "WICKET KEEPER" || player.tag === "WK") && (
            <div className="w-12 h-12 bg-orange-500 rounded-full border-2 border-orange-200 flex items-center justify-center">
              <Shield size={22} />
            </div>
          )}
        </div>

        <div className="flex justify-between items-start mt-4">
          <div className="flex-1">
            <h2 className="lg:text-2xl font-black uppercase italic leading-tight sm:text-xl">
              {player.name}
            </h2>
            <h2 className="lg:text-2xl font-black text-green-500 uppercase italic leading-tight sm:text-xl">
              {player.lastName}
            </h2>
            <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-4">
              {player.style}
            </p>

            <div className="flex flex-col gap-2 items-start">
              <div className="inline-flex items-center gap-2 bg-[#1c2541] px-3 py-1 rounded-md border border-white/10">
                <span className="text-[10px] font-bold uppercase text-blue-400">
                  {player.role}
                </span>
              </div>

              {player.tag === "C" && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-gradient-to-r from-yellow-600 to-yellow-400 text-black shadow-lg">
                  <Crown size={12} /> Captain
                </div>
              )}
              {player.tag === "VC" && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-gradient-to-r from-slate-400 to-slate-200 text-black shadow-lg">
                  <Star size={12} /> Vice Captain
                </div>
              )}
              {player.tag === "WK" && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-red-600 text-white shadow-lg border border-red-400">
                  <Shield size={12} /> Wicket Keeper
                </div>
              )}
            </div>
          </div>

          <div className="relative w-32 h-32 rounded-full border-[3px] border-white/10 overflow-hidden bg-[#1c2541] shrink-0">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span
                className={`w-full h-full flex items-center justify-center text-white text-4xl   bg-opacity-90`}
              >
               <img
               src={player.jerseyimg}
               alt={player.name}
               className=""
               
               >
               </img>
              </span>
            </div>
          </div>
        </div>

        {/* --- SOCIAL SECTION WITH WHATSAPP --- */}
        <div className="flex items-center justify-start mt-10 mb-2 px-1 gap-4">
          <a
            href={player.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all border border-white/5"
          >
            <Facebook size={18} />
          </a>
          <a
            href={player.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-pink-600 hover:scale-110 transition-all border border-white/5"
          >
            <Instagram size={18} />
          </a>

          {/* WhatsApp Message Link */}
          <a
            href={`https://wa.me/${player.social.whatsapp}?text=Hello%20${player.name},%20kaise%20ho?`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full hover:bg-green-600 hover:scale-110 transition-all border border-white/5 text-white"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ================= CARD LIST ================= */
const CardList = () => {
  return (
    <div className="w-full min-h-screen bg-[#050a18] flex flex-wrap gap-8 justify-center items-center py-20 px-4">
      {players.map((p) => (
        <PlayerCard key={p.id} player={p} />
      ))}
    </div>
  );
};

export default CardList;
