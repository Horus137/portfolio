"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I’m <span className="text-white">João Vale</span>
        </h1>

        <p className="mb-10 text-lg text-neutral-400 md:text-xl">
          Computer Science student focused on building clean, scalable and
          impactful software.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="rounded-lg border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
