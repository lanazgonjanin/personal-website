import type { Metadata } from "next";

import { SectionMarker } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact and professional profile links for Lana Zgonjanin.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-intro contact-intro page-shell">
        <span className="mono-label">CONTACT / START A CONVERSATION</span>
        <h1>Thoughtful problems<br /><em>are worth discussing.</em></h1>
        <p>This page will collect verified ways to get in touch and follow my work. No contact destination is published until it is ready.</p>
      </header>
      <section className="contact-directory page-shell" aria-labelledby="contact-heading">
        <SectionMarker index="01" label="DIRECTORY" />
        <h2 className="sr-only" id="contact-heading">Contact directory</h2>
        <div className="contact-row"><span className="mono-label">01</span><h2>Email</h2><p>Direct professional enquiries.</p><span className="availability">Address forthcoming</span></div>
        <div className="contact-row"><span className="mono-label">02</span><h2>GitHub</h2><p>Code, experiments, and project repositories.</p><span className="availability">Link forthcoming</span></div>
        <div className="contact-row"><span className="mono-label">03</span><h2>LinkedIn</h2><p>Professional background and connections.</p><span className="availability">Link forthcoming</span></div>
        <div className="contact-row"><span className="mono-label">04</span><h2>Résumé</h2><p>A downloadable overview of education and experience.</p><span className="availability">File forthcoming</span></div>
      </section>
    </>
  );
}
