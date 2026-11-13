import type { Metadata } from "next";

import { SectionMarker } from "@/components/page-shell";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Technical projects by Lana Zgonjanin across computer vision, signal processing, reinforcement learning, algorithms, and systems.",
};

const visualKinds = ["motion", "signal", "language", "bandit", "graph", "memory"] as const;

export default function ProjectsPage() {
  return (
    <>
      <header className="page-intro page-shell">
        <span className="mono-label">PROJECT INDEX / 01—06</span>
        <h1>Technical work,<br /><em>carefully observed.</em></h1>
        <p>Projects across perception, signals, learning, algorithms, and computer systems. Each begins with a question and a structure for exploring it.</p>
      </header>

      <section className="project-index page-shell" aria-labelledby="project-index-heading">
        <SectionMarker index="01" label="PROJECTS" />
        <h2 className="sr-only" id="project-index-heading">All technical projects</h2>
        {projects.map((project, index) => (
          <article className={`index-project index-project-${index + 1}`} id={project.slug} key={project.slug}>
            <div className="index-art"><ProjectVisual kind={visualKinds[index]} /></div>
            <div className="index-copy">
              <span className="mono-label">0{index + 1} / {project.field.toUpperCase()}</span>
              <h2>{project.title}</h2>
              <p className="project-kicker">{project.subtitle}</p>
              <p>{project.summary}</p>
              <ul className="tag-list" aria-label={`${project.title} topics`}>{project.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              <p className="future-note"><span aria-hidden="true">↳</span> Case study and interactive demo architecture ready for a future route.</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
