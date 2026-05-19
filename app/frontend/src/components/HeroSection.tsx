const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stadium Background with CSS gradient fallback + Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#232323] to-[#0f0f23]">
        <img
          src="/assets/hero-bg-stadium.png"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#232323]/40 via-[#232323]/30 to-[#232323]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635cff]/10 via-transparent to-[#635cff]/5" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#635cff]/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#635cff]/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#635cff]/5 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo - larger */}
        <div className="mb-8">
          <img
            src="/assets/logo-white.png"
            alt="LegaBot"
            className="h-24 md:h-32 lg:h-36 mx-auto drop-shadow-[0_0_20px_rgba(99,92,255,0.4)]"
          />
        </div>

        {/* Headline with gradient text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
          <span className="block text-white">THE AUTONOMOUS</span>
          <span className="block text-gradient-violet">FOOTBALL UNIVERSE</span>
        </h1>

        {/* Subtext */}
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          The world's first fully AI-operated football ecosystem. Every match, every player, every story, autonomously generated and continuously operating in real time.
        </p>

        {/* Stats Row with glow effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-14">
          {[
            { value: "24/7", label: "Live Football" },
            { value: "∞", label: "Content Generation" },
            { value: "1B+", label: "Fan Scalability" },
            { value: "$3B+", label: "Revenue Potential" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card-strong rounded-xl p-5 hover:border-[#635cff]/50 transition-all duration-500 hover:transform hover:scale-105 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-violet group-hover:drop-shadow-[0_0_8px_rgba(99,92,255,0.5)] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-white text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://melenboim.com/wp-content/uploads/2026/05/legabot.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 gradient-violet text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#635cff]/30 hover:shadow-[#635cff]/50 animate-glow"
          >
            Request Investor Deck
          </a>
          <a
            href="#thesis"
            className="px-8 py-4 border border-[#635cff]/50 text-white font-semibold rounded-lg hover:bg-[#635cff]/10 hover:border-[#635cff] transition-all duration-300 hover:scale-105"
          >
            Explore Vision ↓
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
