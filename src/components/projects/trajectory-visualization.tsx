"use client";

import { useEffect, useMemo, useState } from "react";

const trajectory = [
  [52, 298], [70, 287], [89, 279], [108, 262], [126, 247], [148, 240], [169, 226],
  [187, 206], [209, 197], [232, 184], [254, 165], [278, 154], [302, 148], [326, 132],
  [350, 116], [376, 111], [402, 118], [428, 107], [454, 91], [481, 84], [507, 91],
  [533, 78], [558, 64], [586, 70], [612, 58], [642, 67], [670, 48],
] as const;

export function TrajectoryVisualization() {
  const [progress, setProgress] = useState<number>(trajectory.length);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= trajectory.length) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 110);

    return () => window.clearInterval(timer);
  }, [playing]);

  const visiblePoints = useMemo(() => trajectory.slice(0, progress), [progress]);
  const path = visiblePoints.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x} ${y}`).join(" ");

  const play = () => {
    if (progress >= trajectory.length) setProgress(1);
    setPlaying(true);
  };

  return (
    <div className="trajectory-demo forest-demo-panel">
      <div className="forest-demo-header">
        <div>
          <span>TRAJECTORY VIEWER</span>
          <strong>Illustrative demonstration</strong>
        </div>
        <span>SAMPLE DATA</span>
      </div>

      <svg viewBox="0 0 720 350" role="img" aria-label={`Illustrative camera trajectory showing ${progress} of ${trajectory.length} positions`}>
        <defs>
          <pattern id="trajectory-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" />
          </pattern>
        </defs>
        <rect width="720" height="350" className="trajectory-field" />
        <rect width="720" height="350" fill="url(#trajectory-grid)" className="trajectory-grid" />
        <path d="M36 318H694M36 318V28" className="trajectory-axis" />
        <path d={path} className="trajectory-path" />
        {visiblePoints.map(([x, y], index) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={index === visiblePoints.length - 1 ? 6 : 3} className={index === visiblePoints.length - 1 ? "trajectory-current" : "trajectory-point"} />
            {index % 5 === 0 && <path d={`M${x} ${y}l10 -6`} className="trajectory-orientation" />}
          </g>
        ))}
        <text x="648" y="338">X / m</text>
        <text x="12" y="28">Z / m</text>
      </svg>

      <div className="trajectory-controls">
        <button onClick={play} type="button">{playing ? "Playing…" : "Play trajectory"}</button>
        <button onClick={() => { setPlaying(false); setProgress(1); }} type="button">Reset</button>
        <label>
          <span className="sr-only">Trajectory position</span>
          <input
            aria-label="Trajectory position"
            max={trajectory.length}
            min="1"
            onChange={(event) => { setPlaying(false); setProgress(Number(event.target.value)); }}
            type="range"
            value={progress}
          />
        </label>
        <output>{progress.toString().padStart(2, "0")} / {trajectory.length}</output>
      </div>
      <p className="forest-demo-note">Sample positions illustrate trajectory playback only; they are not KITTI evaluation results.</p>
    </div>
  );
}
