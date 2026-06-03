export default function StoryIntro() {
  return (
    <section className="bg-black text-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Label */}
        <p className="text-white/70 uppercase tracking-[0.4em] text-sm mb-6">
          Our Story
        </p>

        {/* Headline */}
        <h2 className="luxury-heading text-5xl md:text-7xl font-light mb-10">
          Born From
          <br />
          A Simple Belief
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-5xl mx-auto">
          Forest Nosh was created to bridge the gap between exceptional ingredients
          and modern canine wellness.
        </p>

      </div>
    </section>
  );
}