import type { Metadata } from "next";

import { ProjectExplorer } from "@/components/projects/project-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Experiments and engineering projects by Lana Zgonjanin across computer vision, machine learning, algorithms, and systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="forest-hero">
        <div className="forest-hero-overlay" aria-hidden="true" />
        <div className="forest-hero-content page-shell">
          <h1>Things I&apos;ve built.</h1>
          <p className="forest-hero-instruction">
            <span className="forest-instruction-click">Click a card to flip it and explore what&apos;s behind the build.</span>
            <span className="forest-instruction-tap">Tap a card to flip it and explore what&apos;s behind the build.</span>
          </p>
        </div>
      </header>

      <section className="forest-section forest-explorer page-shell" aria-label="Technical projects gallery">
        <ProjectExplorer projects={projects} />
      </section>
    </>
  );
}
