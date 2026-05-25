const FooterSection = () => {
  const socials = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@legabot",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/legabot/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "X",
      url: "https://x.com/legabotai",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#635cff]/8 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* CTA Section */}
        <div className="reveal">
          <img
            src="/assets/logo-violet.png"
            alt="LegaBot"
            className="h-12 mx-auto mb-8 animate-float"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
            JOIN THE<br />
            <span className="text-gradient-violet">REVOLUTION</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg mb-10 font-light max-w-2xl mx-auto">
            Be part of the world's first autonomous football universe. Whether you're an investor, partner, or fan, the future of sports starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:hello@lega.bot"
              className="px-8 py-4 gradient-violet text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#635cff]/30 hover:shadow-[#635cff]/50 animate-glow"
            >
              Contact for Investment
            </a>
            <a
              href="mailto:hello@lega.bot"
              className="px-8 py-4 border border-[#635cff]/50 text-white font-semibold rounded-lg hover:bg-[#635cff]/10 hover:border-[#635cff] transition-all duration-300 hover:scale-105"
            >
              Partnership Inquiries
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-5 mb-16">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card-strong flex items-center justify-center text-[#ebebed] hover:text-[#635cff] hover:border-[#635cff]/60 transition-all duration-300 hover:scale-110 text-lg"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="reveal mb-12 inline-flex items-center justify-center gap-3 rounded-lg border border-[#635cff]/50 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-105 hover:border-[#635cff] hover:bg-[#635cff]/10"
        >
          <span aria-hidden="true">↑</span>
          Back to top
        </button>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a
            href="https://lega.bot/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] text-sm hover:text-[#635cff] transition-colors duration-300"
          >
            Terms of Use
          </a>
          <a
            href="https://lega.bot/policies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] text-sm hover:text-[#635cff] transition-colors duration-300"
          >
            Policies
          </a>
          <a
            href="https://lega.bot/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] text-sm hover:text-[#635cff] transition-colors duration-300"
          >
            Cookie Policy
          </a>
          <a
            href="https://hello.lega.bot/"
            className="text-[#a3a3a3] text-sm hover:text-[#635cff] transition-colors duration-300"
          >
            Investors
          </a>
          <a
            href="https://pro.lega.bot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] text-sm hover:text-[#635cff] transition-colors duration-300"
          >
            Partnerships
          </a>
        </div>

        {/* Footer bottom */}
        <div className="text-[#a3a3a3] text-sm">
          <p>© 2026 LegaBot. The Autonomous Football Universe.</p>
          <p className="mt-2 text-[#635cff]/60">Investor Presentation 2026</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
