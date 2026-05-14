"use client";

import { motion } from "framer-motion";

import {
  FaVolumeUp,
  FaLightbulb,
  FaBuilding,
  FaGlassCheers,
  FaBroadcastTower,
  FaVideo,
  FaHotel,
  FaUsers,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaMicrophone,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHotel />,
    title: "Auditorium Venue Hire",
    desc: "A modern fully-equipped auditorium venue with seating capacity for up to 350 guests, ideal for conferences, seminars, launches, performances, graduations, and live events.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Boardroom & Meeting Space",
    desc: "Professional boardroom facilities accommodating up to 30 guests, perfect for executive meetings, workshops, presentations, training sessions, and private business events.",
  },
  {
    icon: <FaVolumeUp />,
    title: "Professional Sound Systems",
    desc: "High-quality audio systems designed for conferences, live performances, corporate functions, weddings, and private events.",
  },
  {
    icon: <FaLightbulb />,
    title: "Lighting & Visual Setup",
    desc: "Creative stage lighting, ambient venue lighting, LED displays, and visual production tailored to your event requirements.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Events",
    desc: "Professional event solutions for conferences, networking sessions, business launches, annual meetings, and company celebrations.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Private Events",
    desc: "From weddings and birthdays to gala dinners and celebrations, we help create memorable experiences for every occasion.",
  },
  {
    icon: <FaBroadcastTower />,
    title: "Live Event Production",
    desc: "Complete event production including staging, technical coordination, sound engineering, and event execution support.",
  },
  {
    icon: <FaVideo />,
    title: "LED Screens & Media",
    desc: "Large-format LED displays, presentation screens, live streaming setups, and media support for professional events.",
  },
];

const categories = [
  "Corporate Conferences",
  "Seminars",
  "Training Sessions",
  "Board Meetings",
  "Product Launches",
  "Graduation Ceremonies",
  "Private Events",
  "Live Productions",
  "Networking Events",
  "Business Workshops",
  "Award Ceremonies",
  "Venue Hire",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-24 px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-[#6c2bd9]/20 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-[#ffc300]/20 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#ffc300]" />

            <p className="text-xs uppercase tracking-[5px] text-[#ffc300]">
              Our Services
            </p>
          </div>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Professional Event
            <span className="gradient-text block">
              Venue & Production
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-400">
            SoundBast Events provides auditorium venue hire, boardroom
            spaces, sound systems, event production, and complete event
            management solutions for corporate and private events across
            Dubai and the UAE.
          </p>
        </motion.div>

        {/* EVENT CATEGORIES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 flex items-center gap-4">
            <FaCalendarAlt className="text-[#ffc300]" />

            <h3 className="text-3xl font-black">
              Events We Host
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc300]/10 to-[#6c2bd9]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center gap-3">
                  <FaCheckCircle className="text-[#ffc300]" />

                  <span className="text-sm uppercase tracking-[2px] text-white/90">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition duration-500"
            >
              {/* HOVER BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffc300]/10 to-[#6c2bd9]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* ICON */}
              <div className="relative z-10 mb-7 flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#ffc300] to-[#6c2bd9] text-3xl text-black shadow-[0_0_40px_rgba(255,195,0,0.25)]">
                {service.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-black leading-tight">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {service.desc}
                </p>
              </div>

              {/* FOOTER */}
              <div className="relative z-10 mt-8 flex items-center gap-3 text-sm uppercase tracking-[3px] text-[#ffc300]">
                Learn More

                <FaArrowRight />
              </div>

              {/* BORDER EFFECT */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* FEATURE VENUE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-28 overflow-hidden rounded-[40px] border border-white/10"
        >
          {/* IMAGE */}
          <div className="relative h-[650px] overflow-hidden">
          <img
  src="/services/services.jpeg"
  alt="SoundBast Auditorium"
  layout="fill"
  objectFit="cover"
  className="rounded-[40px]"
/>


            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-8 md:px-14">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">
                  <FaMicrophone className="text-[#ffc300]" />

                  <p className="text-xs uppercase tracking-[5px] text-[#ffc300]">
                    Auditorium & Venue Hire
                  </p>
                </div>

                <h3 className="text-5xl font-black leading-tight md:text-7xl">
                  Built For
                  <span className="gradient-text block">
                    Exceptional Events
                  </span>
                </h3>

                <p className="mt-8 text-lg leading-9 text-gray-300 md:text-xl">
                  Our modern venue spaces are designed for conferences,
                  seminars, graduations, private functions, performances,
                  and corporate events. Featuring professional production
                  support, advanced sound systems, LED visuals, and
                  flexible event spaces tailored to your requirements.
                </p>

               
                <button className="mt-10 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-8 py-4 font-bold text-black shadow-[0_0_50px_rgba(255,195,0,0.25)] transition duration-300 hover:scale-105">
                  Book Your Venue
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}