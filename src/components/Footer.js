import { Phone, MessageCircle, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-green-500">
              Namo Car Decor
            </h3>
            <p className="text-gray-400 mt-3 text-sm">
              Premium car accessories & detailing in Pune.  
              We transform your car into a head-turner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-sm text-gray-400">

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Undri / Handewadi, Pune</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition">
                  +91 XXXXX XXXXX
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WhatsApp Chat
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <FaInstagram className="w-4 h-4 text-green-400" />
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © {year} Namo Car Decor. All rights reserved.
        </div>

      </div>
    </footer>
  );
}