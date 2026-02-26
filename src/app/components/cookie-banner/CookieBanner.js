'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie_consent';

function updateGtmConsent(granted) {
  if (typeof window === 'undefined' || !window.gtag) return;
  const state = granted ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      updateGtmConsent(saved === 'granted');
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'granted');
    updateGtmConsent(true);
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, 'denied');
    updateGtmConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <p style={styles.text}>
          Ta strona używa plików cookie (m.in. Google Analytics, Google Tag Manager) w celach analitycznych.
          Możesz zaakceptować lub odrzucić ich stosowanie.{' '}
          <a href="/polityka-prywatnosci" style={styles.link}>Polityka prywatności</a>
        </p>
        <div style={styles.buttons}>
          <button onClick={handleReject} style={styles.btnReject}>
            Odrzuć
          </button>
          <button onClick={handleAccept} style={styles.btnAccept}>
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99999,
    display: 'flex',
    justifyContent: 'center',
    padding: '12px 16px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)',
    pointerEvents: 'none',
  },
  banner: {
    background: '#1a1a2e',
    color: '#f1f1f1',
    borderRadius: '12px',
    padding: '18px 24px',
    maxWidth: '780px',
    width: '100%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    pointerEvents: 'all',
  },
  text: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.5',
    flex: 1,
    minWidth: '200px',
  },
  link: {
    color: '#ffb45e',
    textDecoration: 'underline',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    flexShrink: 0,
  },
  btnAccept: {
    background: '#ffb45e',
    color: '#1a1a2e',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 22px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  btnReject: {
    background: 'transparent',
    color: '#aaa',
    border: '1px solid #444',
    borderRadius: '8px',
    padding: '10px 22px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
};
