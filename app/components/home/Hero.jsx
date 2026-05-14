"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

const backgroundImages = [
  "/background/backg1.jpeg",
  "/background/backg2.jpeg",
  "/background/backg3.jpeg",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className="flex h-full w-[200%]"
        >
          {[...backgroundImages, ...backgroundImages].map(
            (image, index) => (
              <div
                key={index}
                className="relative h-full min-w-[33.333%] overflow-hidden"
              >
                <Image
                  src={image}
                  alt="SoundBast Events"
                  fill
                  priority
                  className="object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/75" />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* MAIN OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* LIGHT EFFECTS */}
      <div className="absolute left-0 top-0 z-10 h-[450px] w-[450px] bg-[#6c2bd9]/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 z-10 h-[450px] w-[450px] bg-[#ffc300]/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 z-10 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* FLOATING LIGHTS */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-10 top-32 z-10 h-40 w-40 rounded-full bg-[#ffc300]/10 blur-[70px]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-20 right-10 z-10 h-56 w-56 rounded-full bg-[#6c2bd9]/10 blur-[90px]"
      />

      {/* CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center px-6 pt-28 pb-14">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl"
            >
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#ffc300]" />

              <p className="text-xs uppercase tracking-[4px] text-gray-300 sm:text-sm">
                Auditorium • Events • Venue Hire
              </p>
            </motion.div>

            {/* TITLE */}
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[82px]">
              Host Events

              <span className="gradient-text block">
                That People
              </span>

              <span className="block text-white/90">
                Remember
              </span>
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl"
            >
              SoundBast Events is a modern auditorium and
              event venue in Dubai designed for conferences,
              concerts, private celebrations, corporate
              gatherings, workshops, launches, and live
              productions.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 1,
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* CONTACT BUTTON */}
              <Link href="/contact">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-7 py-3.5 text-sm font-black text-black shadow-[0_0_60px_rgba(255,195,0,0.25)] transition duration-500 sm:px-9 sm:py-4 sm:text-base"
                >
                  Book Your Event

                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </motion.div>
              </Link>

              {/* AUDITORIUM BUTTON */}
              <Link href="/about">
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-500 hover:bg-white hover:text-black sm:px-9 sm:py-4 sm:text-base"
                >
                  <FaPlay />

                  Explore Venue
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
            }}
            className="relative hidden items-center justify-center lg:flex"
          >
            {/* ROTATING RINGS */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[520px] w-[520px] rounded-full border border-[#ffc300]/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-[#6c2bd9]/20"
            />

            {/* MAIN IMAGE */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative h-[500px] w-[410px] overflow-hidden rounded-[40px] border border-white/10 shadow-[0_0_100px_rgba(255,195,0,0.12)]"
            >
              <Image
                src="/auditorium/auditorium.jpeg"
                alt="SoundBast Auditorium"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="mb-3 text-xs uppercase tracking-[5px] text-[#ffc300]">
                  SoundBast Auditorium
                </p>

                <h3 className="text-3xl font-black leading-tight text-white">
                  Designed For
                  <span className="block">
                    Modern Events
                  </span>
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20 p-2">
          <div className="h-2 w-2 rounded-full bg-[#ffc300]" />
        </div>
      </motion.div>
    </section>
  );
}