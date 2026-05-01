import { useState, useEffect } from 'react';
import ArrivePage from './pages/ArrivePage';
import SpiralPage from './pages/SpiralPage';
import EarthPage from './pages/EarthPage';
import CoachPage from './pages/CoachPage';
import WellspringPage from './pages/WellspringPage';
import SettingsPage from './pages/SettingsPage';
import { getCurrentSeason } from './data/practices';
import { getSettings } from './data/settings';

const TABS = [
  { id: 'arrive',     label: 'Arrive',     glyph: '○' },
  { id: 'spiral',     label: 'Spiral',     glyph: '∿' },
  { id: 'earth',      label: 'Earth',      glyph: '◇' },
  { id: 'coach',      label: 'Coach',      glyph: '◈' },
  { id: 'wellspring', label: 'Wellspring', glyph: '⌘' },
];

export default function App() {
  const [tab, setTab] = useState('arrive');
  const [coachPrompt, setCoachPrompt] = useState(null);
  const [settings, setSettings] = useState(() => getSettings());

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(import.meta.env.BASE_URL + 'sw.js')
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    const season = getCurrentSeason();
    if (season?.name) {
      document.documentElement.setAttribute('data-season', season.name);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', settings.palette || 'light');
  }, [settings.palette]);

  const refreshSettings = () => setSettings(getSettings());

  const handleNavigate = (tabId) => {
    setTab(tabId);
    window.scrollTo(0, 0);
  };

  const handleReflect = (promptText) => {
    setCoachPrompt(promptText);
    setTab('coach');
    window.scrollTo(0, 0);
  };

  const handleTabChange = (tabId) => {
    if (tab === 'coach' && tabId !== 'coach') setCoachPrompt(null);
    handleNavigate(tabId);
  };

  const isSettings = tab === 'settings';

  return (
    <div
      className="font-display min-h-screen max-w-[480px] mx-auto relative palette-bg"
      style={{ color: 'var(--c-text)' }}
    >
      {/* Settings gear — top right */}
      <button
        onClick={() => handleNavigate(isSettings ? 'arrive' : 'settings')}
        className="fixed top-4 right-4 z-30 w-9 h-9 rounded-full flex items-center justify-center transition-all"
        style={{
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          color: isSettings ? 'var(--season-accent)' : 'var(--c-text-hint)',
          fontSize: '15px',
          backdropFilter: 'blur(10px)',
        }}
        aria-label="Settings"
      >
        ⚙
      </button>

      {/* Page content */}
      <main key={tab} className="page-in pb-28 safe-top">
        {tab === 'arrive' && (
          <ArrivePage
            onNavigate={handleNavigate}
            settings={settings}
          />
        )}
        {tab === 'spiral' && (
          <SpiralPage onReflect={handleReflect} />
        )}
        {tab === 'earth' && (
          <EarthPage
            onNavigate={handleNavigate}
            onReflect={handleReflect}
          />
        )}
        {tab === 'coach' && (
          <CoachPage initialPrompt={coachPrompt} />
        )}
        {tab === 'wellspring' && (
          <WellspringPage onNavigate={handleNavigate} />
        )}
        {tab === 'settings' && (
          <SettingsPage
            settings={settings}
            onSettingsChange={refreshSettings}
            onBack={() => handleNavigate('arrive')}
          />
        )}
      </main>

      {/* Bottom navigation */}
      {!isSettings && (
        <nav
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-20 safe-bottom"
          style={{
            borderTop: '1px solid var(--c-border)',
            background: 'var(--c-nav-bg)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <div className="flex justify-around items-stretch">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className="flex-1 flex flex-col items-center justify-center gap-1 py-3"
                  style={{ background: 'none' }}
                  aria-label={t.label}
                  aria-current={active ? 'page' : undefined}
                >
                  <span
                    className="text-base leading-none"
                    style={{
                      color: active ? 'var(--season-accent)' : 'var(--c-text-hint)',
                      transform: active ? 'scale(1.05)' : 'scale(1)',
                      transition: 'color 240ms ease, transform 240ms ease',
                    }}
                  >
                    {t.glyph}
                  </span>
                  <span
                    className="font-body uppercase"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.12em',
                      fontWeight: active ? 500 : 300,
                      color: active ? 'var(--season-accent)' : 'var(--c-text-hint)',
                      transition: 'color 240ms ease',
                    }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
