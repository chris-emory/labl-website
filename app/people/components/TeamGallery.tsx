"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamGallery() {
  const photos = [
    { src: "/team-dinner.jpg", alt: "Lab Dinner Gathering" },
    { src: "/team-outdoor.jpg", alt: "Spring Group Photo" },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-indigo-50/50 to-purple-50 overflow-hidden">
      {/* === Background Aurora Glow === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] blur-3xl animate-float-slower" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            whileHover={{
              scale: 1.03,
              rotate: i === 0 ? -0.5 : 0.5,
            }}
            className="relative group overflow-hidden rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.08)] 
              hover:shadow-[0_12px_60px_rgba(99,102,241,0.25)]
              transition-all duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/60 backdrop-blur-xl border border-white/40"
          >
            {/* === Gradient Edge Border Glow === */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-400/10 via-purple-400/10 to-pink-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />

            {/* === Team Photo === */}
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={500}
              className="object-cover w-full h-[340px] md:h-[360px] rounded-[2rem] transition-transform duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
            />

            {/* === Soft Light Overlay === */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />

            {/* === Caption === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-6 left-0 right-0 text-center text-white font-medium text-lg drop-shadow-lg tracking-wide"
            >
              {photo.alt}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
