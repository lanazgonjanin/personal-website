import Image from "next/image";

import { EducationSection } from "@/components/education-section";
import { experience, publications, technologyGroups } from "@/data/profile";

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <header className="profile-section-heading">
      <h2 id={id}>{title}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <div className="profile-home">
      <section className="home-intro" aria-labelledby="home-heading">
        <Image
          alt=""
          aria-hidden="true"
          className="home-intro-image"
          fill
          priority
          sizes="100vw"
          src="/images/radomir-moysia-mountains.jpg"
        />
        <div className="home-intro-content page-shell">
          <h1 id="home-heading">Hi, I&apos;m Lana.</h1>
          <p className="home-introduction">
            I&apos;m a Master&apos;s student at the University of Toronto who loves building things, figuring
            out how they work, and fixing them when they don&apos;t. I want to bring more creativity and fun
            into tech. My current interests include reinforcement learning, robotics, control systems,
            and embedded software.
          </p>
        </div>
      </section>

      <section className="profile-section credentials-section page-shell" aria-label="Education and technical skills">
        <div className="credentials-grid">
          <EducationSection />

          <div className="technology-column">
            <SectionHeading id="tech-title" title="Tech Stack" />
            <div className="technology-panel" aria-labelledby="tech-title">
              <div className="technology-grid">
                {technologyGroups.map((group) => (
                  <div className="technology-group" key={group.label}>
                    <h3>{group.label}</h3>
                    <ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section experience-profile-section" aria-labelledby="experience-title">
        <Image
          alt=""
          aria-hidden="true"
          className="experience-background-image"
          fill
          sizes="100vw"
          src="/images/magda-ehlers-ocean-waves.jpg"
        />
        <div className="experience-overlay" aria-hidden="true" />
        <div className="experience-content page-shell">
          <SectionHeading id="experience-title" title="Experience" />
          <div className="experience-list">
            {experience.map((entry) => (
              <article className="experience-entry" key={entry.role}>
                <div className="experience-date">
                  <span className="mono-label">{entry.dates}</span>
                </div>
                <div className="experience-primary">
                  <h3>{entry.role}</h3>
                  <p>{entry.organization}</p>
                  <p className="experience-location">{entry.location}</p>
                </div>
                <ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section publications-profile-section page-shell" aria-labelledby="publications-title">
        <SectionHeading id="publications-title" title="Publications" />
        <div className="compact-publication-list">
          {publications.map((publication) => (
            <article className="compact-publication" key={publication.title}>
              <div>
                <h3><a href={publication.href}>{publication.title}<span aria-hidden="true"> ↗</span></a></h3>
                <p className="publication-meta">
                  <span>{publication.venue}</span>
                  <span className="publication-date">{publication.date}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
