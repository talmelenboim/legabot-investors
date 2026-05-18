const CoreEngineSection = () => {
  const engines = [
    { name: "Team Agents", detail: "20 Active", icon: "👥" },
    { name: "Player Agents", detail: "500+ Active", icon: "⚽" },
    { name: "Tactical Engine", detail: "Real-time", icon: "🧠" },
    { name: "Match Context", detail: "Analyzing", icon: "📊" },
    { name: "Decision Engine", detail: "Live", icon: "⚡" },
    { name: "Behavior Modeling", detail: "Adaptive", icon: "🔄" },
  ];

  const pipeline = [
    { step: "PERCEIVE", desc: "Collect Data" },
    { step: "ANALYZE", desc: "Understand" },
    { step: "DECIDE", desc: "Compute" },
    { step: "EXECUTE", desc: "Act" },
    { step: "BROADCAST", desc: "Stream Live" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative particle-bg">
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="reveal-left">
            <div className="relative">
              <img
                src="/assets/visual-core-engine.png"
                alt="Core Engine Architecture"
                className="presentation-img w-full"
              />
              <div className="absolute -inset-4 bg-[#635cff]/8 rounded-2xl blur-3xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal-right">
            <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
              AI Orchestration Engine
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              THE CORE<br />
              <span className="text-gradient-violet">ENGINE</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-8 font-light leading-relaxed">
              A multi-agent AI system that orchestrates every aspect of the football universe in real-time.
            </p>

            {/* Engine modules grid */}
            <div className="grid grid-cols-2 gap-3 mb-8 stagger-children reveal">
              {engines.map((engine, i) => (
                <div
                  key={i}
                  className="glass-card rounded-lg p-3 hover:border-[#635cff]/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{engine.icon}</span>
                    <div>
                      <div className="text-[#ebebed] text-sm font-medium">{engine.name}</div>
                      <div className="text-[#635cff] text-xs">{engine.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Pipeline */}
            <div className="glass-card-strong rounded-xl p-5 reveal">
              <p className="text-[#ebebed] text-xs uppercase tracking-wider mb-3 font-semibold">Event Pipeline</p>
              <div className="flex flex-wrap gap-2">
                {pipeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-[#635cff]/20 rounded-md px-3 py-1.5 text-center hover:bg-[#635cff]/30 transition-colors">
                      <div className="text-[#635cff] text-xs font-bold">{item.step}</div>
                      <div className="text-[#a3a3a3] text-[10px]">{item.desc}</div>
                    </div>
                    {i < pipeline.length - 1 && <span className="text-[#635cff]">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreEngineSection;