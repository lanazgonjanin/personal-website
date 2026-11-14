"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import type { Project } from "@/data/projects";

import { BanditDemo } from "./bandit-demo";
import { simulateBandit } from "./bandit-simulation";
import { TrajectoryVisualization } from "./trajectory-visualization";

const projectOrder = [
  "parallax",
  "multi-armed-bandits",
  "ekgram",
  "shortest-path-algorithms",
  "virtual-memory-simulator",
  "polyglot",
];

const parallaxSteps = [
  ["Feature detection and matching", "Detect ORB features in consecutive camera frames and match corresponding points to identify visual changes."],
  ["Motion estimation", "Use RANSAC-based geometry and pose recovery to estimate the camera's relative rotation and translation direction, then accumulate these estimates into a trajectory."],
  ["Scale ambiguity", "Fit a global scale factor using KITTI ground-truth positions to address monocular scale ambiguity and evaluate the estimated trajectory in metres."],
  ["Temporal rotation correction", "Identify inconsistent rotation estimates using neighbouring frames and correct them to reduce accumulated trajectory drift."],
] as const;

const banditDescription =
  "A working comparison of Explore-Then-Commit and Upper Confidence Bound on the same seeded reward environment.";

const previewBanditResults = {
  ETC: simulateBandit("ETC").regret,
  UCB: simulateBandit("UCB").regret,
};

