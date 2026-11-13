"use client";

import { useMemo, useState } from "react";

import type { Project } from "@/data/projects";

const categoryBySlug: Record<string, string> = {
  polyglot: "Machine Learning",
  ekgram: "Computer Vision",
  "shortest-path-algorithms": "Algorithms",
  "virtual-memory-simulator": "Systems",
};

const featuredSlugs = new Set(["parallax", "multi-armed-bandits"]);

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const galleryProjects = useMemo(() => projects.filter((project) => !featuredSlugs.has(project.slug)), [projects]);
  const categories = useMemo(() => ["All", ...Array.from(new Set(galleryProjects.map((project) => categoryBySlug[project.slug])))], [galleryProjects]);
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = activeCategory === "All"
    ? galleryProjects
    : galleryProjects.filter((project) => categoryBySlug[project.slug] === activeCategory);

  return (
    <div>
      <div className="forest-filters" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            aria-pressed={activeCategory === category}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="forest-project-grid" aria-live="polite">
        {visibleProjects.map((project) => (
          <article className="forest-project-card" id={project.slug} key={project.slug}>
            <span>{categoryBySlug[project.slug]}</span>
            <h3>{project.title}</h3>
            <p className="forest-card-subtitle">{project.subtitle}</p>
            <p>{project.summary}</p>
            <ul aria-label={`${project.title} topics`}>
              {project.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <details>
              <summary>Technical details</summary>
              <p>Focus areas: {project.topics.join(", ")}.</p>
            </details>
          </article>
        ))}
      </div>
    </div>
  );
}
