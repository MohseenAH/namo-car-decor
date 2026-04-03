"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110"
      >
        <FaWhatsapp className="text-lg" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+91XXXXXXXXXX"
        className="group bg-white hover:bg-gray-200 text-black p-4 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110"
      >
        <Phone className="w-5 h-5" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Call Now
        </span>
      </a>

    </div>
  );
}