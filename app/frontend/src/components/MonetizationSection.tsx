const MonetizationSection = () => {
  const revenue = [
    { source: "Betting & Fantasy", potential: "$1.2B+", color: "from-[#635cff] to-[#a78bfa]" },
    { source: "Subscriptions & Streaming", potential: "$800M+", color: "from-[#635cff] to-[#818cf8]" },
    { source: "Advertising & Sponsorships", potential: "$500M+", color: "from-[#635cff] to-[#6366f1]" },
    { source: "NFTs & Digital Assets", potential: "$300M+", color: "from-[#635cff] to-[#7c3aed]" },
    { source: "Licensing & API Access", potential: "$200M+", color: "from-[#635cff] to-[#8b5cf6]" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative particle-bg">
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
            Business Model
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            MULTIPLE REVENUE<br />
            <span className="text-gradient-violet">SURFACES</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-3xl mx-auto mt-6 font-light">
            Every layer of the ecosystem is monetizable. Fully programmable revenue streams with near-zero marginal cost.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Revenue streams */}
          <div className="space-y-4 stagger-children reveal">
            {revenue.map((item, i) => (
              <div
                key={i}
                className="glass-card-strong rounded-xl p-5 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="text-[#ebebed] font-semibold text-lg">{item.source}</div>
                  </div>
                  <div className="text-2xl font-bold text-violet group-hover:drop-shadow-[0_0_10px_rgba(99,92,255,0.5)] transition-all">
                    {item.potential}
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="glass-card-strong rounded-xl p-6 border-[#635cff]/40 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-[#ebebed] font-bold text-xl">Total Addressable Market</span>
                <span className="text-3xl font-black text-gradient-violet">$3B+</span>
              </div>
            </div>
          </div>

          {/* Right - Presentation image */}
          <div className="reveal-right perspective-container">
            <div className="tilt-card">
              <img
                src="/assets/visual-hero-stadium.png"
                alt="Market Opportunity"
                className="presentation-img w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizationSection;