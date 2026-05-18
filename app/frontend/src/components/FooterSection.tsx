const FooterSection = () => {
  const socials = [
    { name: "X", url: "https://x.com/legabotai", icon: "𝕏" },
    { name: "Instagram", url: "https://www.instagram.com/legabot/", icon: "📷" },
    { name: "TikTok", url: "https://www.tiktok.com/@legabot", icon: "♪" },
    { name: "YouTube", url: "https://www.youtube.com/@legabotai", icon: "▶" },
  ];

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
              href="mailto:hello@liga.bot"
              className="px-8 py-4 gradient-violet text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#635cff]/30 hover:shadow-[#635cff]/50 animate-glow"
            >
              Contact for Investment
            </a>
            <a
              href="mailto:hello@liga.bot"
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

        {/* Contact Info */}
        <div className="reveal glass-card-strong rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-[#635cff] font-semibold text-sm uppercase tracking-wider mb-2">Founder</div>
              <div className="text-[#ebebed] font-medium">Tal Melenboim</div>
              <div className="text-[#a3a3a3] text-sm">Founder & Visionary</div>
            </div>
            <div>
              <div className="text-[#635cff] font-semibold text-sm uppercase tracking-wider mb-2">Email</div>
              <a href="mailto:invest@lega.bot" className="text-[#ebebed] font-medium hover:text-[#635cff] transition-colors">
                invest@lega.bot
              </a>
            </div>
            <div>
              <div className="text-[#635cff] font-semibold text-sm uppercase tracking-wider mb-2">Website</div>
              <a href="https://lega.bot" className="text-[#ebebed] font-medium hover:text-[#635cff] transition-colors">
                lega.bot
              </a>
            </div>
          </div>
        </div>

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