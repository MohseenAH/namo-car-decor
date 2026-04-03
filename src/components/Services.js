"use client";

import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Seat Covers",
      price: "Starting ₹3,999",
      desc: "Premium leather & fabric seat covers with perfect fitting and long-lasting comfort.",
      img: "https://images.unsplash.com/photo-1629838978692-40a61bf66f7b?q=80&w=800",
      popular: true,
    },
    {
      title: "Ambient Lighting",
      price: "Starting ₹2,499",
      desc: "Multi-color LED ambient lighting to give your car a luxury night vibe.",
      img: "https://images.unsplash.com/photo-1672870987157-9715da8c4a84?q=80&w=800",
    },
    {
      title: "Car Detailing",
      price: "Starting ₹1,999",
      desc: "Deep interior & exterior cleaning for a fresh showroom-like finish.",
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black/95 text-white">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Services
        </h2>
        <p className="text-gray-400 mt-4">
          Affordable upgrades for your car — premium quality guaranteed
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  toggleCard(index);
                }
              }}
              className="
                relative cursor-pointer rounded-xl overflow-hidden
                border border-white/10
                hover:border-green-500/40
                transition bg-white/5 hover:scale-[1.02]
              "
            >

              {/* Popular Badge */}
              {service.popular && (
                <span className="absolute top-3 left-3 bg-green-500 text-black text-xs px-2 py-1 rounded">
                  🔥 Most Popular
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                {/* Price */}
                <p className="text-green-400 font-semibold mt-1">
                  {service.price}
                </p>

                {/* Description */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    text-gray-400 text-sm
                    max-h-0 opacity-0
                    md:max-h-40 md:opacity-100 md:mt-2
                    ${isActive ? "max-h-40 mt-2 opacity-100" : ""}
                  `}
                >
                  {service.desc}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm bg-green-500 text-black px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Get Quote →
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}