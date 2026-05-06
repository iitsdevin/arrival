import { useState } from 'react';
import { TEACHERS_LIST } from '../data/teachings';
import { PALETTES, saveSettings } from '../data/settings';
import { getApiKey, saveApiKey, clearApiKey } from '../data/storage';
import { FIVE_ROOTS } from '../data/teachings';

export default function SettingsPage({ settings, onSettingsChange, onBack }) {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const hasKey = !!getApiKey();
  const activeTeachers = settings.activeTeachers;
  const allActive = !activeTeachers || activeTeachers.length === 0;

  const toggleTeacher = (teacherId) => {
    let next;
    if (allActive) {
      next = TEACHERS_LIST.map(t => t.id).filter(id => id !== teacherId);
    } else {
      if (activeTeachers.includes(teacherId)) {
        next = activeTeachers.filter(id => id !== teacherId);
        if (next.length === 0) next = null;
      } else {
        next = [...activeTeachers, teacherId];
        if (next.length === TEACHERS_LIST.length) next = null;
      }
    }
    saveSettings({ ...settings, activeTeachers: next });
    onSettingsChange();
  };

  const resetTeachers = () => {
    saveSettings({ ...settings, activeTeachers: null });
    onSettingsChange();
  };

  const setPalette = (id) => {
    saveSettings({ ...settings, palette: id });
    onSettingsChange();
  };

  const handleSaveKey = () => {
    if (apiKeyInput.trim()) {
      saveApiKey(apiKeyInput.trim());
      setApiKeyInput('');
      onSettingsChange();
    }
  };

  const handleClearKey = () => {
    clearApiKey();
    onSettingsChange();
  };

  const isTeacherActive = (id) => allActive || activeTeachers?.includes(id);

  const rootForTeacher = (t) => FIVE_ROOTS.find(r => r.id === t.root);

  return (
    <div className="px-6 pt-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-light tracking-wide mb-1" style={{ fontSize: '30px', lineHeight: 1.15 }}>
            Settings
          </h1>
          <p className="font-display italic font-light" style={{ fontSize: '15px', color: 'var(--c-text-faint)' }}>
            shape your experience
          </p>
        </div>
        <button
          onClick={onBack}
          className="font-body px-4 py-2 rounded-full"
          style={{ fontSize: '12px', color: 'var(--season-accent)', border: '1px solid rgba(107,143,113,0.2)' }}
        >
          Done
        </button>
      </div>

      {/* Palette */}
      <div className="mb-8">
        <h3 className="section-label">palette</h3>
        <div className="flex gap-2">
          {PALETTES.map((p) => (
            <button
              key={p.id}
              onClick={() => setPalette(p.id)}
              className="flex-1 py-3 px-3 rounded-[12px] font-body text-center transition-all"
              style={{
                fontSize: '12px',
                border: settings.palette === p.id
                  ? '2px solid var(--season-accent)'
                  : '1px solid var(--c-border)',
                background: settings.palette === p.id
                  ? 'var(--c-surface-active)'
                  : 'var(--c-surface)',
                color: settings.palette === p.id
                  ? 'var(--season-accent)'
                  : 'var(--c-text-faint)',
                fontWeight: settings.palette === p.id ? 500 : 400,
              }}
            >
              {p.label}
              <div className="font-body mt-0.5" style={{ fontSize: '9px', color: 'var(--c-text-hint)' }}>
                {p.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* API Key */}
      <div className="mb-8">
        <h3 className="section-label">api key</h3>
        <div className="card">
          <p className="font-body leading-relaxed mb-3" style={{ fontSize: '12px', color: 'var(--c-text-muted)', lineHeight: 1.6 }}>
            Powers the Coach, Voices of the Future, and Brainstorm features. Stored only in your browser.
          </p>
          {hasKey ? (
            <div className="flex items-center justify-between">
              <span className="font-body" style={{ fontSize: '12px', color: 'var(--season-accent)' }}>
                ● Key saved
              </span>
              <button
                onClick={handleClearKey}
                className="font-body px-3 py-1.5 rounded-full"
                style={{ fontSize: '11px', color: 'var(--c-text-hint)', border: '1px solid var(--c-border)' }}
              >
                Remove key
              </button>
            </div>
          ) : (
            <div>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="sk-ant-..."
                className="w-full px-4 py-3 rounded-xl font-body outline-none mb-3"
                style={{ fontSize: '16px', background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text)' }}
              />
              <button
                onClick={handleSaveKey}
                className="w-full px-4 py-2.5 rounded-full font-body"
                style={{ fontSize: '12px', fontWeight: 500, color: 'var(--c-bg)', background: 'linear-gradient(135deg, var(--season-accent), #5A7D60)' }}
              >
                Save key
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Teachers */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <h3 className="section-label" style={{ marginBottom: 0 }}>teachers</h3>
          {!allActive && (
            <button
              onClick={resetTeachers}
              className="font-body"
              style={{ fontSize: '10px', color: 'var(--season-accent)', textDecoration: 'underline' }}
            >
              Show all
            </button>
          )}
        </div>
        <p className="font-body mb-4" style={{ fontSize: '11px', color: 'var(--c-text-hint)', lineHeight: 1.5 }}>
          Toggle teachers to curate which wisdom appears in your daily quotes and prompts. Deselect to narrow your focus; leave all on for the full breadth.
        </p>
        <div className="space-y-1.5">
          {TEACHERS_LIST.map((t) => {
            const active = isTeacherActive(t.id);
            const root = rootForTeacher(t);
            return (
              <button
                key={t.id}
                onClick={() => toggleTeacher(t.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-left transition-all"
                style={{
                  background: active ? 'var(--c-surface-active)' : 'var(--c-surface)',
                  border: active ? `1px solid ${root?.color || 'var(--season-accent)'}30` : '1px solid var(--c-border)',
                  opacity: active ? 1 : 0.5,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: active ? (root?.color || 'var(--season-accent)') : 'var(--c-text-hint)' }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-body" style={{ fontSize: '13px', color: active ? 'var(--c-text)' : 'var(--c-text-hint)', fontWeight: active ? 500 : 400 }}>
                    {t.id}
                  </div>
                  <div className="font-body" style={{ fontSize: '10px', color: 'var(--c-text-hint)' }}>
                    {t.tradition}
                  </div>
                </div>
                {root && (
                  <span className="font-body shrink-0" style={{ fontSize: '9px', color: root.color, letterSpacing: '0.08em' }}>
                    {root.glyph}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* About */}
      <div className="text-center pb-10 px-4">
        <div className="mx-auto mb-5" style={{ width: '24px', height: '1px', background: 'var(--c-border)' }} />
        <p className="font-display font-light mb-2" style={{ fontSize: '18px', color: 'var(--season-accent)' }}>
          Coming Home
        </p>
        <p className="font-body italic leading-relaxed" style={{ fontSize: '12px', color: 'var(--c-text-hint)', lineHeight: 1.7 }}>
          A devotional practice companion on Whadjuk Noongar boodja. Drawing from Zen, somatics, ecology, ancestral wisdom, and the fierce tenderness of liberation.
        </p>
        <p className="font-body mt-3" style={{ fontSize: '10px', color: 'var(--c-text-hint)' }}>
          All data stays in your browser. Nothing is sent to any server except the Anthropic API when you use the Coach or Spiral AI features.
        </p>
      </div>
    </div>
  );
}
