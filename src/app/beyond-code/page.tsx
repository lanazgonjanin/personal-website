import type { Metadata } from "next";

import { SectionMarker } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Beyond Code",
  description: "A scrapbook of Lana Zgonjanin's interests, adventures, and experiences beyond technology.",
};

const scrapbookItems = [
  { number: "01", title: "Skiing", note: "Photograph and caption placeholder" },
  { number: "02", title: "Adventures", note: "Story, location, and photograph placeholder" },
  { number: "03", title: "Travel", note: "Travel memory and caption placeholder" },
  { number: "04", title: "Organizing events", note: "Event detail and photograph placeholder" },
  { number: "05", title: "Other interests", note: "More side quests to be added" },
];

export default function BeyondCodePage() {
  return (
    <>
      <header className="page-intro beyond-intro page-shell">
        <span className="mono-label">BEYOND CODE / FAVOURITE PAGE ♥</span>
        <h1>Usually on another<br /><em>side quest.</em></h1>
        <p>This is the less linear part of the portfolio: a home for the people, places, events, and adventures that happen away from a screen.</p>
      </header>

      <section className="club-section page-shell" aria-labelledby="club-heading">
        <SectionMarker index="01" label="LEADERSHIP" />
        <div className="club-grid">
          <div className="scrapbook-frame featured-frame" aria-label="McMaster Ski and Snowboard Club photograph placeholder" role="img">
            <span>PHOTO PLACEHOLDER</span><i>club / mountain / event</i>
          </div>
          <div>
            <span className="mono-label">MCMASTER SKI &amp; SNOWBOARD CLUB</span>
            <h2 id="club-heading">President,<br /><em>and chief side-quest organiser.</em></h2>
            <p>I served as president of the McMaster Ski and Snowboard Club.</p>
            <p className="content-placeholder">Dates, responsibilities, event details, and a personal reflection will be added after review.</p>
          </div>
        </div>
      </section>

      <section className="scrapbook-section" aria-labelledby="scrapbook-heading">
        <div className="page-shell">
          <SectionMarker index="02" label="SCRAPBOOK" />
          <div className="scrapbook-heading">
            <h2 id="scrapbook-heading">A collection of<br /><em>good detours.</em></h2>
            <p>The frames below are intentionally labelled placeholders for future personal photographs and real captions.</p>
          </div>
          <div className="scrapbook-grid">
            {scrapbookItems.map((item) => (
              <article className="scrapbook-item" key={item.number}>
                <div className="scrapbook-frame" aria-label={`${item.title} photograph placeholder`} role="img">
                  <span>PHOTO {item.number}</span><i>{item.note}</i>
                </div>
                <div><span className="mono-label">{item.number}</span><h3>{item.title}</h3><p className="content-placeholder">Caption to be written</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