function banditPreviewPath(values: number[]) {
  const maximum = Math.max(...previewBanditResults.ETC, ...previewBanditResults.UCB);
  return values.map((value, index) => {
    const x = 25 + (index / (values.length - 1)) * 250;
    const y = 78 - (value / maximum) * 58;
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.slug === "parallax") {
    return (
      <div className="explorer-preview explorer-preview-plot" aria-hidden="true">
        <Image
          alt=""
          height={1554}
          sizes="(min-width: 900px) 40vw, 90vw"
          src="/images/parallax-temporal-rotation-correction-1000.png"
          width={1547}
        />
      </div>
    );
  }

  if (project.slug === "multi-armed-bandits") {
    return (
      <div className="explorer-preview explorer-preview-bandit" aria-hidden="true">
        <div className="preview-chart-heading"><span>cumulative expected regret</span><b>120 rounds · seed 2026</b></div>
        <svg viewBox="0 0 300 92">
          <path className="preview-axis" d="M25 14V78H282" />
          <path className="preview-grid" d="M25 30H282M25 46H282M25 62H282M89 14V78M153 14V78M217 14V78" />
          <path className="preview-bandit-etc" d={banditPreviewPath(previewBanditResults.ETC)} />
          <path className="preview-bandit-ucb" d={banditPreviewPath(previewBanditResults.UCB)} />
          <text x="31" y="25">ETC</text><text x="31" y="38">UCB</text>
        </svg>
      </div>
    );
  }

  if (project.slug === "ekgram") {
    return (
      <div className="explorer-preview explorer-preview-ekgram" aria-hidden="true">
        <span>illustrative ECG signal</span>
        <svg viewBox="0 0 360 80"><path d="M0 43h68l9-9 9 18 12-42 15 61 14-28h38l8-8 10 16 11-37 14 55 15-26h137" /></svg>
      </div>
    );
  }

  if (project.slug === "shortest-path-algorithms") {
    return (
      <div className="explorer-preview explorer-preview-graph" aria-hidden="true">
        <svg viewBox="0 0 300 100">
          <path className="graph-edges" d="M34 70L92 24l64 48 55-48 55 43M92 24h119M156 72l110-5" />
          <path className="graph-route" d="M34 70L92 24h119l55 43" />
          <g><circle className="graph-start" cx="34" cy="70" r="8"/><circle cx="92" cy="24" r="7"/><circle cx="156" cy="72" r="7"/><circle cx="211" cy="24" r="7"/><circle className="graph-goal" cx="266" cy="67" r="8"/></g>
          <text x="20" y="91">start</text><text x="250" y="91">goal</text>
        </svg>
        <span>illustrative weighted path</span>
      </div>
    );
  }

  if (project.slug === "virtual-memory-simulator") {
    return (
      <div className="explorer-preview explorer-preview-memory" aria-hidden="true">
        <span className="memory-address">virtual<br/><b>0x4A3F</b></span><i>→</i><span className="memory-box">TLB</span><i>→</i><span className="memory-box">page table</span><i>→</i><span className="memory-address">physical<br/><b>0x1C3F</b></span>
      </div>
    );
  }

  if (project.slug === "polyglot") {
    return (
      <div className="explorer-preview explorer-preview-polyglot" aria-hidden="true">
        <div className="polyglot-status"><i/><span>live language session</span></div>
        <p><small>English</small>Hello — shall we practise?</p>
        <p><small>Français</small>Oui, commençons.</p>
        <div className="polyglot-wave"><i/><i/><i/><i/><i/><i/><i/><i/><span>streaming audio</span></div>
      </div>
    );
  }

  return null;
}

function ProjectDetail({ project, onEnlargePlot }: { project: Project; onEnlargePlot: () => void }) {
  const displayTitle = project.slug === "multi-armed-bandits"
    ? "Sequential Decision-Making with Multi-Armed Bandits"
    : project.title;
  const description = project.slug === "multi-armed-bandits" ? banditDescription : project.summary;

  return (
    <div className="explorer-detail-body">
      <header className="explorer-detail-intro">
        <h2 id="project-dialog-title">{displayTitle}</h2>
        <p>{project.subtitle}</p>
      </header>

      <div className="explorer-detail-summary">
        <p>{description}</p>
        <ul className="forest-tag-list" aria-label={`${project.title} technologies and topics`}>
          {project.topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </div>

      {project.slug === "parallax" ? (
        <>
          <section className="explorer-detail-section" aria-labelledby="parallax-method-title">
            <h3 id="parallax-method-title">How it works</h3>
            <ol className="forest-pipeline-steps">
              {parallaxSteps.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </section>
          <TrajectoryVisualization onEnlarge={onEnlargePlot} />
        </>
      ) : project.slug === "multi-armed-bandits" ? (
        <>
          <section className="explorer-detail-section" aria-labelledby="bandit-method-title">
            <h3 id="bandit-method-title">Comparison method</h3>
            <ul className="explorer-highlight-list">
              <li><strong>ETC</strong><span>Explores every arm for a fixed number of rounds, then commits to the highest estimated reward.</span></li>
              <li><strong>UCB</strong><span>Balances estimated reward with an uncertainty bonus throughout the run.</span></li>
              <li><strong>Regret</strong><span>Tracks expected reward lost when the selected arm is not the environment&apos;s best arm.</span></li>
            </ul>
          </section>
          <BanditDemo />
        </>
      ) : (
        <section className="explorer-detail-section" aria-labelledby="technical-focus-title">
          <h3 id="technical-focus-title">Technical focus</h3>
          <ProjectPreview project={project} />
          <ul className="explorer-highlight-list">
            {project.highlights.map((highlight) => <li key={highlight}><span>{highlight}</span></li>)}
          </ul>
          <p className="explorer-detail-note">Additional implementation details and verified project outputs can be added here as they become available.</p>
        </section>
      )}
    </div>
  );
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug)),
    [projects],
  );
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [plotOpen, setPlotOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (plotOpen) setPlotOpen(false);
        else setActiveProject(null);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusScope = plotOpen
        ? dialogRef.current.querySelector<HTMLElement>(".trajectory-lightbox")
        : dialogRef.current.querySelector<HTMLElement>(".explorer-dialog-panel");
      if (!focusScope) return;
      const focusable = Array.from(focusScope.querySelectorAll<HTMLElement>(
        "button:not([disabled]), a[href], select:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])",
      )).filter((element) => element.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject, plotOpen]);

  useEffect(() => {
    if (!activeProject) triggerRef.current?.focus();
  }, [activeProject]);

  useEffect(() => {
    if (plotOpen) window.requestAnimationFrame(() => lightboxCloseRef.current?.focus());
  }, [plotOpen]);

  const toggleCard = (slug: string) => {
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveProject(project);
  };

  const closeProject = () => {
    setPlotOpen(false);
    setActiveProject(null);
  };

  return (
    <>
      <div className="explorer-grid">
        {orderedProjects.map((project) => {
          const isFlipped = flipped.has(project.slug);
          const featuredClass = project.slug === "parallax"
            ? "explorer-card-parallax"
            : project.slug === "multi-armed-bandits" ? "explorer-card-bandits" : "";
          return (
            <article className={`explorer-card explorer-card-${project.slug} ${featuredClass} ${isFlipped ? "is-flipped" : ""}`} id={project.slug} key={project.slug}>
              <div className={`explorer-card-inner ${isFlipped ? "is-flipped" : ""}`}>
                <div aria-hidden={isFlipped} className="explorer-card-face explorer-card-front">
                  <h3>{project.slug === "multi-armed-bandits" ? "Sequential Decision-Making with Multi-Armed Bandits" : project.title}</h3>
                  <p>{project.summary}</p>
                  <ProjectPreview project={project} />
                  <ul aria-label={`${project.title} technologies and topics`}>
                    {project.topics.slice(0, 5).map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </div>

                <div aria-hidden={!isFlipped} className="explorer-card-face explorer-card-back">
                  <h3>{project.title}</h3>
                  <p>{project.slug === "multi-armed-bandits" ? banditDescription : project.summary}</p>
                  <ul className="explorer-card-highlights">
                    {project.highlights.slice(0, 2).map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <button
                    className="explorer-open-button"
                    onClick={(event) => { event.stopPropagation(); openProject(project, event.currentTarget); }}
                    tabIndex={isFlipped ? 0 : -1}
                    type="button"
                  >
                    Explore project <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
              <button
                aria-label={`${isFlipped ? "Show front of" : "Flip"} ${project.title} card`}
                aria-pressed={isFlipped}
                className="explorer-card-flip-trigger"
                onClick={() => toggleCard(project.slug)}
                type="button"
              />
            </article>
          );
        })}
      </div>

      {activeProject && (
        <div
          aria-labelledby="project-dialog-title"
          aria-modal="true"
          className="explorer-dialog-backdrop"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeProject(); }}
          ref={dialogRef}
          role="dialog"
        >
          <div className="explorer-dialog-panel">
            <button aria-label="Close project details" className="explorer-dialog-close" onClick={closeProject} ref={closeButtonRef} type="button">Close <span aria-hidden="true">×</span></button>
            <ProjectDetail project={activeProject} onEnlargePlot={() => setPlotOpen(true)} />
          </div>

          {plotOpen && (
            <div aria-label="Enlarged original Parallax trajectory plot" aria-modal="true" className="trajectory-lightbox" role="dialog">
              <button aria-label="Close enlarged plot" onClick={() => setPlotOpen(false)} ref={lightboxCloseRef} type="button">Close <span aria-hidden="true">×</span></button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Original Parallax trajectory comparison plot" src="/images/parallax-temporal-rotation-correction-1000.png" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
