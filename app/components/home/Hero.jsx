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
      {/* STATIC BACKGROUND FOR MOBILE */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <Image
          src="/background/backg1.jpeg"
          alt="SoundBast Events"
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* ANIMATED BACKGROUND FOR DESKTOP */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="flex h-full w-[200%]"
        >
          {[...backgroundImages, ...backgroundImages].map(
            (image, index) => (
              <div
                key={index}
                className="relative h-full min-w-[33.333%]"
              >
                <Image
                  src={image}
                  alt="SoundBast Events"
                  fill
                  quality={70}
                  sizes="33vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/75" />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* MAIN OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* LIGHT EFFECTS */}
      <div className="absolute left-0 top-0 z-10 hidden h-[350px] w-[350px] bg-[#6c2bd9]/20 blur-[120px] md:block" />

      <div className="absolute bottom-0 right-0 z-10 hidden h-[350px] w-[350px] bg-[#ffc300]/20 blur-[120px] md:block" />

      {/* GRID */}
      <div className="absolute inset-0 z-10 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center px-6 pt-28 pb-14">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* BADGE */}
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffc300]" />

              <p className="text-xs uppercase tracking-[4px] text-gray-300 sm:text-sm">
                Auditorium • Events • Venue Hire
              </p>
            </div>

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
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
              SoundBast Events is a modern auditorium and
              event venue in Dubai designed for conferences,
              concerts, private celebrations, corporate
              gatherings, workshops, launches, and live
              productions.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              
              {/* CONTACT BUTTON */}
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-7 py-3.5 text-sm font-black text-black shadow-[0_0_40px_rgba(255,195,0,0.2)] transition duration-300 sm:px-9 sm:py-4 sm:text-base"
                >
                  Book Your Event

                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </motion.div>
              </Link>

              {/* ABOUT BUTTON */}
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black sm:px-9 sm:py-4 sm:text-base"
                >
                  <FaPlay />

                  Explore Venue
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL - DESKTOP ONLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            className="relative hidden items-center justify-center lg:flex"
          >
            {/* MAIN IMAGE */}
            <div className="relative h-[500px] w-[410px] overflow-hidden rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(255,195,0,0.1)]">
              <Image
                src="/auditorium/auditorium.jpeg"
                alt="SoundBast Auditorium"
                fill
                quality={75}
                sizes="410px"
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20 p-2">
          <div className="h-2 w-2 rounded-full bg-[#ffc300]" />
        </div>
      </div>
    </section>
  );
}