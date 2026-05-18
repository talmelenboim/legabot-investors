const LeagueSection = () => {
  const stats = [
    { value: "20", label: "Autonomous Clubs" },
    { value: "500+", label: "AI Players" },
    { value: "100%", label: "AI-Generated Broadcasts" },
    { value: "24/7", label: "Live Operations" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#635cff]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
            Functional Product Proof
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            AN ENTIRE LEAGUE.<br />
            <span className="text-gradient-violet">OPERATED BY AI.</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-3xl mx-auto mt-6 font-light">
            LegaBot is a live, end-to-end football ecosystem. Every match, every player, every decision, every story, autonomously generated and continuously operating.
          </p>
        </div>

        {/* Main presentation image - full width showcase */}
        <div className="reveal-scale mb-16">
          <div className="relative img-hover-zoom rounded-2xl overflow-hidden">
            <img
              src="/assets/visual-league.png"
              alt="LegaBot Full League Platform"
              className="w-full presentation-img"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/60 via-transparent to-transparent pointer-events-none" />
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#635cff]/5 rounded-2xl blur-xl -z-10" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children reveal">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card-strong rounded-xl p-6 text-center hover:scale-105 transition-all duration-500 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-violet group-hover:drop-shadow-[0_0_10px_rgba(99,92,255,0.5)] transition-all">
                {stat.value}
              </div>
              <div className="text-[#a3a3a3] text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12 reveal">
          <p className="text-violet font-semibold tracking-wider text-sm">
            100% AI-GENERATED MATCH • ZERO HUMAN INPUT
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeagueSection;