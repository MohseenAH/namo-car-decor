"use client";

import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Abhi P",
      text: "Would highly recommend for top notch service and customer centric approach. Kudos to Namo Car Decor team!",
      rating: 5,
    },
    {
      name: "CHANDAN RAJPUROHIT",
      text: "Great value for money and excellent customer service.",
      rating: 5,
    },
    {
      name: "Chinmay Barmecha",
      text: "Wide range in products and absolutely great service. Technically sound fitters with absolutely amazing finishing job.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 mt-4">
            Real reviews from happy car owners
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {reviews.map((review, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl
                bg-white/5 border border-white/10
                hover:border-green-500/30
                transition
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-400 fill-green-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{review.text}”
              </p>

              {/* Name */}
              <p className="mt-4 font-semibold text-white">
                {review.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}