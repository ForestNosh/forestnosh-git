export default function CollectionIntro() {
  return (
    <section className="relative py-48 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          brightness-125
          contrast-125
          saturate-125
        "
      >
        <source src="/videos/dv2.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-8">

        
        <p   className="
    text-white/95
    uppercase
    tracking-[0.35em]
    text-sm
    font-medium
    mb-8
  "
  style={{
    textShadow: "0 0 15px rgba(255,255,255,0.3)",
  }}
>
  The Collection
        </p>

        <h2 className="text-5xl md:text-7xl font-light tracking-[0.12em] uppercase text-white mb-10">
          Crafted With
          <br />
          Purpose
        </h2>

        <p className="max-w-4xl mx-auto text-white/95 text-2xl md:text-4xl font-light leading-relaxed">
          Every ingredient has a purpose.
          <br />
          Every recipe tells a story.
        </p>

      </div>

    </section>
  );
}