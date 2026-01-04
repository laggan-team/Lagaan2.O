import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0b132b] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Simple Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter">
            Contact <span className="text-green-500">Management</span>
          </h1>
          <p className="text-slate-400 mt-4 text-lg border-l-4 border-green-500 pl-4">
            Official contact points for Lagaan Team.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Box */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all">
            <Mail className="text-green-500 mb-4" size={32} />
            <h3 className="text-slate-500 uppercase text-xs font-black tracking-widest mb-1">
              Email
            </h3>
            <p className="text-white text-xl font-bold tracking-tight">
              ashishkumartiwary641@gmail.com
            </p>
          </div>

          {/* Phone Box */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all">
            <Phone className="text-green-500 mb-4" size={32} />
            <h3 className="text-slate-500 uppercase text-xs font-black tracking-widest mb-1">
              Phone No.
            </h3>
            <p className="text-white text-xl font-bold tracking-tight">
              +91 62045 07394
            </p>
          </div>

          {/* Address Box (Full Width on Grid) */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all md:col-span-2">
            <MapPin className="text-green-500 mb-4" size={32} />
            <h3 className="text-slate-500 uppercase text-xs font-black tracking-widest mb-1">
              Location
            </h3>
            <p className="text-white text-xl font-bold tracking-tight">
              Kumahu, Rohtash, Bihar, India
            </p>
          </div>
        </div>

        {/* Simple Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-10">
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-6 md:mb-0">
            © 2024 LAGAAN CRICKET TEAM
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-white hover:text-green-500 flex items-center gap-2 font-bold uppercase text-xs transition-colors"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-green-500 flex items-center gap-2 font-bold uppercase text-xs transition-colors"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-green-500 flex items-center gap-2 font-bold uppercase text-xs transition-colors"
            >
              <Twitter size={18} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
