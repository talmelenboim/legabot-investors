import { Link } from "react-router-dom";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

/* Inline SVG of the Lega.bot logo — white version, renders crisp at any size */
const LegabotLogo = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 544.94 185.79"
    className={className}
    aria-label="Lega.bot"
  >
    <g fill="#fff">
      <polygon points="87.46 127.4 87.46 127.4 15.69 127.4 35.55 58.38 71.43 58.38 61.5 92.89 87.46 127.4" />
      <path d="M169.14,92.89l-19.86,69.02h-71.76l9.93-34.51h35.88l9.93-34.51h-35.88l9.93-34.51h-35.88l9.93-34.51h35.88c17.97,0,30.92,17.23,25.95,34.51h0c17.97,0,30.92,17.23,25.95,34.51Z" />
      <path d="M241.22,115.9h-43.42V51.48h12.26v53.17h31.16v11.25Z" />
      <path d="M291.08,97.9c-1.73,11.25-13.18,18.81-25.03,18.81-14.3,0-25.85-10.74-25.85-25.66,0-15.03,11.55-25.77,25.85-25.77,14.92,0,25.03,9.3,25.44,24.03v4.7h-38.82c1.23,6.65,6.74,10.74,13.38,10.74,5.11,0,9.81-2.45,11.95-6.85h13.08ZM277.49,84.31c-2.04-4.4-6.23-7.06-11.44-7.06-5.31,0-9.91,2.66-12.16,7.06h23.6Z" />
      <path d="M344.93,114.06c0,12.47-8.38,20.25-22.17,20.25h-26.05v-11.76h25.54c7.76,0,10.42-2.56,10.42-9.41v-2.86c-4.09,4.3-9.5,6.44-15.12,6.44-13.38,0-24.01-10.74-24.01-25.66,0-15.03,10.62-25.77,24.01-25.77,5.72,0,11.14,2.25,15.22,6.54l.92-6.03h11.24v48.26ZM318.87,77.04c-7.35,0-13.38,5.42-13.38,14.01,0,8.49,6.03,13.9,13.38,13.9,7.56,0,13.69-5.42,13.69-13.9,0-8.59-6.13-14.01-13.69-14.01Z" />
      <path d="M387.63,65.8h11.24v50.1h-11.24l-.92-5.73c-4.19,4.3-9.81,6.54-15.63,6.54-13.69,0-24.52-10.74-24.52-25.66,0-15.03,10.83-25.77,24.52-25.77,5.82,0,11.34,2.25,15.53,6.44l1.02-5.93ZM372.41,77.04c-7.66,0-13.9,5.42-13.9,14.01,0,8.49,6.23,13.9,13.9,13.9,7.87,0,14.2-5.42,14.2-13.9,0-8.59-6.33-14.01-14.2-14.01Z" />
      <path d="M401.94,115.9V51.48h25.74c12.16,0,19.92,7.16,19.92,16.56,0,5.93-1.63,9.92-5.21,12.37,6.34,2.87,9.4,7.98,9.4,15.34,0,12.88-9.2,20.14-24.62,20.14h-25.24ZM414.2,62.73v13.19h12.16c5.93,0,8.48-2.56,8.48-6.64,0-4.3-2.25-6.54-8.58-6.54h-12.06ZM414.2,87.17v17.48h12.46c8.79,0,12.36-3.27,12.36-8.89,0-5.62-3.78-8.59-12.36-8.59h-12.46Z" />
      <path d="M479.79,65.29c14.1,0,25.75,10.74,25.75,25.77,0,14.93-11.65,25.66-25.75,25.66-14.3,0-25.85-10.74-25.85-25.66,0-15.03,11.54-25.77,25.85-25.77ZM479.79,104.75c7.36,0,13.49-5.32,13.49-13.8,0-8.38-6.13-13.7-13.49-13.7-7.56,0-13.69,5.32-13.69,13.7,0,8.49,6.13,13.8,13.69,13.8Z" />
      <path d="M505.03,77.55v-11.76h3.06l1.02-10.94h11.24v10.94h8.38v11.76h-8.38v19.12c0,5.42,1.84,7.46,6.84,7.46h2.04v11.76h-3.68c-11.24,0-17.47-6.85-17.47-19.22v-19.12h-3.06Z" />
    </g>
  </svg>
);

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-[#635cff] transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <LegabotLogo className="h-6 sm:h-7 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 hidden sm:block">
            Legal
          </span>
        </div>
      </nav>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Page Header */}
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#635cff] rounded-full" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#635cff] font-medium">
              {lastUpdated}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h1>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          {children}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2 text-sm text-gray-500 hover:text-[#635cff] transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <LegabotLogo className="h-4 opacity-15" />
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;