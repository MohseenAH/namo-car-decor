"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load framer-motion (CRITICAL)
const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center">

      {/* Background Image (FIXED) */}
      <div className="absolute inset-0">
        <Image
          src="/NamoBg.webp"
          alt="Namo Car Decor Pune"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover opacity-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-5xl mt-10">

        {/* Headline (NO framer-motion here) */}
        <h1 className="font-extrabold leading-tight text-3xl md:text-6xl sm:text-xl">
          Premium Car Accessories & <br className="hidden sm:block" />
          <span className="text-green-500">
            Same-Day Installation in Pune
          </span>
        </h1>

        {/* Subtext */}
        <div className="mt-2 text-gray-300 text-base md:text-lg max-w-xl space-y-1">
          <p>✔ Seat Covers from ₹3,999</p>
          <p>✔ Ambient Lighting from ₹2,499</p>
          <p>✔ Audio Systems & Car Detailing</p>
          <p className="text-white font-medium mt-2">
            Upgrade your car without overpaying.
          </p>
        </div>

        {/* CTA (only animate THIS if needed) */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 flex flex-wrap gap-4"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/91XXXXXXXXXX"
            className="px-8 py-4 bg-green-500 text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            💬 Get Instant Quote
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            📞 Call Now
          </a>
        </MotionDiv>

        {/* Offer */}
        <p className="text-sm text-gray-400 mt-4">
          🔥 Limited Offer: Free Interior Cleaning with any service this week
        </p>

        {/* Trust */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white">
          <span>⭐ 4.8 Google Rating</span>
          <span>📍 Handewadi, Pune</span>
          <span>🚗 500+ Cars Modified</span>
        </div>

      </div>
    </section>
  );
}