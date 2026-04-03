"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Visit or Contact Us
          </h2>

          {/* Trust + Urgency */}
          <p className="text-green-400 mt-3 text-sm">
            📍 Handewadi, Pune • ⭐ 4.8 Rating • Same-Day Service Available
          </p>

          <p className="text-gray-400 mt-3">
            Call or WhatsApp now to get instant pricing & availability
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">

          {/* LEFT: Contact Info */}
          <div className="space-y-6">

            {/* Address */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4">
                <MapPin className="text-green-400" />
                <div>
                  <p className="font-semibold">Visit Our Shop</p>
                  <p className="text-sm text-gray-400">
                    Namo Car Decor, Handewadi, Pune
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Namo+Car+decor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-green-500 text-black hover:scale-105 transition"
              >
                ➜
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4">
                <Phone className="text-green-400" />
                <div>
                  <p className="font-semibold">Call Now</p>
                  <p className="text-sm text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                className="p-3 rounded-lg bg-green-500 text-black hover:scale-105 transition"
              >
                📞
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4">
                <MessageCircle className="text-green-400" />
                <div>
                  <p className="font-semibold">WhatsApp Us</p>
                  <p className="text-sm text-gray-400">
                    Get instant quote & response
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-green-500 text-black hover:scale-105 transition"
              >
                💬
              </a>
            </div>

            {/* 🔥 Strong CTA Banner */}
            <div className="p-5 rounded-xl bg-green-500 text-black text-center font-semibold">
              🔥 Walk-in today & get FREE interior cleaning with any service
            </div>

          </div>

          {/* RIGHT: Google Map */}
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-white/10">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6694172896705!2d73.92485727519006!3d18.4533129826273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebd55ab4f547%3A0xfdef96756ffc054e!2sNamo%20Car%20decor!5e0!3m2!1sen!2sin!4v1775200450256!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay CTA on Map */}
            <a
              href="https://maps.google.com/?q=Namo+Car+decor"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm hover:bg-black"
            >
              📍 Open in Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}