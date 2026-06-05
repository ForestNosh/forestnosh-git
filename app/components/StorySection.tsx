"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StorySectionProps = {
  title: string;
  description: string;
  video: string;
};

export default function StorySection({
  title,
  description,
  video,
}: StorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    gsap.fromTo(
      section.querySelector(".story-title"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      section.querySelector(".story-description"),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );


  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-125 saturate-125"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full px-10 md:px-20">
        <div className="flex justify-between items-center w-full">

          {/* LEFT SIDE */}
          <div className="max-w-2xl">

            <h2
              className="
                story-title
                text-3xl
                md:text-5xl
                lg:text-6xl
                font-extralight
                tracking-[0.03em]
                leading-tight
                text-white
                mb-8
              "
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              {title}
            </h2>

            <p
              className="
                story-description
                text-xl
                md:text-2xl
                font-extralight
                text-white/95
                leading-relaxed
                whitespace-pre-line
              "
              style={{
                textShadow: "0 3px 15px rgba(0,0,0,0.8)",
              }}
            >
              {description}
            </p>

          </div>

          

        </div>
      </div>
    </section>
  );
}