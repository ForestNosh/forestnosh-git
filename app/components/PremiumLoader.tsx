"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function PremiumLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      taglineRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
      }
    )
      .to({}, { duration: 1.0 })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
      });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/ForestNosh_Logo-TM_5June2026.png"
          alt="Forest Nosh"
          width={550}
          height={550}
          priority
          className="w-[420px] md:w-[550px] h-auto"
        />

        <p
          ref={taglineRef}
          className="
            mt-8
            text-white
            uppercase
            tracking-[0.25em]
            text-sm
            md:text-lg
            font-extrabold
          "
        >
          Premium Nutrition For Dogs
        </p>
      </div>
    </div>
  );
}