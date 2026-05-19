export type CookieConsentValue = 'accepted' | 'essential';

export const COOKIE_CONSENT_STORAGE_KEY = 'legabot_cookie_consent';
export const COOKIE_CONSENT_UPDATED_EVENT = 'legabot-cookie-consent-updated';
export const COOKIE_CONSENT_VERSION = 2;

type StoredCookieConsent = {
  savedAt?: string;
  value?: CookieConsentValue;
  version?: number;
};

export function getCookieConsent() {
  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as StoredCookieConsent;
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }

    return parsed.value === 'accepted' || parsed.value === 'essential' ? parsed.value : null;
  } catch {
    return null;
  }
}

export function hasCurrentCookieConsent() {
  return getCookieConsent() !== null;
}

export function saveCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify({
      value,
      savedAt: new Date().toISOString(),
      version: COOKIE_CONSENT_VERSION,
    }),
  );
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: value }));
}
