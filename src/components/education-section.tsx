"use client";

import { useState } from "react";

import { education } from "@/data/profile";

export function EducationSection() {
  const [expandedAward, setExpandedAward] = useState<string | null>(null);
  const [hoveredAward, setHoveredAward] = useState<string | null>(null);

  return (
    <div className="education-column">
      <header className="profile-section-heading">
        <h2 id="education-title">Education</h2>
      </header>

      <div className="education-list">
        {education.map((entry) => (
          <article className="education-entry" key={entry.institution}>
            <header className="education-summary">
              <span className="mono-label">{entry.dates}</span>
              <h3>{entry.institution}</h3>
              <p>{entry.degree}</p>
              {entry.gpa && <span className="education-gpa">GPA: {entry.gpa}</span>}
            </header>

            <div className="education-details">
              {entry.awards && (
                <div className="awards-group">
                  <h4>Awards</h4>
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
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <div>
                <h4>Relevant coursework</h4>
                <ul className="inline-list">{entry.coursework.map((course) => <li key={course}>{course}</li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
