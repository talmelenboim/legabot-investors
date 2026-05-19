import { useEffect, useState } from 'react';
import { Check, Eye, Link as LinkIcon, Minus, Plus, RotateCcw, X } from 'lucide-react';

type AccessibilitySettings = {
  largeText: boolean;
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
};

const STORAGE_KEY = 'legabot_accessibility_settings';

const defaultSettings: AccessibilitySettings = {
  largeText: false,
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
};

function readSettings() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

function applySettings(settings: AccessibilitySettings) {
  const root = document.documentElement;

  root.classList.toggle('accessibility-large-text', settings.largeText);
  root.classList.toggle('accessibility-high-contrast', settings.highContrast);
  root.classList.toggle('accessibility-reduce-motion', settings.reduceMotion);
  root.classList.toggle('accessibility-underline-links', settings.underlineLinks);
}

const options = [
  {
    key: 'largeText',
    label: 'Larger text',
    description: 'Increase text size across the site.',
    icon: Plus,
  },
  {
    key: 'highContrast',
    label: 'High contrast',
    description: 'Improve foreground and background contrast.',
    icon: Eye,
  },
  {
    key: 'reduceMotion',
    label: 'Reduce motion',
    description: 'Minimize animations and smooth scrolling.',
    icon: Minus,
  },
  {
    key: 'underlineLinks',
    label: 'Underline links',
    description: 'Make text links easier to identify.',
    icon: LinkIcon,
  },
] as const;

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const stored = readSettings();
    setSettings(stored);
    applySettings(stored);
  }, []);

  useEffect(() => {
    applySettings(settings);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings) => {
    setSettings((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {isOpen ? (
        <section
          id="accessibility-panel"
          aria-label="Accessibility settings"
          className="w-[min(calc(100vw-2.5rem),22rem)] rounded-lg border border-white/15 bg-[#0a0a0f]/95 p-4 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold tracking-wide">Accessibility</h2>
              <p className="mt-1 text-sm leading-5 text-gray-300">
                Adjust the site display for a more comfortable experience.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 text-gray-300 transition-colors hover:border-white/25 hover:text-white"
              aria-label="Close accessibility settings"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-2">
            {options.map(({ key, label, description, icon: Icon }) => {
              const isActive = settings[key];

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => updateSetting(key)}
                  className="flex w-full items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3 text-left transition-colors hover:border-[#635cff]/60 hover:bg-[#635cff]/10"
                  aria-pressed={isActive}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-[#8f8aff]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-white">{label}</span>
                    <span className="block text-xs leading-5 text-gray-400">{description}</span>
                  </span>
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${
                      isActive ? 'border-[#635cff] bg-[#635cff] text-white' : 'border-white/20 text-transparent'
                    }`}
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={resetSettings}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-white/10 text-sm font-medium text-gray-200 transition-colors hover:border-white/25 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset settings
          </button>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#635cff] text-white shadow-xl shadow-[#635cff]/30 transition-transform hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Eye className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
