"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-32"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] bg-[#6c2bd9]/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-[#ffc300]/20 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* SECTION TITLE */}
          <p className="mb-4 uppercase tracking-[6px] text-[#ffc300]">
            About SoundBast
          </p>

          {/* HEADING */}
          <h2 className="text-5xl font-black leading-tight text-white md:text-6xl">
            A Space Built
            <span className="gradient-text block">
              For Every Event
            </span>
          </h2>

          {/* TEXT */}
          <p className="mt-8 text-lg leading-9 text-gray-400">
            SoundBast Events is a professional venue hire and
            event destination in Dubai, designed to host
            conferences, corporate functions, networking events,
            launches, productions, performances, workshops,
            private celebrations, and live experiences.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-400">
            Our venue features a fully equipped auditorium with
            a seating capacity of 350 guests, alongside a modern
            boardroom designed for meetings, presentations, and
            private sessions with up to 30 attendees.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-400">
            Combining advanced production capabilities,
            immersive environments, and flexible event spaces,
            SoundBast creates seamless experiences tailored for
            brands, businesses, creators, and communities.
          </p>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-5">
            {[
              ["350", "Auditorium Capacity"],
              ["30", "Boardroom Capacity"],
              ["Dubai", "Prime Location"],
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >
                <h3 className="text-3xl font-black text-[#ffc300] md:text-4xl">
                  {item[0]}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* MAIN IMAGE */}
          <div className="relative h-[650px] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
            
            <Image
              src="/auditorium/auditorium.jpeg"
              alt="SoundBast Auditorium"
              fill
              priority
              className="object-cover rounded-[40px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45" />

            {/* TEXT */}
            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-4xl font-black text-white">
                SoundBast
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[4px] text-[#ffc300]">
                Auditorium & Venue Hire
              </p>
            </div>
          </div>

          {/* GLOW RINGS */}
          <div className="absolute -right-10 -top-10 h-40 w-40 animate-pulse rounded-full border border-[#ffc300]/30" />

          <div className="animate-spin-slow absolute -right-20 top-20 h-72 w-72 rounded-full border border-[#6c2bd9]/20" />
        </motion.div>
      </div>
    </section>
  );
}