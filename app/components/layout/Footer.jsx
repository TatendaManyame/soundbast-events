"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaWhatsapp,
      link: "https://wa.me/97143219220",
      label: "WhatsApp",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/sound_bast_events/",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/@soundbast",
      label: "TikTok",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Auditorium",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Venue Hire",
      href: "/venues",
    },
    {
      name: "Upcoming Events",
      href: "/events",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const services = [
    "Premium Sound Systems",
    "Luxury Lighting Setup",
    "Corporate Productions",
    "Private Celebrations",
    "Venue Hire",
    "Stage & Event Production",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] bg-[#ffc300]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] bg-[#6c2bd9]/10 blur-[140px]" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        
        {/* TOP GRID */}
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          
          {/* BRAND SECTION */}
          <div>
            {/* LOGO */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="mb-8"
            >
              <Link href="/">
                <div className="relative inline-flex">
                  
                  {/* LOGO GLOW */}
                  <div className="absolute inset-0 bg-[#ffc300]/20 blur-3xl" />

                  <Image
                    src="/logo/soundbast-logo.png"
                    alt="SoundBast Events Logo"
                    width={280}
                    height={120}
                    priority
                    className="relative z-10 h-auto w-[200px] object-contain sm:w-[240px] md:w-[280px] brightness-125 contrast-125"
                  />
                </div>
              </Link>
            </motion.div>

          

            {/* CTA BUTTON */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-10 inline-flex"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full border border-[#ffc300]/20 bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-7 py-3 text-sm font-bold text-black shadow-[0_0_40px_rgba(255,195,0,0.15)] transition duration-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book Your Event

                  <FaArrowUp className="rotate-45 text-xs transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>

                {/* BUTTON SHINE */}
                <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition duration-1000 group-hover:translate-x-[100%]" />
              </Link>
            </motion.div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-400 transition duration-300 hover:text-[#ffc300]"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-[#ffc300] opacity-50 transition duration-300 group-hover:opacity-100" />

                    <span className="transition duration-300 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Services
            </h3>

            <ul className="space-y-5">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-3 text-gray-400 transition duration-300 hover:text-[#ffc300]"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#6c2bd9] opacity-50 transition duration-300 group-hover:opacity-100" />

                  <span className="transition duration-300 group-hover:translate-x-1">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-6 text-gray-400">
              
              {/* PHONE */}
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[4px] text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+97143219220"
                  className="transition duration-300 hover:text-[#ffc300]"
                >
                  +971 4 321 9220
                </a>
              </div>

              {/* EMAIL */}
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[4px] text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:info@soundbastevents.ae"
                  className="break-all transition duration-300 hover:text-[#ffc300]"
                >
                  info@soundbastevents.ae
                </a>
              </div>

              {/* LOCATION */}
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[4px] text-gray-500">
                  Location
                </p>

                <p>Street 5b - WH42 - Al Qouz Ind.first - Al Quoz - Dubai</p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-10">
              <p className="mb-5 text-[11px] uppercase tracking-[4px] text-gray-500">
                Follow SoundBast
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                      }}
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition duration-500 hover:text-black"
                    >
                      {/* HOVER BG */}
                      <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition duration-500 group-hover:scale-100" />

                      <div className="relative z-10">
                        <Icon size={18} />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center md:flex-row md:text-left">
          
          <p className="text-sm text-gray-500">
            © 2026 SoundBast Events. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Auditorium • Venue Hire • Event Production
          </p>
        </div>
      </div>
    </footer>
  );
}