const GlobalScaleSection = () => {
  const metrics = [
    { value: "12", label: "Matches Today" },
    { value: "4", label: "Live Now" },
    { value: "12,842", label: "AI Agents Active" },
    { value: "8,736", label: "Decisions / Sec" },
    { value: "2.4M", label: "Data Points / Sec" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#635cff]/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="reveal-scale perspective-container">
            <div className="tilt-card relative">
              <img
                src="/assets/visual-monetization.png"
                alt="Global Scale Operations"
                className="presentation-img w-full"
              />
              <div className="absolute -inset-6 bg-[#635cff]/8 rounded-3xl blur-3xl -z-10 animate-glow" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal-right">
            <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
              Global Scale
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              BUILT FOR<br />
              <span className="text-gradient-violet">BILLIONS</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-8 font-light leading-relaxed">
              The infrastructure scales infinitely. No stadiums, no broadcast trucks, no physical limitations. Just pure AI-powered football entertainment reaching every corner of the globe.
            </p>

            {/* Metrics */}
            <div className="space-y-3 stagger-children reveal">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="glass-card rounded-lg p-4 flex items-center justify-between hover:border-[#635cff]/40 transition-all duration-300 group"
                >
                  <span className="text-[#a3a3a3] text-sm font-medium">{metric.label}</span>
                  <span className="text-2xl font-bold text-violet group-hover:drop-shadow-[0_0_8px_rgba(99,92,255,0.5)] transition-all">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-3 glass-card-strong rounded-lg p-4 reveal">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[#ebebed] font-medium text-sm">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalScaleSection;