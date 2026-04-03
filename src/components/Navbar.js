"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const phone = "+919156413365";
const whatsappMsg = "Hi, I want to upgrade my car.";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Close menu on resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 text-white">

      {/* NAVBAR */}
      <nav className="
        w-[95%] sm:w-[92%] max-w-7xl mx-auto 
        mt-2 sm:mt-4 
        px-4 sm:px-8 py-2.5
        flex items-center justify-between
        bg-black/30 backdrop-blur-md
        border border-white/10
        rounded-xl
      ">

        {/* ✅ LOGO */}
        <a href="#home" className="flex flex-col leading-none">
  <span className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
    NAMO
  </span>
  <span className="text-[10px] sm:text-xs tracking-[0.25em] text-green-400 font-semibold">
    CAR DECOR
  </span>
</a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-green-400 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <a
          href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noreferrer"
          className="
            hidden md:inline-flex
            px-5 py-2 rounded-lg text-sm font-semibold
            bg-green-500 text-black
            shadow-md shadow-green-500/30
            hover:shadow-green-500/50 hover:scale-105
            transition
          "
        >
          WhatsApp
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl w-10 h-10 flex items-center justify-center"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="
          md:hidden 
          w-[95%] mx-auto mt-2 
          bg-black/40 backdrop-blur-lg
          border border-white/10
          rounded-xl px-6 py-6 
          flex flex-col items-center gap-6
        ">

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-lg font-medium"
            >
              {item.label}
            </a>
          ))}

          {/* CALL BUTTON */}
          <a
            href={`tel:${phone}`}
            onClick={closeMenu}
            className="
              w-full text-center px-6 py-3 
              border border-green-400 
              bg-white text-black 
              rounded-lg font-semibold
            "
          >
            📞 Call Now
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="
              w-full text-center px-6 py-3 
              bg-green-500 text-black 
              rounded-lg font-semibold
            "
          >
            💬 WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}