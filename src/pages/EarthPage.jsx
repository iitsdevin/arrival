import { useState, useCallback } from 'react';
import { getPromptForToday, getRandomPrompt } from '../data/naturePrompts';
import { getCurrentSeason } from '../data/practices';

export default function EarthPage({ onNavigate, onReflect }) {
  const [prompt, setPrompt] = useState(() => getPromptForToday());
  const season = getCurrentSeason();

  const refresh = useCallback(() => {
    setPrompt(getRandomPrompt());
  }, []);

  return (
    <div className="px-6 pt-10">
      {/* Header */}
      <div className="mb-6">
        <h1
          className="font-display font-light tracking-wide mb-1"
          style={{ fontSize: '30px', lineHeight: 1.15 }}
        >
          Earth
        </h1>
        <p className="font-display italic font-light" style={{ fontSize: '15px', color: 'var(--c-text-faint)' }}>
          what is alive near you?
        </p>
      </div>

      {/* Season indicator */}
      <div className="flex items-center gap-2 mb-8">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: 'var(--season-accent)' }}
        />
        <span
          className="font-body"
          style={{ fontSize: '11px', color: 'var(--c-text-faint)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
        >
          {season.name} · {season.theme}
        </span>
      </div>

      {/* Main prompt */}
      <div className="mb-12 px-1">
        <p
          className="font-display font-light"
          style={{
            fontSize: '22px',
            lineHeight: 1.5,
            letterSpacing: '0.005em',
          }}
        >
          {prompt.text}
        </p>
        {prompt.attribution && (
          <span
            className="block mt-4 font-body"
            style={{ fontSize: '11px', color: 'var(--c-text-hint)', letterSpacing: '0.08em' }}
          >
            — {prompt.attribution}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 mb-10">
        <button
          onClick={() => onNavigate?.('arrive')}
          className="w-full px-6 py-4 rounded-full font-body tracking-wide"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--c-bg)',
            background: 'linear-gradient(135deg, var(--season-accent), #5A7D60)',
          }}
        >
          Sit with this · timer
        </button>

        <button
          onClick={() => onReflect?.(prompt.text)}
          className="w-full px-6 py-3.5 rounded-full font-body tracking-wide"
          style={{
            fontSize: '13px',
            color: 'var(--season-accent)',
            border: '1px solid rgba(107,143,113,0.25)',
            background: 'rgba(107,143,113,0.06)',
          }}
        >
          Reflect with the coach
        </button>

        <button
          onClick={refresh}
          className="w-full px-6 py-3 rounded-full font-body tracking-wide"
          style={{
            fontSize: '12px',
            color: 'var(--c-text-hint)',
            border: '1px solid var(--c-border)',
            background: 'transparent',
          }}
        >
          Another prompt
        </button>
      </div>

      {/* Permission note */}
      <div className="text-center mb-12">
        <p
          className="font-body italic"
          style={{ fontSize: '12px', color: 'var(--c-text-hint)', lineHeight: 1.6 }}
        >
          Or just read. No action required. Attention is enough.
        </p>
      </div>

      {/* Closing */}
      <div className="text-center px-4 pb-4">
        <div
          className="mx-auto mb-6"
          style={{ width: '24px', height: '1px', background: 'var(--c-border)' }}
        />
        <p
          className="font-display italic font-light leading-relaxed"
          style={{ fontSize: '14px', color: 'var(--c-text-faint)', lineHeight: 1.65 }}
        >
          "You are already in the web. You just need to slow down enough to
          feel the threads."
        </p>
        <span
          className="block mt-3 font-body"
          style={{ fontSize: '10px', color: 'var(--c-text-hint)', letterSpacing: '0.08em' }}
        >
          — after Sophie Strand
        </span>
      </div>
    </div>
  );
}
