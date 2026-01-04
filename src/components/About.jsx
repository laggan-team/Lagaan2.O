import React from "react";
import { Target, Award, ShieldCheck, Star, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#f8fafc] w-full min-h-screen font-sans text-slate-800">
      {/* Hero Section */}
      <div className="bg-[#0b132b] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
          THE <span className="text-green-500">LAGAAN</span> SQUAD
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg font-medium">
          Driven by discipline, united by passion. From the training grounds to
          the championship podium, we play as one.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* --- HEAD COACH SECTION --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            {/* Coach Image with Team Branding */}
            <div className="w-full h-[550px] bg-[#0b132b] rounded-3xl shadow-2xl overflow-hidden relative group border-4 border-white">
              <img
                src="/Santosh.jpeg"
                alt="Head Coach Santosh"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-black uppercase italic tracking-widest">
                  Santosh Tiwari
                </h3>
                <p className="text-green-500 font-bold uppercase tracking-tighter flex items-center gap-2">
                  <Trophy size={18} /> Head Coach & Chief Strategist
                </p>
              </div>
            </div>

            {/* Experience Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-[#0b132b] p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-black italic">15+</p>
              <p className="text-[10px] font-black uppercase leading-tight">
                Years of Coaching
                <br />
                Excellence
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600">
              <ShieldCheck size={14} /> The Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b132b] leading-none">
              Behind Every Victory Is A{" "}
              <span className="text-green-600">Vision.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Coach Santosh Tiwari is the architect of our team's success. With a sharp
              eye for talent and a relentless focus on mental toughness, he has
              transformed individual players into a championship-winning unit.
              His coaching style is built on discipline, strategy, and the
              "never give up" spirit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl border-l-4 border-green-500 shadow-sm">
                <h4 className="font-black text-[#0b132b] uppercase text-sm">
                  Strategic Planning
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Advanced match analysis and field positioning.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-black text-[#0b132b] uppercase text-sm">
                  Talent Scouting
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Identifying and nurturing the stars of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- TEAM PHILOSOPHY / CORE VALUES --- */}
        <div className="bg-[#0b132b] rounded-[40px] p-12 text-white relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 opacity-10">
            <Users size={300} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-black italic mb-6">
              Our Team Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-green-500 font-bold mb-2 tracking-widest uppercase text-xs">
                  Integrity
                </h4>
                <p className="text-gray-400 text-sm">
                  We play hard, we play fair. Our reputation on and off the
                  field defines us.
                </p>
              </div>
              <div>
                <h4 className="text-green-500 font-bold mb-2 tracking-widest uppercase text-xs">
                  Unity
                </h4>
                <p className="text-gray-400 text-sm">
                  Individual talent wins games, but teamwork wins championships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- TEAM STATS --- */}
    
      </div>

      {/* Footer Branding */}
      <div className="py-20 border-t border-slate-200 text-center">
        <h2 className="text-2xl font-black text-[#0b132b] italic uppercase tracking-tighter">
          LAGAAN <span className="text-green-500">CRICKET TEAM</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2 font-medium">
          ESTD. 2024 • Excellence In Motion
        </p>
      </div>
    </div>
  );
};

export default About;
