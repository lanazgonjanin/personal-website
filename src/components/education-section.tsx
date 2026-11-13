"use client";

import { useState } from "react";

import { education } from "@/data/profile";

const locations = [
  { city: "Toronto", institution: "University of Toronto", left: "50.1%", top: "34%" },
  { city: "Hamilton", institution: "McMaster University", left: "14.9%", top: "75.6%" },
];

export function EducationSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedAward, setExpandedAward] = useState<string | null>(null);
  const [hoveredAward, setHoveredAward] = useState<string | null>(null);

  const toggleEntry = (index: number) => {
    setActiveIndex(null);
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="profile-section education-section page-shell" aria-labelledby="education-title">
      <header className="profile-section-heading">
        <h2 id="education-title">Education</h2>
      </header>

      <div className="education-layout">
        <figure className="education-map">
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="ontario-map-title ontario-map-description">
            <title id="ontario-map-title">Southern Ontario university locations</title>
            <desc id="ontario-map-description">
              The western Lake Ontario shoreline with Toronto northeast of Hamilton.
            </desc>
            <path className="map-lake" d="M96.5 219.5L123.8 220.1L126 216.2L137.2 221.8L136.6 212.2L146.6 224.5L161.2 228.6L214.1 238.7L274.1 242.2L303.9 232.3L306.8 226.3L313.9 230.5L332.4 223L520 194.2L520 62.4L484.7 62.9L456.3 70.7L421.9 69.9L400.5 76.1L392.6 71.7L389.2 73.7L392.8 75.2L353.3 86L342.5 81.6L345.8 84.9L326.1 97.7L277 122.3L275.2 133.2L269.1 134.1L270.6 130.2L275.1 131.8L271.5 130.2L273.5 125.2L247.9 130.9L234.7 128.3L220.1 140.7L211.7 140.5L200.2 150.6L193.5 149L198.7 150.7L193.4 153.9L192.4 164.3L170 179.6L158.5 193.9L133.7 207.6L136.4 212.1L131.2 208.9Z" />
          </svg>

          {locations.map((location, index) => (
            <button
              aria-controls={`education-details-${index}`}
              aria-expanded={expandedIndex === index}
              aria-label={`${location.institution}, ${location.city}`}
              className={`map-pin ${activeIndex === index || expandedIndex === index ? "is-active" : ""}`}
              key={location.city}
              onBlur={() => setActiveIndex(null)}
              onClick={() => toggleEntry(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ left: location.left, top: location.top }}
              type="button"
            >
              <span className="map-pin-dot" aria-hidden="true" />
              <span>{location.city}</span>
            </button>
          ))}

          <figcaption>
            Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>
          </figcaption>
        </figure>

        <div className="education-list">
          {education.map((entry, index) => {
            const expanded = expandedIndex === index;
            const active = activeIndex === index || expanded;

            return (
              <article
                className={`education-entry ${active ? "is-active" : ""}`}
                key={entry.institution}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <button
                  aria-controls={`education-details-${index}`}
                  aria-expanded={expanded}
                  className="education-summary"
                  onBlur={() => setActiveIndex(null)}
                  onClick={() => toggleEntry(index)}
                  onFocus={() => setActiveIndex(index)}
                  type="button"
                >
                  <span>
                    <span className="mono-label">{entry.dates}</span>
                    <strong>{entry.institution}</strong>
                    <span>{entry.degree}</span>
                    {entry.gpa && <span className="education-gpa">GPA: {entry.gpa}</span>}
                  </span>
                  <span className="education-toggle" aria-hidden="true">{expanded ? "−" : "+"}</span>
                </button>

                <div className="education-details" hidden={!expanded} id={`education-details-${index}`}>
                  {entry.awards && (
                    <div className="awards-group">
                      <h3>Awards</h3>
                      <ul className="award-list">
                        {entry.awards.map((award, awardIndex) => {
                          const visible = expandedAward === award.name || hoveredAward === award.name;
                          const descriptionId = `award-description-${awardIndex}`;

                          return (
                            <li key={award.name}>
                              <button
                                aria-controls={descriptionId}
                                aria-expanded={visible}
                                className="award-button"
                                onBlur={() => setHoveredAward(null)}
                                onClick={() => setExpandedAward((current) => current === award.name ? null : award.name)}
                                onFocus={() => setHoveredAward(award.name)}
                                onMouseEnter={() => setHoveredAward(award.name)}
                                onMouseLeave={() => setHoveredAward(null)}
                                type="button"
                              >
                                <span>{award.name}</span>
                                <span aria-hidden="true">{visible ? "−" : "+"}</span>
                              </button>
                              <div className="award-description" hidden={!visible} id={descriptionId}>
                                <p>{award.description}</p>
                                {award.courses && (
                                  <ul>{award.courses.map((course) => <li key={course}>{course}</li>)}</ul>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3>Relevant coursework</h3>
                    <ul className="inline-list">{entry.coursework.map((course) => <li key={course}>{course}</li>)}</ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
