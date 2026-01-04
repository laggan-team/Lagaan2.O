import React, { useState } from "react";
import {
  Shield,
  Sword,
  Zap,
  Facebook,
  Instagram,
  MessageCircle,
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
      facebook: "www.facebook.com",
      instagram: "www.instagram.com",
      whatsapp: "916204507394",
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
      facebook: "www.facebook.com",
      instagram: "www.instagram.com",
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
      facebook: "www.facebook.com",
      instagram: "www.instagram.com",
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
      facebook: "www.facebook.com",
      instagram: "www.instagram.com",
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
    image: "#", 
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
      instagram: "www.instagram.com",
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
    id: 14,
    name: "AVINASH",
    lastName: "KUMAR TIWARI",
    role: "BATSMAN",
    style: " LEFT ARM BATSMAN",
    jerseyimg: "jersy72.jpeg",
    jerseyBg: "bg-blue-500",
    effect: "ORANGE",
    image: "# ",
    social: { facebook: "#", instagram: "#", whatsapp: "917667470104" },
  },
];

/* ================= PLAYER CARD COMPONENT ================= */
const PlayerCard = ({ player }) => {
  const [isJerseyVisible, setIsJerseyVisible] = useState(false);
  const role = player.role.toUpperCase();

  const handleToggle = () => setIsJerseyVisible(!isJerseyVisible);

  let cardTheme =
    "from-orange-600 via-orange-400 to-transparent shadow-[0_0_25px_rgba(255,165,0,0.4)]";
  if (player.tag === "C")
    cardTheme =
      "from-yellow-500 via-yellow-200 to-yellow-600 shadow-[0_0_35px_rgba(234,179,8,0.6)]";
  else if (player.tag === "VC")
    cardTheme =
      "from-slate-400 via-slate-100 to-slate-500 shadow-[0_0_35px_rgba(226,232,240,0.5)]";
  else if (player.effect === "RED" || player.tag === "WK")
    cardTheme =
      "from-red-600 via-red-400 to-red-800 shadow-[0_0_35px_rgba(220,38,38,0.7)]";

  return (
    <div
      className={`relative w-full max-w-md p-[2px] rounded-3xl bg-gradient-to-br ${cardTheme} transition-all duration-500 group`}
    >
      <div className="bg-[#0b132b] rounded-[22px] p-6 text-white relative h-full">
        {/* Role Icon */}
        <div className="absolute -top-1 -right-1 z-20">
          {role.includes("BOWLER") && (
            <div className="w-12 h-12 bg-red-600 rounded-full border-2 border-red-400 flex items-center justify-center rotate-12">
              <Target size={20} />
            </div>
          )}
          {role.includes("BATSMAN") && (
            <div className="w-12 h-12 bg-yellow-500 rounded-full border-2 border-yellow-200 flex items-center justify-center -rotate-12">
              <Sword size={22} className="text-black" />
            </div>
          )}
          {role === "ALLROUNDER" && (
            <div className="w-12 h-12 bg-purple-600 rounded-full border-2 border-purple-300 flex items-center justify-center">
              <Zap size={22} className="animate-pulse" />
            </div>
          )}
          {(role.includes("KEEPER") || player.tag === "WK") && (
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
            <div className="inline-flex items-center gap-2 bg-[#1c2541] px-3 py-1 rounded-md border border-white/10">
              <span className="text-[10px] font-bold uppercase text-blue-400">
                {player.role}
              </span>
            </div>
          </div>

          {/* Interactive Image Section */}
          <div
            className="relative w-32 h-32 cursor-pointer transition-transform duration-300 active:scale-95"
            onClick={handleToggle}
          >
            <img
              src={
                isJerseyVisible
                  ? player.jerseyimg
                  : player.image || "teamjersey.png"
              }
              alt={player.name}
              className="w-full h-full object-cover rounded-xl border-2 border-white/20 shadow-lg"
            />
            <div className="absolute -bottom-2 -left-2 bg-black/60 backdrop-blur-sm text-[8px] px-2 py-1 rounded-md border border-white/10">
              {isJerseyVisible ? "JERSEY" : "PHOTO"}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 border-t border-white/5 pt-4">
          {player.social.facebook && (
            <a
              href={player.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Facebook size={18} />
            </a>
          )}
          {player.social.instagram && (
            <a
              href={player.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={18} />
            </a>
          )}
          {player.social.whatsapp && (
            <a
              href={`wa.me{player.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN APP COMPONENT ================= */
export default function TeamGrid() {
  return (
    <div className="min-h-screen bg-[#0b132b] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
