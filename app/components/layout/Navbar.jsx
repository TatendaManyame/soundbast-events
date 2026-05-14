"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

import { useState, useEffect } from "react";

const links = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome />,
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
    name: "Gallery",
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
            scrolled
              ? "rounded-[30px] border border-white/10 bg-black/70 shadow-[0_0_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
              : ""
          }`}
        >
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="relative flex-shrink-0"
            >
              <Link href="/">
                <Image
                  src="/logo/soundbast-logo.png"
                  alt="SoundBast Events"
                  width={220}
                  height={90}
                  priority
                  className="h-auto w-[160px] object-contain sm:w-[220px]"
                />
              </Link>
            </motion.div>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-1 xl:flex">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                >
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-medium uppercase tracking-[1.5px] text-white/75 transition duration-300 hover:text-white"
                  >
                    {/* ICON */}
                    {link.icon && (
                      <span className="relative z-10">
                        {link.icon}
                      </span>
                    )}

                    {/* TEXT */}
                    <span className="relative z-10">
                      {link.name}
                    </span>

                    {/* HOVER BG */}
                    <span className="absolute inset-0 scale-0 rounded-full bg-white/[0.05] transition duration-500 group-hover:scale-100" />

                    {/* ACTIVE LINE */}
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition-all duration-500 group-hover:w-8" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden items-center gap-4 xl:flex">
              
              {/* SOCIALS */}
              <div className="flex items-center gap-3">
                {[FaInstagram, FaWhatsapp].map(
                  (Icon, index) => (
                    <motion.a
                      key={index}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      href="#"
                      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-xl transition duration-500 hover:text-black"
                    >
                      {/* HOVER BG */}
                      <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition duration-500 group-hover:scale-100" />

                      <div className="relative z-10">
                        <Icon />
                      </div>
                    </motion.a>
                  )
                )}
              </div>

              {/* BOOK NOW BUTTON */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/contact"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-[#ffc300]/20 bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,195,0,0.18)] transition duration-500"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <span className="relative z-10">
                    Book Venue
                  </span>

                  <FaArrowRight className="relative z-10 text-xs transition duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl backdrop-blur-xl xl:hidden"
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="fixed left-0 top-28 z-40 w-full px-5 xl:hidden"
        >
          <div className="overflow-hidden rounded-[35px] border border-white/10 bg-black/90 p-8 shadow-2xl backdrop-blur-3xl">
            
            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-5 py-4 text-base font-medium text-white/80 transition duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-[#ffc300]"
                >
                  <span>{link.name}</span>

                  <FaArrowRight className="opacity-50 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="mt-6 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-8 py-3 text-center text-sm font-black text-black shadow-[0_0_40px_rgba(255,195,0,0.2)]"
            >
              Book Venue

              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      )}

      {/* FLOATING WHATSAPP */}
      <motion.a
        href="https://wa.me/97143219220"
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          delay: 1,
        }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_0_40px_rgba(37,211,102,0.45)]"
      >
        <FaWhatsapp />
      </motion.a>
    </>
  );
}