"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-0 h-[450px] w-[450px] rounded-full bg-[#6c2bd9]/10 blur-[140px]" />

        <div className="absolute bottom-0 right-[-120px] h-[450px] w-[450px] rounded-full bg-[#ffc300]/10 blur-[140px]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#ffc300]" />

            <span className="text-[11px] uppercase tracking-[4px] text-[#ffc300]">
              Upcoming Events
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            No Upcoming
            <span className="gradient-text block">
              Events At The Moment
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            There are currently no scheduled events at SoundBast
            Auditorium. Please check back soon for upcoming
            conferences, live experiences, corporate events,
            workshops, and private functions.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#ffc300]/30 hover:bg-white/[0.08] hover:text-[#ffc300]"
            >
              Contact Us For Venue Bookings
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}