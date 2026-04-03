"use client";

export default function BeforeAfter() {
  const showcases = [
    {
      title: "Seat Cover Upgrade",
      before:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=800",
    },
    {
      title: "Interior Lighting",
      before:
        "https://images.unsplash.com/photo-1696581082048-1e952ab558cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      after:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800",
    },
    {
      title: "Car Detailing",
      before:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Before & After Transformations
          </h2>
          <p className="text-gray-400 mt-4">
            See how we turn ordinary cars into stunning machines
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="mt-16 space-y-16">

          {showcases.map((item, index) => (
            <div key={index}>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                {item.title}
              </h3>

              {/* Images */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Before */}
                <div className="relative group">
                  <img
                    src={item.before}
                    alt="Before"
                    className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 px-3 py-1 text-sm rounded">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative group">
                  <img
                    src={item.after}
                    alt="After"
                    className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
                  />
                  <span className="absolute top-3 left-3 bg-green-500 text-black px-3 py-1 text-sm rounded font-semibold">
                    After
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}