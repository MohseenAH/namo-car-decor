"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact Us
          </h2>
          <p className="text-gray-400 mt-4">
            Visit our shop or get in touch instantly
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
                  <p className="font-semibold">Our Location</p>
                  <p className="text-sm text-gray-400">
                    Undri / Handewadi, Pune
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Undri Pune"
                target="_blank"
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
                  <p className="font-semibold">Call Us</p>
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
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-gray-400">
                    Chat with us instantly
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="p-3 rounded-lg bg-green-500 text-black hover:scale-105 transition"
              >
                💬
              </a>
            </div>

          </div>

          {/* RIGHT: Google Map */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden border border-white/10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6694172896705!2d73.92485727519006!3d18.4533129826273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebd55ab4f547%3A0xfdef96756ffc054e!2sNamo%20Car%20decor!5e0!3m2!1sen!2sin!4v1775200450256!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

      </div>
    </section>
  );
}