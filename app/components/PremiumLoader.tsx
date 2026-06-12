"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function PremiumLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
  logoRef.current,
  {
    opacity: 0,
    scale: 0.8,
    filter: "blur(8px)",
  },
  {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.5,
    ease: "power2.out",
  }
)
.to({}, { duration: 1.0 })
.to(loaderRef.current, {
  yPercent: -100,
  duration: 0.2,
    ease: "power3.inOut",
});
}, []); 

return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
    >
      <div
        ref={logoRef}
        className="flex flex-col items-center text-center"
      >
        <Image
          src="/images/ForestNosh_Logo-TM_5June2026.png"
          alt="Forest Nosh"
          width={550}
          height={550}
          priority
          className="w-[420px] md:w-[550px] h-auto"
        />

        <p
          className="
            mt-8
            text-white/70
            uppercase
            tracking-[0.4em]
            text-xs
            md:text-sm
          "
        >
          Premium Nutrition For Dogs
        </p>
      </div>
    </div>
  );
}