"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EquipmentSection() {
  const equipment = [
    {
      title: "Microway High-Performance Compute Server",
      description: `A powerhouse for large-scale AI research, featuring dual CPUs, 80 logical cores, 512GB of RAM, and 20TB of local storage. With four NVIDIA A100 GPUs (80GB each) connected via InfiniBand, it delivers over 1 petaflop of deep learning performance-ideal for training and running state-of-the-art language models.`,
      image: "/equip-server.jpg",
    },
    {
      title: "NVIDIA A100 GPUs (x4)",
      description: `Each 80GB A100 GPU is optimized for AI workloads, enabling high-throughput model training, fine-tuning, and real-time inference in large language model development.`,
      image: "/equip-gpu.jpg",
    },
    {
      title: "Force Dimension Omega.3 Haptic Device",
      description: `A high-precision force-feedback system used for research in perception and sensorimotor interaction. Its fine control enables detailed studies of physical engagement and cognitive responses to force-based stimuli.`,
      image: "/equip-haptic.jpg",
    },
    {
      title: "Novint Falcon Controllers (x4)",
      description: `These compact haptic devices provide tactile feedback for experimental tasks involving motor control, decision-making, and user interaction-ideal for bridging AI and human behavior research.`,
      image: "/equip-controller.jpg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50/30 to-purple-50 py-24 px-6 md:px-20 overflow-hidden">
      {/* === Glowing gradient background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.2),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.2),transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* === Section Heading === */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Project Support & Research Infrastructure
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Empowering AI and cognitive science through cutting-edge compute, haptics, and sensorimotor research equipment.
        </p>

        {/* === Equipment Cards === */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {equipment.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/60 backdrop-blur-xl border border-indigo-100 rounded-3xl shadow-[0_0_25px_rgba(99,102,241,0.1)] hover:shadow-[0_0_40px_rgba(147,51,234,0.25)] transition-all duration-500 p-8 flex flex-col items-center text-center"
            >
            {/* Image with glowing outline */}
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden flex items-center justify-center">
                {/* Spinning Gradient Outline */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-[conic-gradient(from_0deg_at_50%_50%,#6366F1_0%,#A855F7_25%,#EC4899_50%,#A855F7_75%,#6366F1_100%)] animate-spin-slow opacity-80"></div>

                {/* Actual Image */}
                <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover w-[95%] h-[95%] rounded-full relative z-10 border border-white/70 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:scale-110 transition-transform duration-700"
                />

                {/* Inner highlight overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent" />
            </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Bottom soft glow === */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-indigo-100/70 to-transparent pointer-events-none" />
    </section>
  );
}
