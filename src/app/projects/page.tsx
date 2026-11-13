import type { Metadata } from "next";
import Image from "next/image";

import { BanditDemo } from "@/components/projects/bandit-demo";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { TrajectoryVisualization } from "@/components/projects/trajectory-visualization";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Experiments and engineering projects by Lana Zgonjanin across computer vision, machine learning, algorithms, and systems.",
};

const parallax = projects.find((project) => project.slug === "parallax")!;

const parallaxTopics = ["Python", "OpenCV", "KITTI", "ORB", "RANSAC"];
const banditTopics = ["Python", "ETC", "UCB", "Regret analysis"];

export default function ProjectsPage() {
  return (
    <>
      <header className="forest-hero">
        <Image
          alt="Aerial view of fog drifting through a dense evergreen forest"
          className="forest-hero-image"
          fill
          priority
          sizes="100vw"
          src="/images/filip-zrnzevic-forest.jpg"
        />
        <div className="forest-hero-overlay" aria-hidden="true" />
        <div className="forest-hero-content page-shell">
          <h1>Things I&apos;ve built.</h1>
          <p>A collection of experiments, engineering projects, and things I wanted to figure out.</p>
        </div>
      </header>

      <section className="forest-section forest-featured page-shell" aria-labelledby="featured-projects-title">
        <header className="forest-section-heading">
          <span>SELECTED EXPERIMENTS</span>
          <h2 id="featured-projects-title">Featured Projects</h2>
        </header>

        <article className="forest-feature forest-feature-parallax" id="parallax">
          <div className="forest-feature-copy">
            <span className="forest-project-index">01 / COMPUTER VISION</span>
            <h3>{parallax.title}</h3>
            <p className="forest-project-subtitle">{parallax.subtitle}</p>
            <p>{parallax.summary}</p>
            <ul className="forest-tag-list" aria-label="Parallax technologies">
              {parallaxTopics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <details className="forest-explanation">
              <summary>How the pipeline works</summary>
              <div>
                <p><strong>Feature detection and matching:</strong> ORB features connect visual landmarks across consecutive frames.</p>
                <p><strong>Relative pose:</strong> RANSAC filters outliers while the essential matrix provides camera rotation and translation direction.</p>
                <p><strong>Scale ambiguity:</strong> a monocular camera recovers motion only up to an unknown scale without another measurement source.</p>
                <p><strong>Reconstruction:</strong> relative poses accumulate into a camera trajectory, with offline temporal rotation correction reducing orientation drift.</p>
              </div>
            </details>
          </div>
          <TrajectoryVisualization />
        </article>

        <article className="forest-feature forest-feature-bandits" id="multi-armed-bandits">
          <div className="forest-feature-copy">
            <span className="forest-project-index">02 / REINFORCEMENT LEARNING</span>
            <h3>Sequential Decision-Making with Multi-Armed Bandits</h3>
            <p className="forest-project-subtitle">Exploration, exploitation, and regret</p>
            <p>A working comparison of Explore-Then-Commit and Upper Confidence Bound on the same seeded reward environment.</p>
            <ul className="forest-tag-list" aria-label="Multi-Armed Bandits technologies">
              {banditTopics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <details className="forest-explanation">
              <summary>Why the algorithms differ</summary>
              <div>
                <p><strong>ETC:</strong> explores each arm for a fixed number of rounds, then commits to the arm with the highest estimated reward.</p>
                <p><strong>UCB:</strong> repeatedly combines estimated reward with an uncertainty bonus, favouring arms that are promising or underexplored.</p>
                <p><strong>Regret:</strong> measures the expected reward lost by not selecting the environment&apos;s best arm at each round.</p>
              </div>
            </details>
          </div>
          <BanditDemo />
        </article>
      </section>

      <section className="forest-section forest-all-projects page-shell" aria-labelledby="all-projects-title">
        <header className="forest-section-heading forest-gallery-heading">
          <span>PROJECT DIRECTORY</span>
          <h2 id="all-projects-title">All Projects</h2>
        </header>
        <ProjectGallery projects={projects} />
      </section>
    </>
  );
}
