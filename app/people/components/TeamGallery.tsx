"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamGallery() {
  const photos = [
    { src: "/team-dinner.jpg", alt: "Lab dinner gathering" },
    { src: "/team-outdoor.jpg", alt: "Spring group photo" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 1 }}
            className="relative group overflow-hidden rounded-3xl shadow-xl border border-indigo-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={500}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[1200ms]"
            />
            {/* Soft overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
