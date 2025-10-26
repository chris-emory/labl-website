"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    { width: number; height: number; top: string; left: string }[]
  >([]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse tracking for halo
  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Generate floating particles (client only)
  useEffect(() => {
    const arr = Array.from({ length: 30 }, () => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(arr);
  }, []);

  // Handle card tilt effect
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * -20;
    setTilt({ x, y });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0323] via-[#110a3a] to-[#1c0e54] text-gray-200 py-24">
      {/* === Aurora Gradient Waves === */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-700/40 via-purple-700/20 to-transparent blur-3xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(147,51,234,0.15), rgba(79,70,229,0.15), rgba(236,72,153,0.15))",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Floating Particles === */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 rounded-full blur-[1px]"
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* === Main Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-14">
        {/* === Left: Map === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.012027028718!2d-84.32434992434769!3d33.78909913030912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506e3d3c9349f%3A0xa41e2b9d8b7e27a8!2sEmory%20University!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="260"
            loading="lazy"
            allowFullScreen
            className="rounded-3xl"
          ></iframe>

          {/* Soft glow layer (click-through) */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-indigo-400/10 via-transparent to-transparent pointer-events-none"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* === Center: Logo + Text === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 text-center relative"
        >
          {/* Halo following cursor */}
          <motion.div
            className="absolute -inset-40 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0%,_transparent_70%)] pointer-events-none"
            style={{
              transform: `translate(${mouse.x * 0.02}px, ${mouse.y * 0.02}px)`,
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-4"
          >
            <img
              src="/labl-logo.png"
              alt="LaBL Logo"
              className="w-18 h-18 drop-shadow-[0_0_30px_rgba(147,197,253,0.7)]"
            />
          </motion.div>

          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            Language Biomarker Lab · Emory University
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm mb-6 max-w-sm mx-auto">
            Advancing the science of language as a window into the mind.  
            Combining AI, psychology, and linguistics to unlock insights into cognition and mental health.
          </p>

          <div className="flex justify-center gap-6 text-gray-300 mb-5">
            <Link href="/research" className="hover:text-indigo-400 transition">
              Research
            </Link>
            <Link href="/publications" className="hover:text-indigo-400 transition">
              Publications
            </Link>
            <Link href="/people" className="hover:text-indigo-400 transition">
              Team
            </Link>
          </div>
        </motion.div>

        {/* === Right: Visit Card (tilt + hover glow) === */}
        <motion.div
          onMouseMove={handleTilt}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          animate={{ rotateX: tilt.y, rotateY: tilt.x }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 60px rgba(168,85,247,0.4)",
          }}
          className="w-full md:w-1/3 relative p-[2px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-2xl"
        >
          <div className="bg-[#0c0530]/80 backdrop-blur-xl rounded-3xl p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>

            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-semibold text-indigo-300 mb-1">Location</h4>
                <p className="text-gray-300">
                  Emory University <br />
                  36 Eagle Row <br />
                  Atlanta, GA 30322-2470
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-300 mb-1">Contact</h4>
                <p>
                  <a className="hover:text-indigo-400 transition block">
                    pwolff@emory.edu
                  </a>
                  <a className="hover:text-indigo-400 transition">
                    Tel: 404-727-7458
                  </a>
                </p>
              </div>
              <a
                href="https://www.emory.edu/home/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition"
              >
                Visit Emory →
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Footer Copyright === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-16 text-gray-500 text-sm"
      >
        © 2025 Language Biomarker Lab · Emory University
      </motion.div>
    </footer>
  );
}
