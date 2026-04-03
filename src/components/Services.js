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
      desc: "Premium custom seat covers for comfort & style",
      img: "https://images.unsplash.com/photo-1629838978692-40a61bf66f7b?q=80&w=800",
    },
    {
      title: "Ambient Lighting",
      desc: "LED lighting to transform your car interior",
      img: "https://images.unsplash.com/photo-1672870987157-9715da8c4a84?q=80&w=800",
    },
    {
      title: "Audio Systems",
      desc: "Powerful sound systems for better driving experience",
      img: "https://images.unsplash.com/photo-1762628992471-77ab9965df8c?q=80&w=800",
    },
    {
      title: "Car Detailing",
      desc: "Deep cleaning & polishing for showroom finish",
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
          Upgrade your car with premium accessories & detailing
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
                cursor-pointer rounded-xl overflow-hidden
                border border-white/10
                hover:border-green-500/40
                transition
                bg-white/5 hover:scale-[1.02]
              "
            >
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
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}