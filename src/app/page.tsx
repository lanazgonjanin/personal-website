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

      <EducationSection />

      <section className="profile-section tech-section page-shell" aria-labelledby="tech-title">
        <SectionHeading id="tech-title" title="Tech Stack" />
        <div className="technology-grid">
          {technologyGroups.map((group) => (
            <div className="technology-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section experience-profile-section page-shell" aria-labelledby="experience-title">
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
      </section>

      <section className="profile-section publications-profile-section page-shell" aria-labelledby="publications-title">
        <SectionHeading id="publications-title" title="Publications" />
        <div className="compact-publication-list">
          {publications.map((publication) => (
            <article className="compact-publication" key={publication.title}>
              <div>
                <h3><a href={publication.href}>{publication.title}<span aria-hidden="true"> ↗</span></a></h3>
                <p>{publication.venue} · {publication.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
