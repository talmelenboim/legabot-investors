import { useEffect, useState } from 'react';
import { Cookie, Settings, X } from 'lucide-react';
import { CookieConsentValue, hasCurrentCookieConsent, saveCookieConsent } from '@/lib/cookieConsent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setIsVisible(!hasCurrentCookieConsent());
  }, []);

  const saveConsent = (value: CookieConsentValue) => {
    saveCookieConsent(value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl rounded-lg border border-white/15 bg-[#0a0a0f]/95 p-4 text-white shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-3">
          <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#635cff]/15 text-[#8f8aff]">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-base font-semibold tracking-wide">Cookie preferences</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-gray-300">
              We use essential cookies to keep the site working and optional cookies to understand performance and improve Lega.bot.
              You can accept all cookies or continue with essential cookies only.
            </p>
            {showDetails ? (
              <div className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <strong className="block text-white">Essential cookies</strong>
                  Required for security, preferences, and core site behavior.
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <strong className="block text-white">Analytics cookies</strong>
                  Help us measure traffic and improve the experience when enabled.
                </div>
              </div>
            ) : null}
            <a
              href="/cookie-policy"
              className="mt-3 inline-block text-sm font-medium text-[#9b96ff] underline-offset-4 hover:underline"
            >
              Read the Cookie Policy
            </a>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
          <button
            type="button"
            onClick={() => saveConsent('accepted')}
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#635cff] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#544dff]"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => saveConsent('essential')}
            className="inline-flex h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-gray-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => setShowDetails((value) => !value)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/10 px-5 text-sm font-medium text-gray-300 transition-colors hover:border-white/25 hover:text-white"
            aria-expanded={showDetails}
          >
            <Settings className="h-4 w-4" aria-hidden="true" />
            Details
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => saveConsent('essential')}
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Close cookie preferences and use essential cookies only"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </section>
  );
}
