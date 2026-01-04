import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon import kiya

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Apna WhatsApp Group Link yahan dalein
  const whatsappGroupLink = "https://chat.whatsapp.com/YourGroupLinkHere";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Players", path: "/players" },
    { name: "Contact Us", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {/* --- NAVIGATION BAR --- */}
      <nav className="w-full fixed top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                LAGAAN<span className="text-green-500">.</span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-bold uppercase tracking-wider transition-colors group ${
                      isActive
                        ? "text-green-500"
                        : "text-gray-300 hover:text-green-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-green-500 transition-all duration-300 ease-in-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}

              {/* --- WHATSAPP ICON (Desktop) --- */}
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 text-2xl transition-transform hover:scale-110"
                title="Join WhatsApp Group"
              >
                <FaWhatsapp />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-2.5 rounded-full font-bold shadow-lg transition transform hover:scale-105"
              >
                PAY NOW
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile WhatsApp Icon - visible beside menu toggle */}
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-2xl"
              >
                <FaWhatsapp />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 text-2xl"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/10 p-6 space-y-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-green-500" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-4 space-y-4">
              <a
                href="https://chat.whatsapp.com/ER1412f04Ty0fbYv2kQRVJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-green-500/50 text-green-500 py-3 rounded-xl font-bold"
              >
                <FaWhatsapp className="text-xl" /> JOIN GROUP
              </a>

              <button
                onClick={() => {
                  setShowModal(true);
                  setIsOpen(false);
                }}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg"
              >
                PAY NOW
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- RESPONSIVE PAYMENT MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="relative bg-[#0f172a] border border-white/20 rounded-[1.5rem] sm:rounded-[2.5rem] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white bg-white/5 p-2 rounded-full z-10"
            >
              ✕
            </button>

            <div className="p-5 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
                  Secure <span className="text-green-500">Payment</span>
                </h2>
                <div className="h-1 w-16 bg-green-500 mx-auto mt-2 rounded-full"></div>
                <p className="text-gray-400 mt-3 text-xs sm:text-sm font-medium">
                  Scan QR code or use bank details below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl ring-4 ring-green-500/10">
                    <img
                      src="QRcode.jpeg"
                      alt="Payment QR"
                      className="w-28 h-28 sm:w-36 sm:h-36"
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold mt-3 uppercase tracking-widest">
                    Scan with UPI
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    { label: "Bank Name", value: "BANK OF BARODA" },
                    { label: "Account Number", value: "12060 10002 8023" },
                    { label: "IFSC Code", value: "BARB0SASRAM" },
                  ].map((detail, index) => (
                    <div
                      key={index}
                      className="bg-white/5 p-3 rounded-xl border border-white/5"
                    >
                      <p className="text-[9px] sm:text-[10px] text-green-500 font-black uppercase">
                        {detail.label}
                      </p>
                      <p className="text-white text-xs sm:text-sm font-bold tracking-wide">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-xl sm:rounded-2xl">
                <p className="text-green-400 text-[10px] sm:text-xs text-center leading-relaxed">
                  ⚠️ <strong>Note:</strong> Send the payment screenshot to
                  WhatsApp for confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
