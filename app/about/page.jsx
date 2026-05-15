"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaBuilding,
  FaUsers,
  FaMicrophone,
  FaVideo,
} from "react-icons/fa";

export default function Auditorium() {
  return (
    <section
      id="auditorium"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-28"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-[#6c2bd9]/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-[#ffc300]/20 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#ffc300]" />

            <p className="text-xs uppercase tracking-[5px] text-[#ffc300]">
              Auditorium & Boardroom
            </p>
          </div>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Designed For
            <span className="gradient-text block">
              Modern Events
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            SoundBast Events offers a fully equipped auditorium
            and executive boardroom space in Dubai, built for
            conferences, launches, workshops, private events,
            screenings, networking sessions, and live productions.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-14 lg:grid-cols-2">
          {/* AUDITORIUM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
          >
            {/* IMAGE */}
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/auditorium/auditorium.jpeg"
                alt="SoundBast Auditorium"
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-[2500ms] group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* BADGE */}
              <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[4px] text-[#ffc300]">
                  Main Auditorium
                </p>
              </div>

              {/* TEXT */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-4xl font-black text-white">
                  350 Capacity Auditorium
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-gray-300">
                  A versatile event venue designed for live
                  performances, conferences, launches, seminars,
                  corporate functions, networking events, and
                  immersive productions.
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid gap-4 p-8 sm:grid-cols-2">
              {[
                {
                  icon: <FaUsers />,
                  title: "350 Guests",
                },
                {
                  icon: <FaVideo />,
                  title: "LED Displays",
                },
                {
                  icon: <FaMicrophone />,
                  title: "Stage & Audio",
                },
                {
                  icon: <FaBuilding />,
                  title: "Flexible Setup",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffc300] to-[#6c2bd9] text-black">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-[3px] text-gray-400">
                      Feature
                    </h4>

                    <p className="mt-1 font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOARDROOM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
          >
            {/* VIDEO AREA */}
            <div className="relative h-[520px] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover transition duration-[2500ms] group-hover:scale-110"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-modern-office-meeting-5174/1080p.mp4"
                  type="video/mp4"
                />
              </video>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* BADGE */}
              <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[4px] text-[#ffc300]">
                  Executive Boardroom
                </p>
              </div>

              {/* TEXT */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-4xl font-black text-white">
                  30 Capacity Boardroom
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-gray-300">
                  A professional meeting and presentation space
                  ideal for workshops, strategy sessions,
                  executive meetings, private discussions,
                  training sessions, and business presentations.
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid gap-4 p-8 sm:grid-cols-2">
              {[
                {
                  icon: <FaUsers />,
                  title: "30 Guests",
                },
                {
                  icon: <FaVideo />,
                  title: "Presentation Ready",
                },
                {
                  icon: <FaMicrophone />,
                  title: "Conference Audio",
                },
                {
                  icon: <FaBuilding />,
                  title: "Private Environment",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6c2bd9] to-[#ffc300] text-black">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-[3px] text-gray-400">
                      Feature
                    </h4>

                    <p className="mt-1 font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffc300]/10 to-[#6c2bd9]/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[5px] text-[#ffc300]">
                Venue Hire & Event Space
              </p>

              <h3 className="text-4xl font-black leading-tight text-white">
                Flexible Spaces For Every Occasion
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
                From corporate meetings and conferences to
                private celebrations and live productions,
                SoundBast Events provides fully managed
                venue hire solutions tailored to your event.
              </p>
            </div>

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-8 py-4 font-bold text-black shadow-[0_0_60px_rgba(255,195,0,0.25)]"
            >
              Book The Venue
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}