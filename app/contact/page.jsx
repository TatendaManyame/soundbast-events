"use client";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_n5om61b",
        "template_zenkyll",
        {
          from_name: formData.name,
          from_email: formData.email,
          event_type: formData.eventType,
          message: formData.message,
        },
        "5zYTDjNIkNIVSE5AX"
      );

      setSuccess("Inquiry sent successfully.");

      setFormData({
        name: "",
        email: "",
        eventType: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/background/backg1.jpeg"
          alt="SoundBast Venue"
          className="h-full w-full object-cover opacity-[0.12]"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#050505]/90 to-[#050505]" />

        <div className="absolute left-[-100px] top-0 h-[400px] w-[400px] rounded-full bg-[#6c2bd9]/20 blur-[140px]" />

        <div className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-[#ffc300]/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#ffc300]" />

            <span className="text-[11px] uppercase tracking-[4px] text-[#ffc300]">
              SoundBast Events
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Let&apos;s Create
            <span className="gradient-text block">
              Exceptional Events
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Contact SoundBast for auditorium bookings,
            conferences, productions, launches,
            private events, and luxury experiences in Dubai.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="grid gap-8 lg:grid-cols-[1fr_0.9fr]"
        >
          {/* LEFT */}
          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-3xl sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffc300]/5 to-[#6c2bd9]/10" />

            <div className="relative z-10">
              <div className="mb-12">
                <p className="mb-4 text-sm uppercase tracking-[5px] text-[#ffc300]">
                  Contact Information
                </p>

                <h3 className="text-3xl font-black leading-tight sm:text-5xl">
                  Premium Venue
                  <span className="gradient-text block">
                    & Event Space
                  </span>
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                  SoundBast Auditorium is designed for
                  conferences, concerts, launches,
                  private events, productions, and
                  luxury event experiences in Dubai.
                </p>
              </div>

              {/* PHONE */}
              <div className="space-y-5">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-5 rounded-[28px] border border-white/10 bg-black/30 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffc300] to-[#ffdd66] text-black">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gray-500">
                      Phone
                    </p>

                    <h4 className="mt-2 text-xl font-bold">
                      +971 4 321 9220
                    </h4>
                  </div>
                </motion.div>

                {/* EMAIL */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-5 rounded-[28px] border border-white/10 bg-black/30 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6c2bd9] to-[#9b6cff] text-black">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[3px] text-gray-500">
                      Email
                    </p>

                    <h4 className="mt-2 break-all text-xl font-bold">
                      info@soundbastevents.ae
                    </h4>
                  </div>
                </motion.div>

                {/* LOCATION */}
                <motion.a
                  whileHover={{ y: -4 }}
                  href="https://maps.google.com/?q=Street+5B+WH42+Al+Quoz+Industrial+Area+1+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-[28px] border border-white/10 bg-black/30 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffc300] to-[#6c2bd9] text-black">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gray-500">
                      Venue Location
                    </p>

                    <h4 className="mt-2 text-lg font-bold sm:text-2xl">
                      Street 5B - WH42
                      <br />
                      Al Quoz Industrial Area 1
                      <br />
                      Dubai, UAE
                    </h4>
                  </div>
                </motion.a>
              </div>

              {/* SOCIALS */}
              <div className="mt-12">
                <p className="mb-5 text-xs uppercase tracking-[4px] text-gray-500">
                  Follow SoundBast
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* WhatsApp */}
                  <motion.a
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    href="https://wa.me/97143219220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-lg backdrop-blur-xl transition duration-500 hover:text-black"
                  >
                    <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition duration-500 group-hover:scale-100" />

                    <div className="relative z-10">
                      <FaWhatsapp />
                    </div>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    href="https://www.instagram.com/sound_bast_events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-lg backdrop-blur-xl transition duration-500 hover:text-black"
                  >
                    <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition duration-500 group-hover:scale-100" />

                    <div className="relative z-10">
                      <FaInstagram />
                    </div>
                  </motion.a>

                  {/* TikTok */}
                  <motion.a
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    href="https://www.tiktok.com/@soundbast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-lg backdrop-blur-xl transition duration-500 hover:text-black"
                  >
                    <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] transition duration-500 group-hover:scale-100" />

                    <div className="relative z-10">
                      <FaTiktok />
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative mt-12 overflow-hidden rounded-[30px] border border-white/10">
                <img
                  src="/auditorium/audi2.jpeg"
                  alt="SoundBast Auditorium"
                  className="h-[260px] w-full object-cover transition duration-[2500ms] hover:scale-110 sm:h-[320px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <p className="text-xs uppercase tracking-[4px] text-[#ffc300]">
                    SoundBast Auditorium
                  </p>

                  <h4 className="mt-2 text-2xl font-black sm:text-4xl">
                    Venue
                    <span className="block">
                      & Event Destination
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-3xl sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6c2bd9]/10 to-[#ffc300]/5" />

            <div className="relative z-10">
              <div className="mb-10">
                <p className="mb-4 text-sm uppercase tracking-[5px] text-[#ffc300]">
                  Event Inquiry
                </p>

                <h3 className="text-3xl font-black sm:text-5xl">
                  Book Your
                  <span className="gradient-text block">
                    Next Experience
                  </span>
                </h3>

                <p className="mt-6 text-base leading-8 text-gray-400">
                  Fill in the details below and our team
                  will contact you regarding your event.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-[#ffc300]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-[#6c2bd9]"
                />

                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Event Type"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-[#ffc300]"
                />

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  required
                  className="w-full rounded-3xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-[#6c2bd9]"
                />

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#ffc300] to-[#6c2bd9] px-6 py-5 text-lg font-black text-black shadow-[0_0_50px_rgba(255,195,0,0.2)] transition"
                >
                  {loading ? "Sending..." : "Send Inquiry"}

                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* SUCCESS */}
                {success && (
                  <p className="pt-2 text-center text-sm text-[#ffc300]">
                    {success}
                  </p>
                )}
              </form>

              {/* MAP */}
              <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=Street%205B%20WH42%20Al%20Quoz%20Industrial%20Area%201%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  className="grayscale"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}