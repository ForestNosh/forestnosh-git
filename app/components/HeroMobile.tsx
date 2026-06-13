"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const slides = [
  {
    image: "/images/D01mobile.jpeg",
    title1: "For Those Who Give Us Everything",
    title2: "Deserve Extraordinary Nutrition",
    description:
      "At Forest Nosh, we celebrate the bond between humans and dogs through nutrition inspired by nature and refined by science.",
  },
  {
    image: "/images/DO9.jpeg",
    title1: "Para Quienes Nos Lo Dan Todo",
    title2: "Merecen una Nutrición Extraordinaria",
    description:
      "En Forest Nosh, celebramos el vínculo entre las personas y sus perros a través de una nutrición inspirada en la naturaleza y perfeccionada por la ciencia.",
  },
  {
    image: "/images/martha1.jpeg",
    title1: "우리에게 모든 것을 내어주는 존재를 위해",
    title2: "특별한 영양을 선사합니다",
    description:
      "Forest Nosh는 자연에서 영감을 얻고 과학으로 정교하게 완성한 영양을 통해 사람과 반려견 사이의 유대를 기념합니다.",
  },
  {
    image: "/images/n5.jpeg",
    title1: "Für diejenigen, die uns alles geben",
    title2: "verdienen außergewöhnliche Ernährung",
    description:
      "Bei Forest Nosh feiern wir die besondere Bindung zwischen Mensch und Hund durch Ernährung, die von der Natur inspiriert und durch die Wissenschaft verfeinert wird.",
  },
];

const SLIDE_DURATION = 7000;

export default function HeroMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

      setTypingKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={slides[currentSlide].image}
        alt="Forest Nosh"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="absolute bottom-24 left-6 right-6 z-10">
        <p className="text-white/70 uppercase tracking-[0.3em] text-xs mb-4">
          Our Philosophy
        </p>

        <h1
          className="text-4xl font-light text-white leading-tight min-h-[120px]"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          {slides[currentSlide].title1}
          <br />
          {slides[currentSlide].title2}
        </h1>

        <div
          className="mt-8 text-lg text-white/80 leading-relaxed min-h-[140px]"
          style={{
            textShadow: "0 2px 15px rgba(0,0,0,0.8)",
          }}
        >
          <TypeAnimation
            key={typingKey}
            sequence={[slides[currentSlide].description]}
            speed={55}
            cursor={true}
            repeat={0}
          />
        </div>
      </div>
    </section>
  );
}