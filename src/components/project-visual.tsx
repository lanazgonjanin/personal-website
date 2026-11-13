type VisualKind = "motion" | "signal" | "language" | "bandit" | "graph" | "memory";

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  if (kind === "motion") {
    return (
      <svg className="project-art" viewBox="0 0 760 470" role="img" aria-label="Camera trajectory through tracked visual landmarks">
        <defs><pattern id="motion-grid-shared" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M38 0H0V38" /></pattern></defs>
        <rect width="760" height="470" rx="16" className="art-field blue" />
        <rect width="760" height="470" rx="16" fill="url(#motion-grid-shared)" className="art-grid" />
        <path className="art-path" d="M66 373C156 368 172 264 247 272s92 68 158-17 101-117 166-74 63 19 128-72" />
        {["118,236", "194,104", "300,348", "406,118", "538,291", "663,194"].map((point) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} cx={cx} cy={cy} r="6" className="art-point" />;
        })}
        <circle cx="406" cy="118" r="15" className="art-selection" />
        <text x="28" y="38">FRAME SEQUENCE / ESTIMATED PATH</text>
      </svg>
    );
  }

  if (kind === "signal") {
    return (
      <svg className="project-art" viewBox="0 0 620 350" role="img" aria-label="Electrocardiogram waveform sampled from a measurement grid">
        <defs><pattern id="signal-grid-shared" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" /></pattern></defs>
        <rect width="620" height="350" rx="16" className="art-field pink" />
        <rect width="620" height="350" rx="16" fill="url(#signal-grid-shared)" className="art-grid pink-grid" />
        <path className="signal-path" d="M20 192h76l17-12 15 13 16-2 15-48 18 108 18-160 22 101h66l16-12 15 13 18-1 17-49 18 108 18-158 21 99h70l15-12 16 13 17-1 18-47 18 103 18-135" />
        <text x="28" y="38">PAPER → STRUCTURED SIGNAL</text>
      </svg>
    );
  }

  if (kind === "language") {
    return (
      <div className="project-art procedural-art language" role="img" aria-label="Conversation turns moving between two languages">
        <span>HELLO</span><i aria-hidden="true">↔</i><span>BONJOUR</span>
        <p>REAL-TIME CONVERSATION</p>
      </div>
    );
  }

  return (
    <div className={`project-art procedural-art ${kind}`} role="img" aria-label={`${kind} project concept diagram`}>
      {kind === "bandit" && [42, 68, 34, 86, 55].map((height, index) => <span key={height} style={{ height: `${height}%` }}><i>A{index + 1}</i></span>)}
      {kind === "graph" && <><span className="node n1">A</span><span className="node n2">B</span><span className="node n3">C</span><span className="node n4">D</span><i className="edge e1" /><i className="edge e2" /><i className="edge e3" /><i className="edge e4" /></>}
      {kind === "memory" && ["VPN", "PAGE TABLE", "PFN", "PHYSICAL"].map((label) => <span key={label}>{label}</span>)}
    </div>
  );
}
