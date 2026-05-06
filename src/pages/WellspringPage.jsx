import { useState } from 'react';
import { FIVE_ROOTS, TEACHINGS, NEW_SAINTS_WEEKS } from '../data/teachings';
import { DAYS, DAY_DATA, PRACTICE_DETAIL, PRACTICE_GUIDES } from '../data/practices';
import Timer from '../components/Timer';

const INNER_TABS = [
  { id: 'roots', label: 'Five Roots' },
  { id: 'teachings', label: 'Teachings' },
  { id: 'rhythm', label: 'Rhythm' },
  { id: 'journey', label: 'Journey' },
];

export default function WellspringPage({ onNavigate }) {
  const [innerTab, setInnerTab] = useState('roots');
  const [activeRoot, setActiveRoot] = useState(0);
  const [expandedTeaching, setExpandedTeaching] = useState(null);
  const [activeWeek, setActiveWeek] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [expandedPractice, setExpandedPractice] = useState(null);

  const now = new Date();
  const todayIndex = now.getDay();
  const root = FIVE_ROOTS[activeRoot];

  return (
    <div className="px-6 pt-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display font-light tracking-wide mb-1" style={{ fontSize: '30px', lineHeight: 1.15 }}>
          Wellspring
        </h1>
        <p className="font-display italic font-light" style={{ fontSize: '15px', color: 'var(--c-text-faint)' }}>
          practices, teachings, maps
        </p>
      </div>

      {/* Inner tabs */}
      <div className="flex gap-1 mb-8 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {INNER_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setInnerTab(t.id)}
            className="px-4 py-2 rounded-full font-body whitespace-nowrap transition-all"
            style={{
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: innerTab === t.id
                ? '1px solid var(--season-accent)'
                : '1px solid var(--c-border)',
              background: innerTab === t.id
                ? 'rgba(107,143,113,0.08)'
                : 'transparent',
              color: innerTab === t.id
                ? 'var(--season-accent)'
                : 'var(--c-text-hint)',
              fontWeight: innerTab === t.id ? 500 : 400,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ─── FIVE ROOTS ─── */}
      {innerTab === 'roots' && (
        <div>
          {/* Root selector */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {FIVE_ROOTS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActiveRoot(i)}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-[12px] transition-all shrink-0"
                style={{
                  border: i === activeRoot
                    ? `2px solid ${r.color}`
                    : '1px solid var(--c-border)',
                  background: i === activeRoot
                    ? `${r.color}10`
                    : 'transparent',
                  minWidth: '72px',
                }}
              >
                <span style={{ fontSize: '18px', color: r.color }}>{r.glyph}</span>
                <span className="font-body" style={{
                  fontSize: '9px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: i === activeRoot ? r.color : 'var(--c-text-hint)',
                  fontWeight: i === activeRoot ? 500 : 400,
                }}>
                  {r.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Root content */}
          <div key={root.id} className="page-in">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl" style={{ color: root.color }}>{root.glyph}</span>
              <div>
                <h2 className="font-display font-normal" style={{ fontSize: '22px' }}>{root.name}</h2>
                <p className="font-display italic font-light" style={{ fontSize: '13px', color: root.color }}>{root.subtitle}</p>
              </div>
            </div>

            <p className="font-body leading-relaxed mb-4" style={{ fontSize: '13.5px', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>
              {root.description}
            </p>

            {/* Teachers */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {root.teachers.map((t) => (
                <span key={t} className="font-body px-2.5 py-1 rounded-full"
                  style={{ fontSize: '10px', color: root.color, background: `${root.color}10`, border: `1px solid ${root.color}20` }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Teaching text */}
            <div className="rounded-[14px] p-5 mb-6" style={{ background: `${root.color}06`, border: `1px solid ${root.color}12` }}>
              {root.teaching.split('\n').filter(Boolean).map((para, i) => (
                <p key={i} className="font-body leading-relaxed mb-2 last:mb-0" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Practices */}
            <h3 className="section-label" style={{ color: root.color }}>practices</h3>
            <div className="space-y-2 mb-6">
              {root.practices.map((p) => {
                const guide = PRACTICE_GUIDES[p];
                const isExpanded = expandedPractice === p;
                return (
                  <div key={p}>
                    <button
                      onClick={() => setExpandedPractice(isExpanded ? null : p)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-left transition-all"
                      style={{
                        background: isExpanded ? `${root.color}08` : 'var(--c-surface)',
                        border: isExpanded ? `1px solid ${root.color}25` : '1px solid var(--c-border)',
                      }}
                    >
                      <span style={{ color: root.color }}>{guide?.icon || root.glyph}</span>
                      <span className="flex-1 font-body" style={{ fontSize: '13px', color: isExpanded ? 'var(--c-text)' : 'var(--c-text-muted)', fontWeight: isExpanded ? 500 : 400 }}>{p}</span>
                      {guide && (
                        <span className="font-body shrink-0" style={{ fontSize: '11px', color: 'var(--c-text-hint)' }}>
                          {guide.duration}
                        </span>
                      )}
                      <span className="font-body shrink-0" style={{ fontSize: '12px', color: 'var(--c-text-hint)' }}>
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>
                    {isExpanded && guide && (
                      <div className="px-4 pt-3 pb-4 page-in">
                        <p className="font-body italic leading-relaxed mb-3" style={{ fontSize: '13px', color: root.color, lineHeight: 1.6 }}>
                          {guide.description}
                        </p>
                        <div className="rounded-[12px] p-4 mb-3" style={{ background: `${root.color}06`, border: `1px solid ${root.color}12` }}>
                          <p className="font-body mb-1" style={{ fontSize: '10px', color: root.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                            How to practice
                          </p>
                          <p className="font-body leading-relaxed" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
                            {guide.instructions}
                          </p>
                        </div>
                        <p className="font-body" style={{ fontSize: '11px', color: 'var(--c-text-hint)', lineHeight: 1.5 }}>
                          <span style={{ fontWeight: 500 }}>When:</span> {guide.whenToUse}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Prompts */}
            <h3 className="section-label" style={{ color: root.color }}>considerations</h3>
            <div className="space-y-3 mb-8">
              {root.prompts.map((p, i) => (
                <div key={i} className="rounded-[14px] p-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                  <p className="font-body italic leading-relaxed" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── TEACHINGS ─── */}
      {innerTab === 'teachings' && (
        <div className="space-y-3 mb-8">
          {TEACHINGS.map((t) => {
            const r = FIVE_ROOTS.find(root => root.id === t.root);
            const expanded = expandedTeaching === t.id;
            return (
              <div key={t.id}>
                <button
                  onClick={() => setExpandedTeaching(expanded ? null : t.id)}
                  className="w-full text-left rounded-[14px] p-5 transition-all"
                  style={{
                    background: expanded ? `${r?.color || 'var(--season-accent)'}08` : 'var(--c-surface)',
                    border: expanded
                      ? `1px solid ${r?.color || 'var(--season-accent)'}20`
                      : '1px solid var(--c-border)',
                    borderLeft: `3px solid ${r?.color || 'var(--season-accent)'}60`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-normal" style={{ fontSize: '17px' }}>{t.title}</h3>
                      <p className="font-body mt-0.5" style={{ fontSize: '11px', color: r?.color || 'var(--c-text-hint)' }}>
                        {t.author} · {r?.name || ''}
                      </p>
                    </div>
                    <span className="font-body" style={{ fontSize: '14px', color: 'var(--c-text-hint)' }}>
                      {expanded ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {expanded && (
                  <div className="px-5 py-4 page-in">
                    {t.body.split('\n').filter(Boolean).map((para, i) => (
                      <p key={i} className="font-body leading-relaxed mb-3" style={{ fontSize: '13.5px', color: 'var(--c-text-muted)', lineHeight: 1.75 }}>
                        {para}
                      </p>
                    ))}
                    {t.practice && (
                      <div className="rounded-[12px] p-4 mt-4" style={{ background: `${r?.color || 'var(--season-accent)'}08`, border: `1px solid ${r?.color || 'var(--season-accent)'}15` }}>
                        <p className="font-body mb-1" style={{ fontSize: '10px', color: r?.color || 'var(--season-accent)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                          Try this
                        </p>
                        <p className="font-body leading-relaxed" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>
                          {t.practice}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ─── RHYTHM ─── */}
      {innerTab === 'rhythm' && (
        <div>
          {/* Timer toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="px-5 py-3 rounded-full font-body tracking-wide"
              style={{
                fontSize: '13px', fontWeight: 500,
                color: 'var(--c-bg)',
                background: 'linear-gradient(135deg, var(--season-accent), #5A7D60)',
              }}
            >
              {showTimer ? 'Close timer' : 'Open timer'}
            </button>
            {showTimer && (
              <div className="card mt-3">
                <Timer />
              </div>
            )}
          </div>

          {/* Weekly schedule */}
          <div className="mb-10">
            {DAYS.map((day, i) => {
              const d = DAY_DATA[day];
              const isToday = i === todayIndex;
              return (
                <div
                  key={day}
                  className="rounded-[14px] p-5 mb-3"
                  style={{
                    background: isToday ? 'var(--c-surface-active)' : 'var(--c-surface)',
                    border: isToday ? '1px solid rgba(107,143,113,0.25)' : '1px solid var(--c-border)',
                    boxShadow: isToday ? '0 2px 20px rgba(107,143,113,0.08)' : 'none',
                  }}
                >
                  <div className="flex justify-between items-baseline mb-2 flex-wrap gap-1">
                    <span className="font-display" style={{ fontSize: '18px', fontWeight: isToday ? 500 : 300, color: isToday ? 'var(--c-text)' : 'var(--c-text-muted)' }}>
                      {day}
                      {isToday && <span className="ml-2 font-body" style={{ fontSize: '10px', color: 'var(--season-accent)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>today</span>}
                    </span>
                    <span className="font-display italic" style={{ fontSize: '13px', color: 'var(--c-text-faint)' }}>{d.theme}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {d.practices.map((p) => {
                      const pd = PRACTICE_DETAIL[p];
                      return (
                        <span key={p} className="inline-block font-body px-3 py-1 rounded-full"
                          style={{ fontSize: '11px', background: `${pd.color}15`, color: pd.color, border: `1px solid ${pd.color}25` }}>
                          {pd.icon} {pd.label}
                        </span>
                      );
                    })}
                  </div>
                  <p className="font-body italic leading-relaxed" style={{ fontSize: '12.5px', color: 'var(--c-text-faint)', lineHeight: 1.65 }}>{d.note}</p>
                </div>
              );
            })}
          </div>

          {/* When you miss a day */}
          <div className="text-center mb-10 px-4">
            <div className="mx-auto mb-5" style={{ width: '24px', height: '1px', background: 'var(--c-border)' }} />
            <h3 className="font-display font-light mb-3" style={{ fontSize: '18px', color: 'var(--season-accent)' }}>When you miss a day</h3>
            <p className="font-body italic leading-relaxed max-w-[360px] mx-auto" style={{ fontSize: '13.5px', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
              You will miss days. Do not add the missed practice to the next day. Do not make it mean anything about you. Simply{' '}
              <span className="not-italic" style={{ color: 'var(--season-accent)', fontWeight: 400 }}>begin again</span>.
            </p>
          </div>

          {/* Practice reference */}
          <h3 className="section-label">practice reference</h3>
          {Object.entries(PRACTICE_DETAIL).map(([key, p]) => (
            <div key={key} className="rounded-[14px] p-4 mb-3"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderLeft: `3px solid ${p.color}40` }}>
              <div className="flex items-baseline gap-3 mb-1.5">
                <span className="text-xl leading-none" style={{ color: p.color }}>{p.icon}</span>
                <div>
                  <div className="font-display font-normal" style={{ fontSize: '17px' }}>{p.label}</div>
                  <div className="font-body" style={{ fontSize: '11px', color: 'var(--c-text-hint)', letterSpacing: '0.06em' }}>{p.duration} · {p.time}</div>
                </div>
              </div>
              <p className="font-body leading-relaxed" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>{p.description}</p>
            </div>
          ))}

          {/* Permission slip */}
          <div className="p-6 rounded-[14px] text-center mt-6 mb-4" style={{ background: 'rgba(107,143,160,0.06)', border: '1px solid rgba(107,143,160,0.14)' }}>
            <div className="font-display font-light mb-3" style={{ fontSize: '17px', color: '#6B8FA0' }}>A permission slip</div>
            <div className="font-body leading-loose" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.9 }}>
              You have permission to start with less than you think you should.<br />
              You have permission to modify every practice on migraine days.<br />
              You have permission to let rest be the most radical thing you do.<br />
              You have permission to let this be enough.
            </div>
          </div>
        </div>
      )}

      {/* ─── JOURNEY (New Saints 8-Week) ─── */}
      {innerTab === 'journey' && (
        <div>
          <p className="font-body leading-relaxed mb-6" style={{ fontSize: '13.5px', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>
            An 8-week journey through the New Saints framework — from awakening to recommitment. Based on the teachings of Lama Rod Owens. Go at your own pace.
          </p>

          {/* Week selector */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {NEW_SAINTS_WEEKS.map((w, i) => (
              <button
                key={w.week}
                onClick={() => setActiveWeek(i)}
                className="py-3 px-2 rounded-[12px] text-center transition-all"
                style={{
                  border: i === activeWeek ? `2px solid ${w.color}` : '1px solid var(--c-border)',
                  background: i === activeWeek ? `${w.color}10` : 'var(--c-surface)',
                }}
              >
                <div className="font-body" style={{ fontSize: '14px', fontWeight: 600, color: i === activeWeek ? w.color : 'var(--c-text-faint)' }}>{w.week}</div>
                <div className="font-body" style={{ fontSize: '9px', color: i === activeWeek ? w.color : 'var(--c-text-hint)', letterSpacing: '0.04em' }}>
                  {w.title.split(' ')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Week content */}
          {(() => {
            const w = NEW_SAINTS_WEEKS[activeWeek];
            return (
              <div key={w.week} className="page-in mb-8">
                <div className="mb-4">
                  <h2 className="font-display font-normal" style={{ fontSize: '22px' }}>
                    Week {w.week}: {w.title}
                  </h2>
                  <p className="font-display italic font-light mt-1" style={{ fontSize: '14px', color: w.color }}>
                    {w.theme}
                  </p>
                </div>

                <div className="rounded-[14px] p-5 mb-5" style={{ background: `${w.color}08`, border: `1px solid ${w.color}15` }}>
                  <p className="font-body leading-relaxed" style={{ fontSize: '13.5px', color: 'var(--c-text-muted)', lineHeight: 1.75 }}>
                    {w.teaching}
                  </p>
                </div>

                <h3 className="section-label" style={{ color: w.color }}>practices this week</h3>
                <div className="space-y-2 mb-5">
                  {w.practices.split(', ').map((practiceStr) => {
                    const nameMatch = practiceStr.match(/^([^(]+)/);
                    const name = nameMatch ? nameMatch[1].trim() : practiceStr;
                    const schedule = practiceStr.replace(name, '').trim();
                    const guide = PRACTICE_GUIDES[name];
                    const isExpanded = expandedPractice === `journey-${name}`;
                    return (
                      <div key={practiceStr}>
                        <button
                          onClick={() => guide && setExpandedPractice(isExpanded ? null : `journey-${name}`)}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-left transition-all"
                          style={{
                            background: isExpanded ? `${w.color}08` : 'var(--c-surface)',
                            border: isExpanded ? `1px solid ${w.color}25` : '1px solid var(--c-border)',
                            cursor: guide ? 'pointer' : 'default',
                          }}
                        >
                          <span style={{ color: w.color }}>{guide?.icon || '◯'}</span>
                          <div className="flex-1 min-w-0">
                            <span className="font-body block" style={{ fontSize: '13px', color: isExpanded ? 'var(--c-text)' : 'var(--c-text-muted)', fontWeight: isExpanded ? 500 : 400 }}>{name}</span>
                            {schedule && (
                              <span className="font-body block" style={{ fontSize: '10px', color: 'var(--c-text-hint)' }}>{schedule}</span>
                            )}
                          </div>
                          {guide && (
                            <span className="font-body shrink-0" style={{ fontSize: '12px', color: 'var(--c-text-hint)' }}>
                              {isExpanded ? '−' : '+'}
                            </span>
                          )}
                        </button>
                        {isExpanded && guide && (
                          <div className="px-4 pt-3 pb-4 page-in">
                            <p className="font-body italic leading-relaxed mb-3" style={{ fontSize: '13px', color: w.color, lineHeight: 1.6 }}>
                              {guide.description}
                            </p>
                            <div className="rounded-[12px] p-4 mb-3" style={{ background: `${w.color}06`, border: `1px solid ${w.color}12` }}>
                              <p className="font-body mb-1" style={{ fontSize: '10px', color: w.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                                How to practice
                              </p>
                              <p className="font-body leading-relaxed" style={{ fontSize: '13px', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
                                {guide.instructions}
                              </p>
                            </div>
                            <p className="font-body" style={{ fontSize: '11px', color: 'var(--c-text-hint)', lineHeight: 1.5 }}>
                              <span style={{ fontWeight: 500 }}>When:</span> {guide.whenToUse}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <h3 className="section-label" style={{ color: w.color }}>reflection</h3>
                <div className="rounded-[14px] p-4 mb-5" style={{ background: `${w.color}06`, border: `1px solid ${w.color}12` }}>
                  <p className="font-display italic font-light leading-relaxed" style={{ fontSize: '16px', color: 'var(--c-text-muted)', lineHeight: 1.55 }}>
                    {w.reflection}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
