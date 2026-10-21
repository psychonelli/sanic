import React, { useState, useEffect } from 'react';
import {
  Moon,
  Footprints,
  Video,
  Radio,
  Siren,
  ShieldCheck,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Crosshair
} from 'lucide-react';

/* ---------------------------------------------------------
   Story scenes (each scene = one stage of the cartoon)
   --------------------------------------------------------- */
const scenes = [
  {
    title: 'All Quiet',
    tag: '24/7 Watch',
    icon: Moon,
    duration: 2800,
    caption: 'Our AI camera sweeps the perimeter 24/7 while the guard keeps watch from his post.',
    log: '[22:00:01] CAM-04 sweeping perimeter • Guard on post • Status: ALL CLEAR'
  },
  {
    title: 'Intruder Sneaks In',
    tag: 'Suspicious Motion',
    icon: Footprints,
    duration: 3000,
    caption: 'An intruder creeps toward the fence, thinking nobody is watching...',
    log: '[22:00:04] CAM-04 motion in Zone B • Analysing movement pattern...'
  },
  {
    title: 'CCTV Detects',
    tag: 'AI Recognition',
    icon: Video,
    duration: 2600,
    caption: 'The AI camera locks on, classifies a human intruder and sounds the alarm.',
    log: '[22:00:06] CAM-04 TARGET LOCKED • Human detected (98%) • Alarm triggered'
  },
  {
    title: 'Guard Alerted',
    tag: 'Instant Signal',
    icon: Radio,
    duration: 2600,
    caption: 'In under 0.3 seconds, the alert reaches the guard\'s radio with the exact location.',
    log: '[22:00:06] ALERT → Guard Unit 1 radio • Location: Zone B fence • Priority: HIGH'
  },
  {
    title: 'Guard Responds',
    tag: 'Rapid Intercept',
    icon: Siren,
    duration: 2600,
    caption: 'The trained guard rushes to the spot with a flashlight, guided by the live camera feed.',
    log: '[22:00:09] Guard Unit 1 en route • Flashlight on • CAM-04 tracking target'
  },
  {
    title: 'Threat Secured',
    tag: 'Zero Loss',
    icon: ShieldCheck,
    duration: 3400,
    caption: 'Intruder stopped, nothing stolen, and the whole incident is recorded as evidence.',
    log: '[22:00:14] THREAT NEUTRALISED • 0 assets lost • Footage archived • Report sent to client'
  }
];

/* Reusable cartoon speech bubble */
const Bubble = ({ x, y, w, text, show, color = '#ffffff', textColor = '#0f172a', tail = 'down' }) => (
  <g className={`cartoon-bubble ${show ? 'show' : ''}`}>
    <rect x={x - w / 2} y={y - 30} width={w} height={28} rx={12} fill={color} stroke="#0f172a" strokeWidth="2" />
    {tail === 'down' && (
      <polygon points={`${x - 7},${y - 3} ${x + 7},${y - 3} ${x},${y + 8}`} fill={color} stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
    )}
    {/* hide stroke seam between tail and bubble */}
    {tail === 'down' && <rect x={x - 8} y={y - 5} width={16} height={4} fill={color} />}
    <text x={x} y={y - 11} textAnchor="middle" fontSize="13" fontWeight="800" fill={textColor} fontFamily="Outfit, sans-serif">
      {text}
    </text>
  </g>
);

