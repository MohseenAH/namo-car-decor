"use client";

import { ShieldCheck, Wrench, IndianRupee, Palette, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Materials",
    desc: "Only branded, durable and warranty-backed products used in every installation.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    desc: "Precision fitting with zero damage to your car’s original structure.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden charges. Clear pricing with best value for your budget.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Personalized styling tailored to your taste and vehicle type.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Quick delivery without compromising on quality and finish.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Heading + Intro */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-400 mb-10">
              We don’t just modify cars — we upgrade your driving experience with precision, style, and reliability.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 group"
              >
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
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1643694616837-cb9045d1aaf2?q=80&w=819&auto=format&fit=crop"
            alt="Car Interior"
            className="rounded-3xl shadow-2xl object-cover w-full h-[450px]"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-2xl"></div>
        </div>

      </div>
    </section>
  );
}
