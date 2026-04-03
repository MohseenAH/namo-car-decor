"use client";

export default function BeforeAfter() {
  const items = [
    {
      title: "Seat Cover Upgrade",
      price: "From ₹3,999",
      before: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800",
      after: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800",
    },
    {
      title: "Ambient Lighting",
      price: "From ₹2,499",
      before: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
      after: "https://images.unsplash.com/photo-1672870987157-9715da8c4a84?q=80&w=800",
    },
    {
      title: "Car Detailing",
      price: "From ₹1,999",
      before: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800",
      after: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Before & After Transformations
        </h2>
        <p className="text-gray-400 mt-4">
          See the difference our work makes
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 space-y-10 max-w-5xl mx-auto">

        {items.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">

            {/* Title + Price */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-green-400 font-semibold">{item.price}</span>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">

              {/* BEFORE */}
              <div className="relative">
                <img
                  src={item.before}
                  alt="before"
                  className="rounded-lg w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  BEFORE
                </span>
              </div>

              {/* AFTER */}
              <div className="relative">
                <img
                  src={item.after}
                  alt="after"
                  className="rounded-lg w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-black text-xs px-2 py-1 rounded">
                  AFTER 🔥
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-4 text-center">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                Get This Upgrade →
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}