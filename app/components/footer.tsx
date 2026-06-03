export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Philosophy */}
        <div className="text-center mb-24">
          <p className="text-white/30 uppercase tracking-[0.4em] text-xs mb-6">
            Our Philosophy
          </p>

          <h2 className="luxury-heading text-5xl md:text-7xl font-light text-white mb-8">
            Nourishment Inspired
            <br />
            By Nature
          </h2>

          
        </div>

      
{/* Footer Content */}
<div className="border-t border-white/10 pt-16 mt-24">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

    {/* Contact */}
    <div>
      <h3 className="text-white tracking-[0.2em] uppercase text-sm mb-6">
        Contact
      </h3>

      <div className="space-y-2 text-white/50 text-sm">
        <p>care@forestnosh.com</p>
      </div>
    </div>

    {/* Follow */}
    <div>
      <h3 className="text-white tracking-[0.2em] uppercase text-sm mb-6">
        Follow Us
      </h3>

      <div className="space-y-2 text-white/50 text-sm">
        <a
          href="https://instagram.com/forestnosh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Instagram
        </a>

        <br />

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Facebook
        </a>
      </div>
    </div>

    {/* Reviews */}
    <div>
      <h3 className="text-white tracking-[0.2em] uppercase text-sm mb-6">
        Customer Reviews
      </h3>

      <p className="text-white/50 text-sm leading-relaxed">
        Trusted by dog owners who believe nutrition
        should be as natural as the bond they share
        with their companions.
      </p>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 mt-16 pt-8 text-center">
    <p className="text-white/30 text-sm">
      © 2026 Forest Nosh. All Rights Reserved.
    </p>
  </div>

</div>
      </div>
    </footer>
  );
}