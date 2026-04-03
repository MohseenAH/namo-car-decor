"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/NamoBg.webp"
          alt="Namo Car Decor Pune"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-5xl mt-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-extrabold leading-tight text-3xl md:text-6xl sm:text-xl"
        >
          Premium Car Accessories & <br className="hidden sm:block" />
          <span className="text-green-500">
            Same-Day Installation in Pune
          </span>
        </motion.h1>

        {/* Subtext (Now Sales-Oriented) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-gray-300 text-base md:text-lg max-w-xl space-y-1"
        >
          <p>✔ Seat Covers from ₹3,999</p>
          <p>✔ Ambient Lighting from ₹2,499</p>
          <p>✔ Audio Systems & Car Detailing</p>
          <p className="text-white font-medium mt-2">
            Upgrade your car without overpaying.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 flex flex-wrap gap-4"
        >
          <a
            target="_blank" rel="noopener noreferrer"
            href="https://wa.me/91XXXXXXXXXX"
            className="px-8 py-4 bg-green-500 text-black font-semibold rounded-xl hover:scale-105 transition animate-pulse"
          >
            💬 Get Instant Quote
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            📞 Call Now
          </a>
        </motion.div>

        {/* Urgency Offer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-400 mt-3"
        >
          🔥 Limited Offer: Free Interior Cleaning with any service this week
        </motion.p>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex gap-6 text-sm text-white flex-wrap"
        >
          <span>⭐ 4.8 Google Rating</span>
          <span>📍 Handewadi, Pune</span>
          <span>🚗 500+ Cars Modified</span>
          <span>🕒 Same-Day Delivery</span>
        </motion.div>

      </div>
    </section>
  );
}