export type Algorithm = "ETC" | "UCB";
export type Simulation = { pulls: number[]; regret: number[]; selections: number[] };

export const armMeans = [0.35, 0.5, 0.62, 0.45];
export const horizon = 120;

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

export function simulateBandit(algorithm: Algorithm): Simulation {
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
