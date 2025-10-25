"use client";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900 text-gray-200 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* === Left: Map with animated pin === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-indigo-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.012027028718!2d-84.32434992434769!3d33.78909913030912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506e3d3c9349f%3A0xa41e2b9d8b7e27a8!2sEmory%20University!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>

            {/* Animated pulse marker */}
            <motion.div
              className="absolute w-5 h-5 bg-pink-400 rounded-full top-[45%] left-[48%]"
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.9, 0.3, 0.9],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* === Right: Info Section === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-bold text-white mb-6">Visit Us</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-indigo-300 mb-2">
                Location
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Emory University <br />
                36 Eagle Row <br />
                Atlanta, GA 30322-2470
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-indigo-300 mb-2">
                Contact
              </h4>
              <p className="text-gray-300 leading-relaxed">
                <motion.a
                //   href="mailto:pwolff@emory.edu"
                  whileHover={{ color: "#a78bfa" }}
                  className="block font-medium hover:text-indigo-300 transition"
                >
                  pwolff@emory.edu
                </motion.a>
                <motion.a
                //   href="tel:4047277458"
                  whileHover={{ color: "#a78bfa" }}
                  className="block mt-1 hover:text-indigo-300 transition"
                >
                  Tel: 404-727-7458
                </motion.a>
              </p>
            </div>

            <motion.a
              href="https://www.emory.edu/home/index.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition"
            >
              Visit Emory →
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* === Subtle footer text === */}
      <div className="mt-16 border-t border-indigo-800/40 pt-8 text-center text-gray-400 text-sm">
        © 2025 Language Biomarker Lab · Emory University
      </div>

      {/* === Floating background gradients === */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full opacity-10 blur-3xl top-[-100px] left-[-100px]"
        animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full opacity-10 blur-3xl bottom-[-150px] right-[-120px]"
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
