const ThesisSection = () => {
  const points = [
    "Matches never stop",
    "Every player evolves independently",
    "Storylines emerge naturally",
    "Fans experience live competition 24/7",
    "Content scales infinitely",
    "Revenue surfaces are fully programmable",
  ];

  return (
    <section id="thesis" className="py-24 md:py-32 px-6 relative particle-bg">
      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="reveal-left">
            <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
              The Core Thesis
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
              OPERATED,<br />
              NOT JUST{" "}
              <span className="text-gradient-violet">GENERATED.</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-8 font-light leading-relaxed">
              Every player movement, tactical adjustment, and match event is autonomously computed in real time by interconnected AI agents.
            </p>

            {/* Points with stagger animation */}
            <div className="space-y-3 stagger-children reveal">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="glass-card rounded-lg p-4 flex items-center gap-4 hover:border-[#635cff]/40 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#635cff] flex-shrink-0 group-hover:animate-pulse-violet" />
                  <span className="text-[#ebebed] font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Presentation Image */}
          <div className="reveal-right perspective-container">
            <div className="tilt-card">
              <div className="relative">
                <img
                  src="/assets/visual-thesis.png"
                  alt="AI Orchestration Engine"
                  className="presentation-img w-full"
                />
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-[#635cff]/10 rounded-2xl blur-2xl -z-10" />
              </div>
            </div>

            <div className="mt-8 glass-card-strong rounded-xl p-6 animate-border-glow">
              <p className="text-[#a3a3a3] text-sm italic">
                This is not gaming.<br />
                This is <span className="text-violet font-semibold">autonomous sports entertainment.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;