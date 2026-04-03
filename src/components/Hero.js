"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/NamoBg.webp"
          alt="Car"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-5xl">

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-green-400 text-sm mt-4 tracking-wide"
        >
          PREMIUM CAR DECOR • PUNE
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-extrabold leading-tight text-3xl md:text-7xl"
        >
          Turn Your Car Into <br className="hidden sm:block" />
          <span className="text-green-500">A Head-Turner</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-300 text-lg max-w-xl"
        >
          Seat covers, ambient lighting, audio upgrades & detailing —
          everything your car needs to stand out on the road.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-8 py-4 bg-green-500 text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            💬 Get Quote on WhatsApp
          </a>

          <a
            href="tel:YOUR_NUMBER"
            className="px-8 py-4 border border-white/30 rounded-xl hover:bg-white hover:text-black transition"
          >
            📞 Call Now
          </a>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex gap-6 text-sm text-gray-400 flex-wrap"
        >
          <span>✔ 100+ Cars Upgraded</span>
          <span>✔ Same Day Service</span>
          <span>✔ Undri / Handewadi</span>
        </motion.div>

      </div>
    </section>
  );
}