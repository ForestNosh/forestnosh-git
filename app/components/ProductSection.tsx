export default function ProductSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto -mt-30">

      {/* Future Product */}
      <div className="text-center transition-all duration-500">

        <div
          className="
            border
            border-white/15
            rounded-[32px]
            p-10
            bg-white/10
            backdrop-blur-md
            shadow-[0_0_40px_rgba(255,255,255,0.03)]
            hover:bg-white/15
            hover:border-white/30
            hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            transition-all
            duration-500
          "
        >

          <div
            className="
              w-24
              h-24
              mx-auto
              mb-8
              rounded-full
              border
              border-white/20
              bg-white/5
              flex
              items-center
              justify-center
            "
          >
            <span className="text-5xl text-white/50 font-thin">
              +
            </span>
          </div>

          <h3 className="text-lg tracking-[0.25em] uppercase text-white/90 mb-3">
            Coming Soon
          </h3>

          <p className="text-xs tracking-[0.35em] uppercase text-white/60">
            Product
          </p>

        </div>

      </div>

      {/* Main Product */}
      <div className="text-center scale-110 md:scale-125 relative z-10">

        <div className="relative">
          <img
            src="/images/ForestNosh_Logo-TM_5June2026.png"
            alt="Forest Nosh"
            className="mx-auto max-h-[500px] object-contain"
          />
        </div>

        <p className="mt-4 text-white/70 tracking-[0.2em] uppercase text-xs">
          Premium Nutrition For Dogs
        </p>

      </div>

      {/* Future Product */}
      <div className="text-center transition-all duration-500">

        <div
          className="
            border
            border-white/15
            rounded-[32px]
            p-10
            bg-white/10
            backdrop-blur-md
            shadow-[0_0_40px_rgba(255,255,255,0.03)]
            hover:bg-white/15
            hover:border-white/30
            hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            transition-all
            duration-500
          "
        >

          <div
            className="
              w-24
              h-24
              mx-auto
              mb-8
              rounded-full
              border
              border-white/20
              bg-white/5
              flex
              items-center
              justify-center
            "
          >
            <span className="text-5xl text-white/50 font-thin">
              +
            </span>
          </div>

          <h3 className="text-lg tracking-[0.25em] uppercase text-white/90 mb-3">
            Coming Soon
          </h3>

          <p className="text-xs tracking-[0.35em] uppercase text-white/60">
            Product
          </p>

        </div>

      </div>

    </div>
  );
}