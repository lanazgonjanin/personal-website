"use client";

import { useState } from "react";

type Algorithm = "ETC" | "UCB";
type Simulation = { pulls: number[]; regret: number[]; selections: number[] };

const armMeans = [0.35, 0.5, 0.62, 0.45];
const horizon = 120;

function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function argMax(values: number[]) {
  return values.reduce((best, value, index) => value > values[best] ? index : best, 0);
}

function simulate(algorithm: Algorithm): Simulation {
  const random = seededRandom(2026);
  const counts = armMeans.map(() => 0);
  const rewards = armMeans.map(() => 0);
  const selections: number[] = [];
  const regret: number[] = [];
  const bestMean = Math.max(...armMeans);
  let cumulativeRegret = 0;

  for (let round = 0; round < horizon; round += 1) {
    let arm: number;

    if (algorithm === "ETC") {
      const explorationRounds = armMeans.length * 6;
      arm = round < explorationRounds
        ? round % armMeans.length
        : argMax(rewards.map((reward, index) => reward / counts[index]));
    } else if (round < armMeans.length) {
      arm = round;
    } else {
      arm = argMax(armMeans.map((_, index) => (
        rewards[index] / counts[index] + Math.sqrt((2 * Math.log(round + 1)) / counts[index])
      )));
    }

    const reward = random() < armMeans[arm] ? 1 : 0;
    counts[arm] += 1;
    rewards[arm] += reward;
    selections.push(arm);
    cumulativeRegret += bestMean - armMeans[arm];
    regret.push(cumulativeRegret);
  }

  return { pulls: counts, regret, selections };
}

export function BanditDemo() {
  const [algorithm, setAlgorithm] = useState<Algorithm>("UCB");
  const [result, setResult] = useState<Simulation | null>(null);

  const maxRegret = result ? Math.max(1, ...result.regret) : 1;
  const regretPath = result?.regret.map((value, index) => {
    const x = 34 + (index / (horizon - 1)) * 632;
    const y = 226 - (value / maxRegret) * 178;
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") ?? "";

  return (
    <div className="bandit-demo forest-demo-panel">
      <div className="forest-demo-header">
        <div>
          <span>SEEDED BANDIT LAB</span>
          <strong>Bernoulli rewards · 120 rounds</strong>
        </div>
        <span>SEED 2026</span>
      </div>

      <div className="bandit-controls">
        <label>
          Algorithm
          <select onChange={(event) => { setAlgorithm(event.target.value as Algorithm); setResult(null); }} value={algorithm}>
            <option value="ETC">Explore-Then-Commit</option>
            <option value="UCB">Upper Confidence Bound</option>
          </select>
        </label>
        <button onClick={() => setResult(simulate(algorithm))} type="button">Run simulation</button>
        <button onClick={() => setResult(null)} type="button">Reset</button>
      </div>

      <div className="bandit-chart" aria-live="polite">
        <div className="bandit-chart-heading">
          <span>CUMULATIVE EXPECTED REGRET</span>
          <output>{result ? result.regret.at(-1)?.toFixed(2) : "—"}</output>
        </div>
        <svg viewBox="0 0 700 250" role="img" aria-label={result ? `${algorithm} cumulative expected regret over 120 rounds` : "Run the simulation to view cumulative expected regret"}>
          <path d="M34 226H676M34 226V30" className="bandit-axis" />
          {[0, 1, 2, 3, 4].map((step) => <path key={step} d={`M34 ${226 - step * 44.5}H676`} className="bandit-guide" />)}
          {result && <path d={regretPath} className="bandit-regret-path" />}
          <text x="34" y="244">0</text><text x="636" y="244">120 rounds</text>
        </svg>
      </div>

      <div className="bandit-pulls">
        {armMeans.map((mean, index) => {
          const pulls = result?.pulls[index] ?? 0;
          return (
            <div key={mean}>
              <span>A{index + 1}</span>
              <div><i style={{ width: result ? `${(pulls / horizon) * 100}%` : "0%" }} /></div>
              <strong>{pulls}</strong>
            </div>
          );
        })}
      </div>

      <p className="bandit-sequence">
        <span>RECENT SELECTIONS</span>
        {result ? result.selections.slice(-24).map((arm, index) => <i key={`${arm}-${index}`}>A{arm + 1}</i>) : <em>Run a simulation to populate the sequence.</em>}
      </p>
      <p className="forest-demo-note">Assumptions: four stationary Bernoulli arms with means 0.35, 0.50, 0.62, and 0.45. ETC explores each arm six times.</p>
    </div>
  );
}
