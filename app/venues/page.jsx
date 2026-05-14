"use client";

import { motion } from "framer-motion";
import {
  FaPlay,
  FaInstagram,
  FaExpand,
} from "react-icons/fa";

const galleryItems = [
  {
    type: "image",
    src: "/background/backg1.jpeg",
    title: "Auditorium Experience",
  },
  {
    type: "image",
    src: "/background/backg2.jpeg",
    title: "Corporate Event Setup",
  },
  {
    type: "image",
    src: "/background/backg3.jpeg",
    title: "Stage & Lighting Production",
  },
  {
    type: "image",
    src: "/background/backg1.jpeg",
    title: "Live Event Experience",
  },
  {
    type: "image",
    src: "/background/backg2.jpeg",
    title: "Conference & Venue Setup",
  },
  {
    type: "image",
    src: "/background/backg3.jpeg",
    title: "Premium Event Atmosphere",
  },
];
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-36 px-6 bg-[#050505] overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6c2bd9]/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffc300]/20 blur-[150px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[6px] text-[#ffc300] mb-5">
            Event Showcase
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Captured
            <span className="block gradient-text">
              Luxury Experiences
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8 mt-8">
            Explore immersive moments, premium event productions,
            luxury lighting, sound systems, and unforgettable experiences
            created by SoundBast Events.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                rotateX: 3,
                rotateY: 3,
              }}
              className="group relative h-[500px] overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* MEDIA */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-[2500ms]"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-[2500ms]"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#ffc300]/10 to-[#6c2bd9]/10" />

              {/* FLOATING LIGHT */}
              <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#ffc300]/10 blur-[90px] group-hover:scale-150 transition duration-700" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center"
                  >
                    {item.type === "video" ? (
                      <FaPlay />
                    ) : (
                      <FaExpand />
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ rotate: 12 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center"
                  >
                    <FaInstagram />
                  </motion.div>
                </div>

                <h3 className="text-3xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                  SoundBast Events Production
                </p>
              </div>

              {/* BOTTOM ANIMATION BAR */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-[#ffc300] to-[#6c2bd9]"
              />

              {/* 3D BORDER */}
              <div className="absolute inset-0 rounded-[35px] border border-transparent group-hover:border-[#ffc300]/20 transition duration-700" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM FEATURE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-28 overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          {/* VIDEO BACKGROUND */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="https://videos.pexels.com/video-files/3195650/3195650-uhd_2560_1440_25fps.mp4" />
          </video>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div className="relative z-10 py-28 px-10 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-black leading-tight"
            >
              Every Event
              <span className="block gradient-text">
                Becomes An Experience
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="max-w-3xl mx-auto text-gray-300 text-lg leading-8 mt-8"
            >
              Combining luxury aesthetics, immersive production,
              premium sound systems, and unforgettable moments.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] text-black font-black text-lg shadow-[0_0_60px_rgba(255,195,0,0.3)]"
            >
              Explore More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}