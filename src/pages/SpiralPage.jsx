import { useState, useEffect } from 'react';
import { WTR_SPIRAL } from '../data/teachings';
import { getApiKey, saveSpiralSession, getTodaySpiralSession } from '../data/storage';

export default function SpiralPage({ onReflect }) {
  const [step, setStep] = useState(0);
  const [journal, setJournal] = useState({});
  const [mandalaChoice, setMandalaChoice] = useState(null);
  const [painEntry, setPainEntry] = useState('');
  const [futureResponse, setFutureResponse] = useState('');
  const [loadingFuture, setLoadingFuture] = useState(false);
  const [suggestedActions, setSuggestedActions] = useState([]);
  const [loadingActions, setLoadingActions] = useState(false);
  const [vowsChecked, setVowsChecked] = useState({ v1: false, v2: false, v3: false, v4: false });

  const apiKey = getApiKey();
  const current = WTR_SPIRAL[step];

  useEffect(() => {
    const saved = getTodaySpiralSession();
    if (saved) {
      if (saved.journal) setJournal(saved.journal);
      if (saved.mandalaChoice) setMandalaChoice(saved.mandalaChoice);
      if (saved.painEntry) setPainEntry(saved.painEntry);
      if (saved.futureResponse) setFutureResponse(saved.futureResponse);
      if (saved.vowsChecked) setVowsChecked(saved.vowsChecked);
      if (typeof saved.step === 'number') setStep(saved.step);
    }
  }, []);

  useEffect(() => {
    saveSpiralSession({ step, journal, mandalaChoice, painEntry, futureResponse, vowsChecked });
  }, [step, journal, mandalaChoice, painEntry, futureResponse, vowsChecked]);

  const updateJournal = (id, value) => {
    setJournal(prev => ({ ...prev, [id]: value }));
  };

  const callClaude = async (prompt) => {
    if (!apiKey) return null;
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data.content[0].text;
  };

  const handleVoicesOfFuture = async () => {
    const entry = journal.ne1 || '';
    if (entry.length < 5 || !apiKey) return;
    setLoadingFuture(true);
    try {
      const prompt = `You are a human living 200 years in the future — a seventh-generation descendant. Someone alive today during the "Great Unraveling" has sent you this message:\n\n"${entry}"\n\nRespond to them directly with: deep gratitude for their efforts, the perspective of time (what their struggles made possible), and active hope — not bypassing the difficulty, but genuinely grounded in what emerged. Speak from an animist, decolonial, earth-centred worldview. Two short, poetic, honest paragraphs. Avoid clichés and spiritual bypassing. Be specific and tender.`;
      const response = await callClaude(prompt);
      setFutureResponse(response || 'The connection across time is fragile, but your efforts are felt. Keep going.');
    } catch {
      setFutureResponse('The connection across time is fragile, but your efforts are felt and cherished. Keep going.');
    } finally {
      setLoadingFuture(false);
    }
  };

  const handleBrainstorm = async () => {
    if (!apiKey) return;
    setLoadingActions(true);
    try {
      const painContext = mandalaChoice
        ? `${mandalaChoice.name}: ${painEntry}`
        : 'concern about the state of the world';
      const gratitudeContext = journal.g1 || journal.g3 || 'the beauty of being alive';
      const prompt = `The person is practicing Joanna Macy's Work That Reconnects. They hold pain about: "${painContext}". They draw strength from gratitude for: "${gratitudeContext}".\n\nSuggest 3 very specific, small, localized, achievable actions for someone with limited energy (chronic pain, ADHD), living in Perth, Western Australia (Whadjuk Noongar boodja). Ground these in animist, decolonial, earth-centred values. Be realistic and inspiring.\n\nReturn ONLY a JSON array of 3 strings. No other text.`;
      const response = await callClaude(prompt);
      const actions = JSON.parse(response);
      setSuggestedActions(Array.isArray(actions) ? actions : []);
    } catch {
      setSuggestedActions([
        'Spend 15 minutes observing the natural world in your immediate surroundings.',
        'Reach out to one person to check in — not to fix, just to witness.',
        'Research one local grassroots organisation working on something you care about.',
      ]);
    } finally {
      setLoadingActions(false);
    }
  };

  const handleNext = () => { if (step < 3) setStep(step + 1); };
  const handlePrev = () => { if (step > 0) setStep(step - 1); };

  return (
    <div className="px-6 pt-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display font-light tracking-wide mb-1" style={{ fontSize: '30px', lineHeight: 1.15 }}>
          The Spiral
        </h1>
        <p className="font-display italic font-light" style={{ fontSize: '15px', color: 'var(--c-text-faint)' }}>
          the Work That Reconnects
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {WTR_SPIRAL.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setStep(i)}
            className="flex items-center gap-1.5 transition-all"
          >
            <div
              className="rounded-full transition-all"
              style={{
                width: i === step ? '24px' : '8px',
                height: '8px',
                background: i === step ? current.color : i < step ? `${WTR_SPIRAL[i].color}60` : 'var(--c-border)',
              }}
            />
          </button>
        ))}
        <span className="font-body ml-2" style={{ fontSize: '10px', color: 'var(--c-text-hint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {step + 1} of 4
        </span>
      </div>

      {/* Step header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" style={{ color: current.color }}>{current.glyph}</span>
          <div>
            <h2 className="font-display font-normal" style={{ fontSize: '22px' }}>{current.title}</h2>
            <p className="font-display italic font-light" style={{ fontSize: '13px', color: 'var(--c-text-faint)' }}>{current.subtitle}</p>
          </div>
        </div>
        <p className="font-body leading-relaxed mt-3" style={{ fontSize: '13.5px', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>
          {current.description}
        </p>
      </div>

      {/* Teaching */}
      <div
        className="rounded-[14px] p-5 mb-6"
        style={{ background: `${current.color}08`, border: `1px solid ${current.color}15` }}
      >
        <p className="font-body leading-relaxed" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
          {current.teaching}
        </p>
      </div>

      {/* Step-specific content */}
      {step === 0 && (
        <div className="space-y-5 mb-8">
          {current.journalPrompts.map((p) => (
            <div key={p.id}>
              <label className="block font-body mb-2" style={{ fontSize: '13px', color: 'var(--c-text-muted)', fontWeight: 500 }}>
                {p.question}
              </label>
              <textarea
                value={journal[p.id] || ''}
                onChange={(e) => updateJournal(p.id, e.target.value)}
                placeholder={p.placeholder}
                rows={3}
                className="w-full px-4 py-3 rounded-xl font-body resize-none outline-none"
                style={{
                  fontSize: '14px',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                  color: 'var(--c-text)',
                }}
              />
            </div>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="mb-8">
          <p className="font-body mb-4" style={{ fontSize: '12px', color: 'var(--c-text-faint)' }}>
            Select the object that most resonates with what you are carrying right now.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {current.mandala.map((obj) => (
              <button
                key={obj.id}
                onClick={() => setMandalaChoice(obj)}
                className="p-4 rounded-[14px] text-center transition-all"
                style={{
                  border: mandalaChoice?.id === obj.id
                    ? `2px solid ${obj.color}`
                    : '1px solid var(--c-border)',
                  background: mandalaChoice?.id === obj.id
                    ? `${obj.color}10`
                    : 'var(--c-surface)',
                }}
              >
                <span className="text-2xl block mb-1" style={{ color: obj.color }}>{obj.symbol}</span>
                <div className="font-display" style={{ fontSize: '15px' }}>{obj.name}</div>
                <div className="font-body" style={{ fontSize: '11px', color: 'var(--c-text-hint)' }}>{obj.emotion}</div>
              </button>
            ))}
          </div>

          {mandalaChoice && (
            <div className="page-in">
              <label className="block font-body mb-2" style={{ fontSize: '13px', color: mandalaChoice.color, fontWeight: 500 }}>
                {mandalaChoice.prompt}
              </label>
              <textarea
                value={painEntry}
                onChange={(e) => setPainEntry(e.target.value)}
                placeholder="Express it freely. This space is private."
                rows={5}
                className="w-full px-4 py-3 rounded-xl font-body resize-none outline-none"
                style={{
                  fontSize: '14px',
                  background: 'var(--c-surface)',
                  border: `1px solid ${mandalaChoice.color}25`,
                  color: 'var(--c-text)',
                }}
              />
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="mb-8 space-y-5">
          {current.journalPrompts.map((p) => (
            <div key={p.id}>
              <label className="block font-body mb-2" style={{ fontSize: '13px', color: 'var(--c-text-muted)', fontWeight: 500 }}>
                {p.question}
              </label>
              <textarea
                value={journal[p.id] || ''}
                onChange={(e) => updateJournal(p.id, e.target.value)}
                placeholder={p.placeholder}
                rows={5}
                className="w-full px-4 py-3 rounded-xl font-body resize-none outline-none"
                style={{
                  fontSize: '14px',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                  color: 'var(--c-text)',
                }}
              />
            </div>
          ))}

          {/* Voices of the Future */}
          {apiKey && (
            <div>
              <button
                onClick={handleVoicesOfFuture}
                disabled={loadingFuture || (journal.ne1 || '').length < 5}
                className="flex items-center gap-2 px-5 py-3 rounded-full font-body tracking-wide transition-opacity"
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: current.color,
                  background: `${current.color}12`,
                  border: `1px solid ${current.color}25`,
                  opacity: loadingFuture || (journal.ne1 || '').length < 5 ? 0.5 : 1,
                }}
              >
                {loadingFuture && <span className="breathe-dot w-2 h-2 rounded-full inline-block" style={{ background: current.color }} />}
                ✦ Hear from the Future
              </button>

              {futureResponse && (
                <div
                  className="mt-4 p-5 rounded-[14px] page-in"
                  style={{
                    background: `${current.color}08`,
                    border: `1px solid ${current.color}15`,
                  }}
                >
                  <p className="font-body mb-3" style={{ fontSize: '11px', color: current.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                    ✦ A voice from 200 years ahead...
                  </p>
                  {futureResponse.split('\n').filter(Boolean).map((para, i) => (
                    <p key={i} className="font-body italic leading-relaxed mb-2" style={{ fontSize: '14px', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="mb-8 space-y-5">
          {current.journalPrompts.map((p) => (
            <div key={p.id}>
              <label className="block font-body mb-2" style={{ fontSize: '13px', color: 'var(--c-text-muted)', fontWeight: 500 }}>
                {p.question}
              </label>
              <textarea
                value={journal[p.id] || ''}
                onChange={(e) => updateJournal(p.id, e.target.value)}
                placeholder={p.placeholder}
                rows={3}
                className="w-full px-4 py-3 rounded-xl font-body resize-none outline-none"
                style={{
                  fontSize: '14px',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                  color: 'var(--c-text)',
                }}
              />
            </div>
          ))}

          {/* Brainstorm Actions */}
          {apiKey && (
            <div>
              <button
                onClick={handleBrainstorm}
                disabled={loadingActions}
                className="flex items-center gap-2 px-5 py-3 rounded-full font-body tracking-wide transition-opacity"
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: current.color,
                  background: `${current.color}12`,
                  border: `1px solid ${current.color}25`,
                  opacity: loadingActions ? 0.5 : 1,
                }}
              >
                {loadingActions && <span className="breathe-dot w-2 h-2 rounded-full inline-block" style={{ background: current.color }} />}
                ✦ Brainstorm with me
              </button>

              {suggestedActions.length > 0 && (
                <div className="mt-4 space-y-2 page-in">
                  <p className="font-body" style={{ fontSize: '10px', color: current.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                    Suggested for you
                  </p>
                  {suggestedActions.map((action, i) => (
                    <button
                      key={i}
                      onClick={() => updateJournal('gf1', action)}
                      className="w-full text-left p-3.5 rounded-[12px] font-body transition-all"
                      style={{
                        fontSize: '13px',
                        color: 'var(--c-text-muted)',
                        background: 'var(--c-surface)',
                        border: '1px solid var(--c-border)',
                        lineHeight: 1.5,
                      }}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Vows */}
          <div className="mt-6">
            <h3 className="section-label">daily vows</h3>
            <div className="space-y-3">
              {current.vows.map((vow, i) => {
                const key = `v${i + 1}`;
                const checked = vowsChecked[key];
                return (
                  <label
                    key={key}
                    className="flex items-start gap-3 p-4 rounded-[12px] cursor-pointer transition-all"
                    style={{
                      background: checked ? `${current.color}08` : 'var(--c-surface)',
                      border: checked ? `1px solid ${current.color}20` : '1px solid var(--c-border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setVowsChecked(prev => ({ ...prev, [key]: e.target.checked }))}
                      className="mt-1 accent-current"
                      style={{ accentColor: current.color }}
                    />
                    <span
                      className="font-body leading-relaxed"
                      style={{
                        fontSize: '13px',
                        color: checked ? 'var(--c-text-hint)' : 'var(--c-text-muted)',
                        textDecoration: checked ? 'line-through' : 'none',
                        lineHeight: 1.6,
                      }}
                    >
                      {vow}
                    </span>
                  </label>
                );
              })}
            </div>
            {Object.values(vowsChecked).every(Boolean) && (
              <div
                className="mt-4 p-4 rounded-[12px] text-center page-in"
                style={{ background: `${current.color}15`, border: `1px solid ${current.color}25` }}
              >
                <span className="font-body" style={{ fontSize: '13px', color: current.color, fontWeight: 500 }}>
                  Your compass is set. ✦
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between py-4 mb-4">
        <button
          onClick={handlePrev}
          disabled={step === 0}
          className="font-body px-4 py-2 rounded-full transition-opacity"
          style={{
            fontSize: '13px',
            color: 'var(--c-text-faint)',
            border: '1px solid var(--c-border)',
            opacity: step === 0 ? 0.3 : 1,
          }}
        >
          ← Previous
        </button>

        {step < 3 ? (
          <button
            onClick={handleNext}
            className="font-body px-5 py-2.5 rounded-full"
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--c-bg)',
              background: `linear-gradient(135deg, ${current.color}, ${current.color}cc)`,
            }}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => onReflect?.('I just completed the Spiral — gratitude, honouring pain, seeing with new eyes, and going forth.')}
            className="font-body px-5 py-2.5 rounded-full"
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--season-accent)',
              border: '1px solid rgba(107,143,113,0.25)',
              background: 'rgba(107,143,113,0.06)',
            }}
          >
            Reflect with coach
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="text-center pb-4">
        <p className="font-body italic" style={{ fontSize: '11px', color: 'var(--c-text-hint)', lineHeight: 1.6 }}>
          Based on the Work That Reconnects by Joanna Macy.
          {!apiKey && ' Add your API key in Settings to unlock AI features.'}
        </p>
      </div>
    </div>
  );
}
