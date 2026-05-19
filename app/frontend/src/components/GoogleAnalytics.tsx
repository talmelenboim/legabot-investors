import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COOKIE_CONSENT_UPDATED_EVENT, CookieConsentValue, getCookieConsent } from '@/lib/cookieConsent';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? 'G-YTZP7Z8QSE';
const isValidMeasurementId = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID ?? '');
let analyticsInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGoogleTag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

function getConsentSettings(consent: CookieConsentValue | null) {
  const granted = consent === 'accepted';

  return {
    ad_personalization: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  };
}

function loadGoogleAnalytics(consent: CookieConsentValue | null) {
  if (!isValidMeasurementId) {
    return;
  }

  ensureGoogleTag();

  if (!analyticsInitialized) {
    const hasStaticGoogleTag = Boolean(document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`));

    if (!hasStaticGoogleTag) {
      window.gtag?.('consent', 'default', {
        ...getConsentSettings(null),
        wait_for_update: 500,
      });

      window.gtag?.('js', new Date());
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        send_page_view: false,
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }

    analyticsInitialized = true;
  }

  window.gtag?.('consent', 'update', getConsentSettings(consent));
}

function sendPageView(path: string) {
  if (!isValidMeasurementId || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const updateAnalyticsConsent = (sendCurrentPageView = false) => {
      const consent = getCookieConsent();

      loadGoogleAnalytics(consent);

      if (sendCurrentPageView && consent === 'accepted') {
        sendPageView(`${location.pathname}${location.search}`);
      }
    };

    updateAnalyticsConsent();
    const handleConsentUpdate = () => updateAnalyticsConsent(true);

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdate);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdate);
    };
  }, [location.pathname, location.search]);

  useEffect(() => {
    const consent = getCookieConsent();

    loadGoogleAnalytics(consent);

    if (consent === 'accepted') {
      sendPageView(`${location.pathname}${location.search}`);
    }
  }, [location.pathname, location.search]);

  return null;
}