export default function GuardCCTVDefenseAnimation() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Advance scenes using each scene's own duration
  useEffect(() => {
    if (!isPlaying) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % scenes.length), scenes[step].duration);
    return () => clearTimeout(t);
  }, [step, isPlaying]);

  const scene = scenes[step];

  // ---- Derived animation state ----
  const detected = step >= 2 && step <= 4;
  const alarm = step >= 2 && step <= 4;
  const intruderX = step === 0 ? -70 : 250;
  const guardX = step >= 4 ? 362 : 668;
  const intruderWalking = step === 1;
  const guardRunning = step === 4;
  const guardHand = step <= 2 ? 'coffee' : step === 3 ? 'radio' : 'flashlight';
  const handsUp = step === 5;

  return (
    <section className="defense-animation-section" aria-label="Cartoon: how CCTV and guards work together">
      <div className="defense-header text-center">
        <div className="trust-pill">
          <Zap size={16} />
          <span>CCTV + GUARD TEAMWORK &bull; ZERO BLIND SPOTS</span>
        </div>
        <h2 className="section-title">
          How Sanic Secures Your Facility: <br />
          <span className="gold-gradient-text">The Camera Spots It. The Guard Stops It.</span>
        </h2>
        <p className="section-subtitle">
          Watch how our AI CCTV detects an intruder and instantly alerts the on-site guard, who stops the threat in seconds.
        </p>
      </div>

      <div className="simulation-container">
        {/* Scene selector */}
        <div className="simulation-steps-nav six-steps">
          {scenes.map((s, idx) => {
            const Icon = s.icon;
            const isActive = idx === step;
            return (
              <button
                key={s.title}
                id={`cartoon-step-${idx + 1}`}
                onClick={() => { setStep(idx); setIsPlaying(false); }}
                className={`step-nav-btn ${isActive ? 'active' : ''}`}
                aria-label={`Show scene: ${s.title}`}
              >
                <div className="step-btn-icon"><Icon size={18} /></div>
                <div className="step-btn-text">
                  <span className="step-btn-label">{idx + 1}. {s.title}</span>
                  <span className="step-btn-tag">{s.tag}</span>
                </div>
                {isActive && isPlaying && (
                  <div className="step-progress-indicator" style={{ animationDuration: `${s.duration}ms` }}></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="simulation-canvas">
          <div className="canvas-status-bar">
            <div className="canvas-live-pill">
              <span className="live-pulse-dot"></span>
              <span>LIVE CARTOON SIMULATION</span>
            </div>
            <div className="canvas-playback-controls">
              <button id="cartoon-play-toggle" onClick={() => setIsPlaying(!isPlaying)} className="canvas-control-btn">
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button id="cartoon-reset" onClick={() => { setStep(0); setIsPlaying(true); }} className="canvas-control-btn">
                <RotateCcw size={14} />
                <span>Replay</span>
              </button>
            </div>
          </div>

          {/* ===================== THE CARTOON ===================== */}
          <div className="cartoon-stage">
            <svg viewBox="0 0 800 360" className="cartoon-svg" role="img" aria-label={`Scene ${step + 1}: ${scene.title}`}>
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#030712" />
                  <stop offset="100%" stopColor="#13234a" />
                </linearGradient>
                <linearGradient id="beamCalm" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="beamAlert" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f87171" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.08" />
                </linearGradient>
                <linearGradient id="torchGrad" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#fde68a" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* --- Night sky --- */}
              <rect width="800" height="360" fill="url(#skyGrad)" />
              {[[60, 40], [150, 80], [260, 30], [340, 70], [600, 40], [700, 90], [760, 30], [420, 25]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={i % 2 ? 1.6 : 1.1} fill="#fff" className="twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
              <circle cx="110" cy="60" r="22" fill="#fef3c7" />
              <circle cx="120" cy="54" r="20" fill="#0a1328" />

              {/* --- Building --- */}
              <rect x="500" y="130" width="150" height="160" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              <rect x="500" y="122" width="150" height="10" fill="#334155" />
              {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
                <rect key={`${r}-${c}`} x={515 + c * 45} y={145 + r * 40} width="28" height="24" rx="2"
                  fill={(r + c) % 3 === 0 ? '#fbbf24' : '#0f172a'} opacity={(r + c) % 3 === 0 ? 0.85 : 1} />
              )))}
              <rect x="540" y="258" width="70" height="32" fill="#0f172a" />
              <text x="575" y="118" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fbbf24" fontFamily="Outfit, sans-serif">SANIC PROTECTED</text>

              {/* --- Guard booth --- */}
              <rect x="690" y="190" width="100" height="100" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2" />
              <rect x="682" y="180" width="116" height="14" rx="3" fill="#fbbf24" />
              <text x="740" y="191" textAnchor="middle" fontSize="10" fontWeight="900" fill="#0f172a" fontFamily="Outfit, sans-serif">SECURITY</text>
              {/* Monitor inside booth */}
              <rect x="705" y="205" width="70" height="42" rx="4" fill="#0b1220" stroke="#475569" strokeWidth="2" />
              {alarm ? (
                <g className="blink">
                  <rect x="709" y="209" width="62" height="34" fill="#7f1d1d" />
                  <text x="740" y="231" textAnchor="middle" fontSize="11" fontWeight="900" fill="#fecaca" fontFamily="Outfit, sans-serif">ALERT!</text>
                </g>
              ) : (
                <g>
                  <rect x="709" y="209" width="62" height="34" fill="#0c4a6e" />
                  <text x="740" y="230" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7dd3fc" fontFamily="Outfit, sans-serif">CAM-04 OK</text>
                </g>
              )}
              {/* Siren beacon on roof */}
              <rect x="732" y="168" width="16" height="12" rx="3" fill="#475569" />
              <circle cx="740" cy="166" r="7" className={alarm ? 'beacon-on' : ''} fill={alarm ? '#ef4444' : '#64748b'} />

              {/* --- Ground --- */}
              <rect x="0" y="290" width="800" height="70" fill="#0f1a12" />
              <rect x="0" y="290" width="800" height="4" fill="#1f3a24" />

              {/* --- Fence --- */}
              <g>
                <rect x="120" y="244" width="300" height="5" fill="#64748b" />
                <rect x="120" y="268" width="300" height="5" fill="#64748b" />
                {Array.from({ length: 9 }).map((_, i) => (
                  <polygon key={i} points={`${124 + i * 37},290 ${124 + i * 37},236 ${128 + i * 37},230 ${132 + i * 37},236 ${132 + i * 37},290`} fill="#94a3b8" />
                ))}
              </g>

              {/* --- CCTV pole --- */}
              <rect x="466" y="110" width="8" height="180" fill="#475569" />
              <rect x="458" y="284" width="24" height="8" rx="2" fill="#334155" />

              {/* --- CCTV camera + beam (sweeps, then locks) --- */}
              <g className={detected ? 'cam-locked' : 'cam-sweep'}>
                <polygon points="438,134 172,292 335,292" fill={detected ? 'url(#beamAlert)' : 'url(#beamCalm)'} />
                <g transform="rotate(-36 470 110)">
                  <rect x="432" y="100" width="40" height="22" rx="5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
                  <rect x="422" y="97" width="16" height="28" rx="4" fill="#cbd5e1" stroke="#0f172a" strokeWidth="2" />
                  <circle cx="427" cy="111" r="6" fill="#0f172a" />
                  <circle cx="427" cy="111" r="3" fill={detected ? '#ef4444' : '#38bdf8'} />
                  <circle cx="464" cy="106" r="2.5" fill="#ef4444" className="blink" />
                </g>
              </g>
              <circle cx="470" cy="110" r="5" fill="#334155" />

              {/* Camera speech bubble */}
              <Bubble x={430} y={70} w={160} text="⚠ Motion detected!" show={step === 2} color="#fee2e2" textColor="#991b1b" />

              {/* --- AI detection box around intruder --- */}
              {detected && (
                <g className="blink-slow">
                  <path d="M222 210 V196 H236 M266 196 H280 V210 M280 280 V294 H266 M236 294 H222 V280"
                    stroke="#ef4444" strokeWidth="3" fill="none" />
                  <rect x="222" y="180" width="96" height="15" rx="3" fill="#ef4444" />
                  <text x="270" y="191" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="Outfit, sans-serif">INTRUDER 98%</text>
                </g>
              )}

              {/* --- Radio signal: camera -> guard --- */}
              {step === 3 && (
                <g>
                  <path d="M445 100 Q 570 40 650 205" stroke="#fbbf24" strokeWidth="3" fill="none" className="signal-path" />
                  <circle r="6" fill="#fbbf24" className="signal-dot">
                    <animateMotion dur="0.9s" repeatCount="indefinite" path="M445 100 Q 570 40 650 205" />
                  </circle>
                </g>
              )}

              {/* ===================== INTRUDER ===================== */}
              <g transform="translate(0 290)">
                <g
                  className={`character ${intruderWalking ? 'walking sneaking' : ''}`}
                  style={{
                    transform: `translateX(${intruderX}px)`,
                    transition: step === 0 ? 'none' : 'transform 2.6s linear'
                  }}
                >
                  <ellipse cx="0" cy="2" rx="20" ry="4" fill="#000" opacity="0.4" />
                  <g className="bob">
                    {/* legs */}
                    <g className="leg-a">
                      <rect x="-9" y="-30" width="7" height="30" rx="3" fill="#111827" />
                      <rect x="-11" y="-4" width="12" height="5" rx="2" fill="#000" />
                    </g>
                    <g className="leg-b">
                      <rect x="2" y="-30" width="7" height="30" rx="3" fill="#1f2937" />
                      <rect x="1" y="-4" width="12" height="5" rx="2" fill="#000" />
                    </g>
                    {/* loot bag */}
                    <circle cx="-17" cy="-50" r="13" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                    <text x="-17" y="-45" textAnchor="middle" fontSize="14" fontWeight="900" fill="#fde68a">$</text>
                    {/* body */}
                    <rect x="-13" y="-63" width="26" height="36" rx="9" fill="#27272a" stroke="#000" strokeWidth="1.5" />
                    {/* arms */}
                    {handsUp ? (
                      <g stroke="#27272a" strokeWidth="7" strokeLinecap="round">
                        <line x1="-8" y1="-58" x2="-15" y2="-98" />
                        <line x1="9" y1="-58" x2="17" y2="-98" />
                      </g>
                    ) : (
                      <line x1="5" y1="-56" x2="18" y2="-40" stroke="#27272a" strokeWidth="7" strokeLinecap="round" />
                    )}
                    {/* head */}
                    <circle cx="2" cy="-77" r="13" fill="#e0ac69" stroke="#000" strokeWidth="1.5" />
                    <rect x="-11" y="-82" width="27" height="9" rx="3" fill="#0a0a0a" />
                    <circle cx="6" cy="-78" r={step >= 4 ? 3.5 : 2.5} fill="#fff" />
                    <circle cx="12" cy="-78" r={step >= 4 ? 3.5 : 2.5} fill="#fff" />
                    <circle cx="7" cy="-78" r="1.2" fill="#000" />
                    <circle cx="13" cy="-78" r="1.2" fill="#000" />
                    {/* beanie */}
                    <path d="M -11 -81 A 13 13 0 0 1 15 -81 Z" fill="#111" />
                    <circle cx="2" cy="-92" r="3.5" fill="#dc2626" />
                    {/* sweat drop when caught */}
                    {step >= 4 && <path d="M18 -90 q 4 7 0 9 q -4 -2 0 -9 z" fill="#7dd3fc" className="sweat" />}
                  </g>
                  <Bubble x={-20} y={-108} w={110} text="I give up! 😰" show={step === 5} />
                  <Bubble x={-38} y={-104} w={80} text="Uh-oh!" show={step === 4} />
                </g>
              </g>

              {/* ===================== GUARD ===================== */}
              <g transform="translate(0 290)">
                <g
                  className={`character ${guardRunning ? 'running' : ''}`}
                  style={{
                    transform: `translateX(${guardX}px)`,
                    transition: step === 0 ? 'none' : 'transform 1.8s cubic-bezier(0.45, 0, 0.25, 1)'
                  }}
                >
                  <ellipse cx="0" cy="2" rx="22" ry="4" fill="#000" opacity="0.4" />

                  {/* flashlight beam */}
                  {guardHand === 'flashlight' && (
                    <polygon points="-40,-60 -105,-90 -105,-25" fill="url(#torchGrad)" className="torch-flicker" />
                  )}

                  <g className="bob">
                    {/* legs */}
                    <g className="leg-a">
                      <rect x="-10" y="-32" width="8" height="32" rx="3" fill="#172554" />
                      <rect x="-15" y="-4" width="13" height="5" rx="2" fill="#000" />
                    </g>
                    <g className="leg-b">
                      <rect x="2" y="-32" width="8" height="32" rx="3" fill="#1e3a8a" />
                      <rect x="-3" y="-4" width="13" height="5" rx="2" fill="#000" />
                    </g>
                    {/* back arm */}
                    <line x1="8" y1="-60" x2="12" y2="-36" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />
                    {/* torso */}
                    <rect x="-16" y="-70" width="32" height="42" rx="9" fill="#2563eb" stroke="#0f172a" strokeWidth="1.5" />
                    <rect x="-16" y="-36" width="32" height="5" fill="#0f172a" />
                    <rect x="-3" y="-36" width="6" height="5" fill="#fbbf24" />
                    <polygon points="-7,-60 -4,-54 -10,-54" fill="#fbbf24" />
                    <circle cx="-7" cy="-56" r="4" fill="#fbbf24" />
                    <text x="5" y="-48" fontSize="6" fontWeight="900" fill="#fbbf24" fontFamily="Outfit, sans-serif">SANIC</text>

                    {/* head */}
                    <circle cx="-2" cy="-84" r="14" fill="#f1c27d" stroke="#0f172a" strokeWidth="1.5" />
                    <circle cx="9" cy="-83" r="3" fill="#e0ac69" />
                    <circle cx="-9" cy="-85" r={step === 3 ? 3 : 2} fill="#111" />
                    {step === 3 ? (
                      <ellipse cx="-10" cy="-75" rx="3" ry="3.5" fill="#7f1d1d" />
                    ) : (
                      <path d="M -14 -77 Q -9 -73 -5 -77" stroke="#111" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    )}
                    {/* cap */}
                    <rect x="-16" y="-102" width="30" height="13" rx="6" fill="#1e3a8a" stroke="#0f172a" strokeWidth="1.5" />
                    <rect x="-26" y="-92" width="16" height="4" rx="2" fill="#0f172a" />
                    <circle cx="-3" cy="-96" r="3" fill="#fbbf24" />

                    {/* front arm + held item */}
                    {guardHand === 'coffee' && (
                      <g>
                        <line x1="-8" y1="-60" x2="-20" y2="-70" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
                        <rect x="-30" y="-82" width="11" height="13" rx="2" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
                        <path d="M-27 -86 q 3 -5 0 -10 M-22 -86 q 3 -5 0 -10" stroke="#cbd5e1" strokeWidth="1.5" fill="none" className="steam" />
                      </g>
                    )}
                    {guardHand === 'radio' && (
                      <g>
                        <line x1="-8" y1="-60" x2="-16" y2="-78" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
                        <rect x="-23" y="-96" width="9" height="18" rx="2" fill="#111" className="radio-shake" />
                        <line x1="-16" y1="-96" x2="-16" y2="-106" stroke="#111" strokeWidth="2" />
                        <circle cx="-16" cy="-107" r="2" fill="#ef4444" className="blink" />
                        {/* radio waves */}
                        <path d="M-30 -100 q -6 8 0 16" stroke="#fbbf24" strokeWidth="2.5" fill="none" className="radio-wave" />
                        <path d="M-37 -104 q -9 12 0 24" stroke="#fbbf24" strokeWidth="2.5" fill="none" className="radio-wave" style={{ animationDelay: '0.3s' }} />
                      </g>
                    )}
                    {guardHand === 'flashlight' && (
                      <g>
                        <line x1="-8" y1="-60" x2="-28" y2="-60" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
                        <rect x="-42" y="-64" width="14" height="8" rx="2" fill="#374151" stroke="#0f172a" strokeWidth="1" />
                        <rect x="-44" y="-65" width="4" height="10" rx="1" fill="#fde68a" />
                      </g>
                    )}
                  </g>

                  <Bubble x={-5} y={-112} w={130} text="❗ Alert received!" show={step === 3} color="#fef3c7" />
                  <Bubble x={25} y={-112} w={130} text="Stop! Security!" show={step === 4} />
                  <Bubble x={20} y={-112} w={150} text="Caught on camera! 👮" show={step === 5} color="#dcfce7" textColor="#166534" />
                </g>
              </g>

              {/* Red alarm flash over the whole scene */}
              {alarm && <rect width="800" height="360" fill="#ef4444" className="alarm-flash" pointerEvents="none" />}

              {/* Camera HUD */}
              <g fontFamily="'Courier New', monospace" fontSize="11" fontWeight="700">
                <circle cx="22" cy="20" r="5" fill="#ef4444" className="blink" />
                <text x="32" y="24" fill="#f8fafc">REC • CAM-04 • ZONE B</text>
                <text x="778" y="24" fill={alarm ? '#fca5a5' : '#86efac'} textAnchor="end">
                  {alarm ? 'STATUS: INTRUSION' : step === 5 ? 'STATUS: SECURED' : 'STATUS: CLEAR'}
                </text>
              </g>

              {/* Secured badge */}
              {step === 5 && (
                <g className="secured-badge">
                  <rect x="250" y="44" width="300" height="40" rx="20" fill="#065f46" stroke="#34d399" strokeWidth="2.5" />
                  <text x="400" y="70" textAnchor="middle" fontSize="16" fontWeight="900" fill="#ecfdf5" fontFamily="Outfit, sans-serif">
                    ✓ THREAT SECURED • 0 LOSS
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Caption + terminal log */}
          <div className="simulation-current-card">
            <div className="current-step-badge">
              <span>SCENE {step + 1} OF {scenes.length}: {scene.title}</span>
            </div>
            <h3 className="current-step-heading">{scene.caption}</h3>
            <div className="terminal-feed">
              <span className="terminal-prompt">$ sanic-tactical-ops &gt;</span>
              <span className="terminal-text" key={step}>{scene.log}</span>
            </div>
          </div>
        </div>

        {/* Why CCTV + Guard together */}
        <div className="synergy-pillars-grid">
          <div className="synergy-pillar">
            <div className="synergy-pillar-header">
              <Crosshair size={20} color="#fbbf24" />
              <h4>Cameras Never Blink</h4>
            </div>
            <p>AI CCTV watches every fence, gate and rooftop 24/7, so nothing gets missed when a guard looks away.</p>
          </div>
          <div className="synergy-pillar">
            <div className="synergy-pillar-header">
              <Zap size={20} color="#fbbf24" />
              <h4>Guards Take Action</h4>
            </div>
            <p>A camera alone only records a crime. Our trained guards get there fast and stop it as it happens.</p>
          </div>
          <div className="synergy-pillar">
            <div className="synergy-pillar-header">
              <ShieldCheck size={20} color="#fbbf24" />
              <h4>Proof for Every Incident</h4>
            </div>
            <p>Each incident is saved with camera footage, guard body-cam video and a written report for your records.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
