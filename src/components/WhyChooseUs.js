"use client";

import { ShieldCheck, Wrench, IndianRupee, Palette, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Materials",
    desc: "Branded seat covers, lighting & accessories with long-lasting durability.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    desc: "Damage-free fitting by experienced technicians.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Best rates in Handewadi with no hidden charges.",
  },
  {
    icon: Palette,
    title: "Custom Styling Options",
    desc: "Design your car interior exactly how you want.",
  },
  {
    icon: Clock,
    title: "Same-Day Delivery",
    desc: "Most installations completed within a few hours.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20  bg-[#0a0a0a]  text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Namo Car Decor?
          </h2>

          {/* Local Trust Line */}
          <p className="text-green-400 text-sm mb-4">
            ⭐ Trusted by 500+ Car Owners in Handewadi, Pune
          </p>

          {/* Intro */}
          <p className="text-gray-400 mb-10">
            We provide affordable, high-quality car upgrades with fast delivery and professional installation.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 group">

                {/* Icon */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-green-400/40 transition">
                  <feature.icon className="w-6 h-6 text-green-400 group-hover:scale-110 transition" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Get Quote on WhatsApp →
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/NamoShop.webp"  // 👉 replace with REAL shop image
            alt="Namo Car Decor Shop"
            className="object-top-left rounded-3xl shadow-2xl object-cover w-full h-[450px]"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-2xl"></div>
        </div>

      </div>
    </section>
  );
}