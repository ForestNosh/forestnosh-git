"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/dogeye2mobile.jpeg"
          alt="Dog Eyes"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/dogeye2.jpeg"
          alt="Dog Eyes"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Logo */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/ForestNosh_Logo-TM_5June2026.png"
          alt="Forest Nosh"
          width={500}
          height={400}
          priority
          className="w-[220px] md:w-[500px] h-auto"
        />
      </motion.div>

      {/* Enter Button */}
      <motion.div
        className="relative z-10 mt-10"
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
      >
        <Link
          href="/experience"
          className="
            inline-block
            border
            border-white/50
            px-12
            py-4
            text-white
            text-xs
            uppercase
            tracking-[0.5em]
            transition-all
            duration-700
            hover:bg-white
            hover:text-black
            hover:scale-105
          "
        >
          ENTER
        </Link>
      </motion.div>

    </main>
  );
}